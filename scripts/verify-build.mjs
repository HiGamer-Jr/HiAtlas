import { readFile, access } from "node:fs/promises";
import assert from "node:assert/strict";
const routes = ["/", "/hiatlas", "/solucoes", "/contato"];
const pages = new Map();
for (const route of routes)
  pages.set(
    route,
    await readFile(`dist${route === "/" ? "" : route}/index.html`, "utf8"),
  );
const descriptions = new Set();
for (const [route, html] of pages) {
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${route}: one H1`,
  );
  const description = html.match(
    /<meta\s+name="description"\s+content="([^"]+)"/,
  )[1];
  assert.ok(
    html.includes(`property="og:description" content="${description}"`),
    `${route}: consistent description`,
  );
  descriptions.add(description);
  for (const [, rawHref] of html.matchAll(/href="(\/[^"]*)"/g)) {
    const url = new URL(
      rawHref.replaceAll("&amp;", "&"),
      "https://hiatlas.test",
    );
    if (/\.(css|js|webp|png)$/.test(url.pathname)) {
      await access(`dist${url.pathname}`);
      continue;
    }
    const destination = pages.get(url.pathname);
    assert.ok(destination, `${route}: missing route ${url.pathname}`);
    if (url.hash)
      assert.ok(
        destination.includes(`id="${url.hash.slice(1)}"`),
        `${route}: missing anchor ${rawHref}`,
      );
  }
  for (const [, src] of html.matchAll(/src="(\/[^"]+)"/g))
    await access(`dist${src}`);
  console.log(`Verified ${route}: heading, SEO, links and assets`);
}
assert.equal(descriptions.size, routes.length, "Unique descriptions per route");
assert.match(pages.get("/contato"), /<form[^>]*method="post"/);
assert.match(
  pages.get("/contato"),
  /<button[^>]*type="submit"[^>]*disabled=""/,
);
