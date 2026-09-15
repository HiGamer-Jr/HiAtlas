import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import Contact from "./Contact";
it("não permite envio GET com dados pessoais antes da hidratação", () => {
  const html = renderToStaticMarkup(<Contact />);
  expect(html).toMatch(/<form[^>]*method="post"/);
  expect(html).toMatch(/<button[^>]*type="submit"[^>]*disabled=""/);
});
