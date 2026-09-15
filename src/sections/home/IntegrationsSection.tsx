import { Database, FileSpreadsheet, Network } from "lucide-react";
import { SectionTitle, TextLink } from "../../components/UI";
import { integrations } from "../../data/content";

export function IntegrationsSection() {
  return (
    <section className="section integration-section">
      <div className="container">
        <SectionTitle
          eyebrow="Um ecossistema conectado"
          title="O HiAtlas conversa com sua operação."
          text="Não queremos criar mais uma ilha de informação. O objetivo é conectar as fontes que sua empresa já utiliza, preservando o contexto de cada processo."
        />
        <div className="integration-list">
          {integrations.map((name, i) => (
            <span key={name}>
              {i % 3 === 0 ? (
                <FileSpreadsheet size={19} />
              ) : i % 3 === 1 ? (
                <Database size={19} />
              ) : (
                <Network size={19} />
              )}
              {name}
            </span>
          ))}
        </div>
        <TextLink href="/solucoes#integracoes">
          Conheça as possibilidades de integração
        </TextLink>
      </div>
    </section>
  );
}
