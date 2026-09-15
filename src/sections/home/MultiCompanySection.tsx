import { Layers3, ShieldCheck } from "lucide-react";
import { Reveal, SectionTitle } from "../../components/UI";

export function MultiCompanySection() {
  return (
    <section className="section tinted">
      <div className="container split-layout">
        <Reveal>
          <SectionTitle
            eyebrow="Estrutura multiempresa"
            title={
              <>
                Preparado para crescer
                <br />
                junto com o negócio.
              </>
            }
            text="Uma estrutura pensada para conectar empresas e unidades, respeitando os dados, as permissões e a realidade de cada operação."
          />
          <div className="check-grid">
            {[
              "Usuários e permissões",
              "Unidades e produtos",
              "Processos e dashboards",
              "Configurações próprias",
            ].map((text) => (
              <span key={text}>
                <ShieldCheck size={19} />
                {text}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="company-tree">
          <div className="tree-root">
            <Layers3 />
            HiAtlas <span>Uma base. Múltiplas operações.</span>
          </div>
          <div className="tree-companies">
            {[
              ["Empresa A", "Compras · Estoque"],
              ["Empresa B", "Compras · COMEX"],
              ["Empresa C", "Plataforma completa"],
            ].map(([name, modules], i) => (
              <div key={name}>
                <span className="company-letter">
                  {String.fromCharCode(65 + i)}
                </span>
                <strong>{name}</strong>
                <small>Usuários e dados próprios</small>
                <span className="company-modules">{modules}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
