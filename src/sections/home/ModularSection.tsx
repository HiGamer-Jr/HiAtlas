import { Check, Layers3 } from "lucide-react";
import { Reveal, SectionTitle } from "../../components/UI";
function ModularCore() {
  return (
    <div className="core-map">
      <div className="core-orbit orbit-one" />
      <div className="core-orbit orbit-two" />
      <div className="core-center">
        <Layers3 size={30} />
        <strong>
          HiAtlas<span>Core</span>
        </strong>
        <small>UMA MESMA FUNDAÇÃO</small>
      </div>
      <div className="core-nodes">
        {[
          "Compras",
          "COMEX",
          "Importação",
          "Estoque",
          "Financeiro",
          "Agenda",
          "Analytics",
          "Relatórios",
          "Integrações",
          "Administração",
        ].map((name, i) => (
          <span key={name} style={{ "--node-index": i } as React.CSSProperties}>
            <i />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
export function ModularSection() {
  return (
    <section className="section">
      <div className="container split-layout modular-section">
        <Reveal>
          <SectionTitle
            eyebrow="Modular por natureza"
            title={
              <>
                Sua empresa evolui.
                <br />
                Sua plataforma também.
              </>
            }
            text="Sua empresa não precisa se adaptar ao sistema. O sistema deve se adaptar à sua empresa. O HiAtlas Core conecta os módulos em uma fundação compartilhada."
          />
          <p className="body-copy">
            Utilize apenas Compras, Estoque, COMEX ou Financeiro — ou combine
            diferentes módulos para construir a visão de que sua operação
            precisa.
          </p>
          <div className="configuration-list">
            {[
              ["Empresa A", "Compras + Estoque"],
              ["Empresa B", "COMEX + Financeiro"],
              ["Empresa C", "Compras + COMEX + Estoque + Analytics"],
              ["Empresa D", "Plataforma completa"],
            ].map(([company, modules]) => (
              <div key={company}>
                <span>{company}</span>
                <strong>{modules}</strong>
                <Check size={15} />
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <ModularCore />
        </Reveal>
      </div>
    </section>
  );
}
