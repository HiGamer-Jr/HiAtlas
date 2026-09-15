import {
  ArrowUpRight,
  Database,
  FileSpreadsheet,
  Layers3,
  Network,
  Workflow,
} from "lucide-react";
import { Reveal, SectionTitle, TextLink } from "../../components/UI";

export function ProblemSection() {
  return (
    <section className="section problem-section">
      <div className="container split-layout">
        <Reveal>
          <SectionTitle
            eyebrow="O ponto de partida"
            title={
              <>
                Sua empresa possui dados.
                <br />
                <span className="muted-heading">
                  O desafio é transformar esses dados em direção.
                </span>
              </>
            }
            text="Quando a informação está espalhada, até as decisões mais importantes esperam por uma planilha."
          />
          <TextLink href="/hiatlas">Entenda a nossa visão</TextLink>
        </Reveal>
        <Reveal className="problem-visual">
          <div className="fragment-grid">
            {[
              [FileSpreadsheet, "Planilhas demais", "Controles paralelos"],
              [Database, "Sistemas isolados", "Informações desconectadas"],
              [Workflow, "Processos manuais", "Tempo gasto consolidando"],
              [Network, "Visão fragmentada", "Indicadores espalhados"],
            ].map(([Icon, title, subtitle]) => {
              const ItemIcon = Icon as typeof FileSpreadsheet;
              return (
                <div key={title as string}>
                  <ItemIcon size={23} />
                  <strong>{title as string}</strong>
                  <span>{subtitle as string}</span>
                </div>
              );
            })}
          </div>
          <div className="connection-line" />
          <div className="connected-result">
            <span className="mini-core">
              <Layers3 />
            </span>
            <div>
              <strong>Uma única visão operacional.</strong>
              <p>O HiAtlas nasce para conectar essas informações.</p>
            </div>
            <ArrowUpRight size={21} />
          </div>
        </Reveal>
      </div>
      <div className="container pain-points">
        Estoque sem visão consolidada <span>·</span> Compras sem dados
        suficientes <span>·</span> Importações acompanhadas manualmente{" "}
        <span>·</span> Gestores esperando relatórios <span>·</span> Dificuldade
        para encontrar o problema
      </div>
    </section>
  );
}
