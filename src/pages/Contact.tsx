import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { sendContact } from "../services/contact";
const solutionOptions = [
  ["compras", "Compras"],
  ["comex", "COMEX"],
  ["importacao", "Importação"],
  ["estoque", "Estoque"],
  ["financeiro", "Financeiro"],
  ["analytics", "Analytics"],
  ["integracoes", "Integrações"],
  ["completa", "Plataforma completa"],
];
export default function Contact() {
  const [interesse, setInteresse] = useState("entender");
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ready, setReady] = useState(false);
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "";
  useEffect(() => {
    setReady(true);
    const params = new URLSearchParams(location.search);
    const interest = params.get("interesse");
    if (interest === "plataforma" || interest === "gerenciado")
      setInteresse(interest);
    const solution = params.get("solucao");
    if (solution && solutionOptions.some(([id]) => id === solution))
      setSelected([solution]);
  }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setStatus("");
    setSuccess(false);
    try {
      await sendContact(
        {
          ...Object.fromEntries(data),
          solutions: selected,
          consent: data.get("consent") === "on",
          interest: interesse,
        },
        endpoint,
      );
      setSuccess(true);
      setStatus(
        "Mensagem enviada. Obrigado por compartilhar sua operação com a HiGamer.",
      );
      form.reset();
      setSelected([]);
      setInteresse("entender");
    } catch (error) {
      setStatus(
        error instanceof Error &&
          error.name !== "TypeError" &&
          error.name !== "TimeoutError"
          ? error.message
          : "Não foi possível conectar ao canal de atendimento. Seus dados não foram confirmados. Tente novamente.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <i />
            VAMOS CONVERSAR
          </span>
          <h1>
            O próximo horizonte
            <br />
            começa com uma <em>conversa.</em>
          </h1>
          <p>
            Cada empresa possui processos, desafios e necessidades diferentes.
            Conte para a HiGamer um pouco sobre sua operação e vamos avaliar
            como o HiAtlas pode ajudar.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <span className="eyebrow">
              Sua operação, nosso ponto de partida
            </span>
            <h2>
              Vamos conversar
              <br />
              sobre sua operação?
            </h2>
            <p>Queremos entender o processo antes de propor a tecnologia.</p>
            {[
              [
                "01",
                "Conhecer sua realidade",
                "Os processos, as pessoas e os principais desafios.",
              ],
              [
                "02",
                "Conectar as possibilidades",
                "Os módulos e integrações que fazem sentido para sua empresa.",
              ],
              [
                "03",
                "Definir o próximo passo",
                "Uma demonstração orientada à sua operação.",
              ],
            ].map(([n, title, text]) => (
              <div className="contact-step" key={n}>
                <span>{n}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
            {!endpoint && (
              <div className="channel-note">
                O atendimento por este formulário está em preparação. Você pode
                explorar os campos, mas o envio será liberado quando o canal
                oficial estiver configurado.
              </div>
            )}
          </aside>
          <form className="contact-form" method="post" onSubmit={submit}>
            <noscript>
              Ative o JavaScript para utilizar o formulário. Nenhum dado será
              enviado sem ele.
            </noscript>
            <p className="form-note">
              * Campos obrigatórios. Preencha os demais apenas se desejar
              compartilhar.
            </p>
            <div className="form-grid">
              <label className="field">
                Nome *
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                />
              </label>
              <label className="field">
                Empresa *
                <input
                  name="company"
                  autoComplete="organization"
                  required
                  maxLength={160}
                />
              </label>
              <label className="field">
                Cargo
                <input
                  name="role"
                  autoComplete="organization-title"
                  maxLength={120}
                />
              </label>
              <label className="field">
                E-mail corporativo *
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </label>
              <label className="field">
                Telefone / WhatsApp
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                />
              </label>
              <label className="field">
                Cidade / Estado
                <input
                  name="city"
                  autoComplete="address-level2"
                  maxLength={120}
                  placeholder="Ex.: Curitiba / PR"
                />
              </label>
              <label className="field">
                Número aproximado de colaboradores
                <select name="employees" defaultValue="">
                  <option value="">Selecione</option>
                  {[
                    "1 a 10",
                    "11 a 50",
                    "51 a 200",
                    "201 a 1.000",
                    "Mais de 1.000",
                  ].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                Segmento da empresa
                <input
                  name="industry"
                  maxLength={120}
                  placeholder="Ex.: comércio, indústria, serviços"
                />
              </label>
            </div>
            <fieldset>
              <legend>Quais soluções interessam?</legend>
              <div className="choices">
                {solutionOptions.map(([id, label]) => (
                  <label key={id}>
                    <input
                      type="checkbox"
                      value={id}
                      checked={selected.includes(id)}
                      onChange={(e) =>
                        setSelected(
                          e.target.checked
                            ? [...selected, id]
                            : selected.filter((item) => item !== id),
                        )
                      }
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="field">
              Como sua empresa controla esses processos atualmente?
              <textarea
                name="current_process"
                maxLength={2000}
                placeholder="Planilhas, sistemas, controles manuais…"
              />
            </label>
            <label className="field">
              Qual é o principal problema que gostaria de resolver?
              <textarea name="problem" maxLength={2000} />
            </label>
            <fieldset>
              <legend>Forma de interesse</legend>
              <div className="choices interest-choices">
                {[
                  ["plataforma", "HiAtlas Plataforma"],
                  ["gerenciado", "HiAtlas Serviço Gerenciado"],
                  ["entender", "Ainda quero entender as opções"],
                ].map(([id, label]) => (
                  <label key={id}>
                    <input
                      type="radio"
                      name="interest"
                      value={id}
                      checked={interesse === id}
                      onChange={() => setInteresse(id)}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="field">
              Mensagem
              <textarea name="message" maxLength={3000} />
            </label>
            <div id="dados">
              <label className="consent-label">
                <input name="consent" type="checkbox" required />
                Concordo que meus dados sejam utilizados pela HiGamer para
                entrar em contato comigo sobre o HiAtlas. *
              </label>
              <p className="privacy-note">
                Compartilhe somente informações necessárias para esta conversa.
                Não inclua senhas, documentos pessoais ou dados sensíveis. Os
                dados deste formulário não são salvos no navegador.
              </p>
            </div>
            <Button type="submit" disabled={!ready || sending}>
              {sending ? "Enviando…" : "Quero conhecer o HiAtlas"}
              {success ? (
                <CheckCircle2 size={17} />
              ) : (
                <ArrowUpRight size={17} />
              )}
            </Button>
            <div role="status" aria-live="polite" aria-atomic="true">
              {status && (
                <p className={`form-status ${success ? "success" : ""}`}>
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
