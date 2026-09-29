import http from "node:http";
import nodemailer from "nodemailer";

const HOST = process.env.CONTACT_API_HOST || "127.0.0.1";
const PORT = Number(process.env.CONTACT_API_PORT || 8787);

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "contato@hiatlas.com.br";

const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "contato@hiatlas.com.br";

const requiredEnvironment = {
  SMTP_HOST,
  SMTP_USER,
  SMTP_PASSWORD,
};

for (const [name, value] of Object.entries(requiredEnvironment)) {
  if (!value) {
    console.error(`Variável obrigatória ausente: ${name}`);
    process.exit(1);
  }
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function clean(value, maxLength = 3000) {
  if (typeof value !== "string") return "";

  return value
    .trim()
    .replace(/\0/g, "")
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request) {
  const forwarded = request.headers["x-forwarded-for"];

  if (typeof forwarded === "string" && forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return request.socket.remoteAddress || "unknown";
}

function canSend(ip) {
  const now = Date.now();

  const attempts = (rateLimit.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW,
  );

  if (attempts.length >= RATE_LIMIT_MAX) {
    rateLimit.set(ip, attempts);
    return false;
  }

  attempts.push(now);
  rateLimit.set(ip, attempts);

  return true;
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });

  response.end(JSON.stringify(payload));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    let size = 0;

    request.on("data", (chunk) => {
      size += chunk.length;

      if (size > 64 * 1024) {
        reject(new Error("Payload muito grande."));
        request.destroy();
        return;
      }

      body += chunk;
    });

    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("JSON inválido."));
      }
    });

    request.on("error", reject);
  });
}

const server = http.createServer(async (request, response) => {
  if (request.method === "GET" && request.url === "/health") {
    sendJson(response, 200, {
      status: "ok",
      service: "hiatlas-contact",
    });

    return;
  }

  if (request.method !== "POST" || request.url !== "/api/contact") {
    sendJson(response, 404, {
      error: "Not found",
    });

    return;
  }

  const ip = getClientIp(request);

  if (!canSend(ip)) {
    sendJson(response, 429, {
      error:
        "Muitas mensagens enviadas. Aguarde alguns minutos e tente novamente.",
    });

    return;
  }

  try {
    const data = await readJson(request);

    const name = clean(data.name, 120);
    const company = clean(data.company, 160);
    const role = clean(data.role, 120);
    const email = clean(data.email, 254);
    const phone = clean(data.phone, 30);
    const city = clean(data.city, 120);
    const employees = clean(data.employees, 100);
    const industry = clean(data.industry, 120);
    const currentProcess = clean(data.current_process, 2000);
    const problem = clean(data.problem, 2000);
    const message = clean(data.message, 3000);
    const interest = clean(data.interest, 100);

    const solutions = Array.isArray(data.solutions)
      ? data.solutions.map((item) => clean(item, 100)).filter(Boolean)
      : [];

    const consent = data.consent === true;

    if (!name || !company || !email) {
      sendJson(response, 400, {
        error: "Nome, empresa e e-mail são obrigatórios.",
      });

      return;
    }

    if (!validEmail(email)) {
      sendJson(response, 400, {
        error: "Informe um endereço de e-mail válido.",
      });

      return;
    }

    if (!consent) {
      sendJson(response, 400, {
        error: "É necessário aceitar o uso dos dados para contato.",
      });

      return;
    }

    const subject = `Novo contato HiAtlas | ${company} | ${name}`;

    const text = `
Novo contato recebido através do site HiAtlas

Nome: ${name}
Empresa: ${company}
Cargo: ${role || "Não informado"}
E-mail: ${email}
Telefone / WhatsApp: ${phone || "Não informado"}
Cidade / Estado: ${city || "Não informado"}
Colaboradores: ${employees || "Não informado"}
Segmento: ${industry || "Não informado"}

Soluções de interesse:
${solutions.length ? solutions.join(", ") : "Não informado"}

Forma de interesse:
${interest || "Não informado"}

Como controla os processos atualmente:
${currentProcess || "Não informado"}

Principal problema:
${problem || "Não informado"}

Mensagem:
${message || "Não informado"}
`.trim();

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:720px;margin:auto;color:#1d2433;">
        <h2 style="margin-bottom:8px;">Novo contato pelo site HiAtlas</h2>

        <p style="color:#5f6878;">
          Uma nova oportunidade foi recebida através do formulário do HiAtlas.
        </p>

        <hr style="border:0;border-top:1px solid #e6e8ec;margin:24px 0;" />

        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
        <p><strong>Cargo:</strong> ${escapeHtml(role || "Não informado")}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefone / WhatsApp:</strong> ${escapeHtml(phone || "Não informado")}</p>
        <p><strong>Cidade / Estado:</strong> ${escapeHtml(city || "Não informado")}</p>
        <p><strong>Número de colaboradores:</strong> ${escapeHtml(employees || "Não informado")}</p>
        <p><strong>Segmento:</strong> ${escapeHtml(industry || "Não informado")}</p>

        <h3>Soluções de interesse</h3>
        <p>${escapeHtml(solutions.length ? solutions.join(", ") : "Não informado")}</p>

        <h3>Forma de interesse</h3>
        <p>${escapeHtml(interest || "Não informado")}</p>

        <h3>Processo atual</h3>
        <p>${escapeHtml(currentProcess || "Não informado").replaceAll("\n", "<br>")}</p>

        <h3>Principal problema</h3>
        <p>${escapeHtml(problem || "Não informado").replaceAll("\n", "<br>")}</p>

        <h3>Mensagem</h3>
        <p>${escapeHtml(message || "Não informado").replaceAll("\n", "<br>")}</p>

        <hr style="border:0;border-top:1px solid #e6e8ec;margin:24px 0;" />

        <p style="font-size:13px;color:#7b8493;">
          Enviado através de www.hiatlas.com.br
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"HiAtlas | Contato" <${CONTACT_FROM_EMAIL}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    console.log(
      `[HiAtlas Contact] mensagem enviada | empresa=${company} | email=${email}`,
    );

    sendJson(response, 200, {
      success: true,
    });
  } catch (error) {
    console.error("[HiAtlas Contact] erro:", error);

    sendJson(response, 500, {
      error: "Não foi possível enviar a mensagem.",
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(
    `HiAtlas Contact API disponível em http://${HOST}:${PORT}`,
  );
});