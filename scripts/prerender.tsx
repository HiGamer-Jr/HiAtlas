import React from "react";
import { renderToString } from "react-dom/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer, loadEnv } from "vite";
const env = loadEnv("production", process.cwd(), "VITE_");
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  mode: "production",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const { metadata } = await server.ssrLoadModule("/src/data/content.ts");
  const template = await readFile("dist/index.html", "utf8");
  const origin = env.VITE_SITE_URL?.replace(/\/$/, "");
  const escape = (value: string) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;");
  for (const [route, value] of Object.entries(metadata)) {
    const meta = value as { title: string; description: string };
    const html = renderToString(React.createElement(App, { path: route }));
    const url = origin ? `${origin}${route}` : "";
    const head = `<meta property="og:type" content="website"/><meta property="og:locale" content="pt_BR"/><meta property="og:site_name" content="HiAtlas by HiGamer"/><meta property="og:title" content="${escape(meta.title)}"/><meta property="og:description" content="${escape(meta.description)}"/>${url ? `<link rel="canonical" href="${escape(url)}"/><meta property="og:url" content="${escape(url)}"/>` : ""}`;
    const output = template
      .replace("<!--app-html-->", html)
      .replace(/<title>.*?<\/title>/, `<title>${escape(meta.title)}</title>`)
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/,
        `<meta name="description" content="${escape(meta.description)}"/>`,
      )
      .replace("</head>", `${head}</head>`);
    const directory = resolve("dist", route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(resolve(directory, "index.html"), output);
    console.log(`Prerendered ${route}`);
  }
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ""}`,
  );
  if (origin)
    await writeFile(
      "dist/sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(
        metadata,
      )
        .map((route) => `<url><loc>${escape(origin + route)}</loc></url>`)
        .join("")}</urlset>`,
    );
} finally {
  await server.close();
}
