import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "../../components/UI";

export function RolesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="heading-row">
          <SectionTitle
            eyebrow="Pessoas conectadas"
            title={
              <>
                Cada pessoa vê aquilo
                <br />
                que precisa para decidir.
              </>
            }
            text="Da atividade do dia ao próximo movimento estratégico: contexto para cada nível da empresa."
          />
        </div>
        <div className="roles-flow">
          {[
            "Operação",
            "Compradores",
            "Supervisão",
            "Coordenação",
            "Gestão",
            "Diretoria",
          ].map((role, i) => (
            <div key={role}>
              <span>0{i + 1}</span>
              <strong>{role}</strong>
              {i < 5 && <ArrowUpRight size={17} />}
            </div>
          ))}
        </div>
        <div className="role-detail-grid">
          {[
            ["Comprador", "Processos e atividades relacionados à sua área."],
            ["Supervisão", "Equipe, pendências e indicadores para priorizar."],
            [
              "Coordenação",
              "Visão completa da operação e dos seus movimentos.",
            ],
            ["Diretoria", "Dashboard executivo com informações estratégicas."],
          ].map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
