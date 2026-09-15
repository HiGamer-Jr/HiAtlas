import { Check, ArrowUpRight } from "lucide-react";
import { CTA, DemoLink, Reveal } from "../components/UI";
import { solutions } from "../data/content";
export default function Solutions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <i />
            SOLUÇÕES E PROJETOS
          </span>
          <h1>
            Um ecossistema
            <br />
            de <em>possibilidades.</em>
          </h1>
          <p>
            Ative somente aquilo que sua empresa precisa. Conecte novos módulos
            conforme sua operação encontra novos horizontes.
          </p>
          <DemoLink label="Encontre a solução para sua empresa" />
          <div className="roadmap-note">
            Conheça a visão dos módulos e projetos HiAtlas. O escopo e a
            disponibilidade de cada recurso são avaliados na demonstração.
          </div>
        </div>
      </section>
      <section className="section solutions-section">
        <div className="container solutions-layout">
          <aside className="solutions-nav">
            <span className="eyebrow">Explore o ecossistema</span>
            <nav aria-label="Módulos e projetos">
              {solutions.map(({ id, area, icon: Icon }) => (
                <a key={id} href={`#${id}`}>
                  <Icon size={17} />
                  {area}
                </a>
              ))}
            </nav>
          </aside>
          <div className="solutions-content">
            {solutions.map(
              ({ id, name, area, icon: Icon, summary, features }, i) => (
                <Reveal key={id}>
                  <article className="solution-detail" id={id}>
                    <div className="solution-title">
                      <span className="solution-icon">
                        <Icon size={27} />
                      </span>
                      <span className="solution-index">
                        {String(i + 1).padStart(2, "0")} / HIATLAS
                      </span>
                    </div>
                    <span className="eyebrow">{area}</span>
                    <h2>{name}</h2>
                    <p>{summary}</p>
                    <ul>
                      {features.map((f) => (
                        <li key={f}>
                          <Check size={16} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      className="text-link"
                      href={`/contato?solucao=${encodeURIComponent(id)}`}
                    >
                      Conversar sobre esta solução <ArrowUpRight size={17} />
                    </a>
                  </article>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
