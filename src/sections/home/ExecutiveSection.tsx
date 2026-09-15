import { Check } from "lucide-react";
import { DashboardPreview } from "../../components/DashboardPreview";
import { Reveal, SectionTitle } from "../../components/UI";

export function ExecutiveSection() {
  return (
    <section className="section executive-section">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Da operação à diretoria"
            title={
              <>
                O detalhe que move a operação.
                <br />A visão que orienta o negócio.
              </>
            }
            text="Dados operacionais se transformam em indicadores objetivos para identificar riscos, oportunidades e prioridades sem depender de dezenas de planilhas."
          />
        </Reveal>
        <Reveal>
          <DashboardPreview />
        </Reveal>
        <div className="executive-notes">
          <span>
            <Check size={17} /> Indicadores por unidade
          </span>
          <span>
            <Check size={17} /> Riscos e prioridades
          </span>
          <span>
            <Check size={17} /> Custos e variação cambial
          </span>
          <span>
            <Check size={17} /> Cobertura e excessos
          </span>
        </div>
      </div>
    </section>
  );
}
