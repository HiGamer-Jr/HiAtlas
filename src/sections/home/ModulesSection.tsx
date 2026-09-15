import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionTitle, TextLink } from "../../components/UI";
import { homeModules } from "../../data/content";

export function ModulesSection() {
  return (
    <section className="section tinted">
      <div className="container">
        <Reveal>
          <div className="heading-row">
            <SectionTitle
              eyebrow="Conheça o HiAtlas"
              title={
                <>
                  Toda a operação.
                  <br />
                  Novas possibilidades.
                </>
              }
              text="Uma plataforma modular que acompanha a realidade da sua empresa. Comece com o que precisa e amplie conforme sua operação evolui."
            />
            <TextLink href="/solucoes">Explorar todas as soluções</TextLink>
          </div>
        </Reveal>
        <div className="feature-grid">
          {homeModules.map(({ title, text, icon: Icon, id }, i) => (
            <Reveal key={title}>
              <a className="feature-card" href={`/solucoes#${id}`}>
                <div className="feature-top">
                  <Icon size={25} strokeWidth={1.5} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="feature-link">
                  Conhecer a solução <ArrowUpRight size={18} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
