import { SectionTitle } from "../../components/UI";

export function CompanySizeSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Do primeiro passo à próxima expansão"
          title="Uma plataforma para o tamanho da sua operação."
        />
        <div className="size-grid">
          {[
            [
              "01",
              "Pequenas empresas",
              "Organize o essencial.",
              "Centralize as informações e substitua controles manuais.",
            ],
            [
              "02",
              "Médias empresas",
              "Conecte a operação.",
              "Integre departamentos, processos e indicadores.",
            ],
            [
              "03",
              "Grandes empresas",
              "Amplie sua perspectiva.",
              "Conecte múltiplas empresas e unidades com perfis avançados, integrações e dashboards executivos.",
            ],
          ].map(([num, title, subtitle, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <strong>{subtitle}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="section-closing">
          Comece com aquilo que sua empresa precisa hoje e evolua conforme sua
          operação cresce.
        </p>
      </div>
    </section>
  );
}
