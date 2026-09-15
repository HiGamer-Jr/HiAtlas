import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import HiAtlas from "./pages/HiAtlas";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
export default function App({ path = "/" }: { path?: string }) {
  const route = path.replace(/\/$/, "") || "/";
  const Page =
    route === "/"
      ? Home
      : route === "/hiatlas"
        ? HiAtlas
        : route === "/solucoes"
          ? Solutions
          : route === "/contato"
            ? Contact
            : null;
  return (
    <Layout path={route}>
      {Page ? (
        <Page />
      ) : (
        <section className="section">
          <div className="container">
            <span className="eyebrow">Página não encontrada</span>
            <h1>
              Vamos retomar
              <br />a direção?
            </h1>
            <p style={{ margin: "24px 0" }}>
              Este endereço não faz parte do site HiAtlas.
            </p>
            <a className="button button-primary" href="/">
              Voltar ao início
            </a>
          </div>
        </section>
      )}
    </Layout>
  );
}
