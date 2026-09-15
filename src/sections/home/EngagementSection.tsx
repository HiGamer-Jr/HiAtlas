import { Check, Layers3, Sparkles } from "lucide-react";
import { DemoLink, SectionTitle } from "../../components/UI";

export function EngagementSection() {
  return (
    <section className="section tinted">
      <div className="container">
        <SectionTitle
          eyebrow="Tecnologia e proximidade"
          title="Escolha como utilizar o HiAtlas."
          text="Duas formas de levar uma nova visão para a sua operação."
        />
        <div className="engagement-grid">
          <article className="engagement-card">
            <Layers3 size={29} />
            <span className="eyebrow">SUA EQUIPE NO CONTROLE</span>
            <h3>HiAtlas Plataforma</h3>
            <p>
              A plataforma para a sua empresa utilizar dentro da própria
              operação, com a estrutura necessária para começar.
            </p>
            <ul>
              {[
                "Implantação e configuração",
                "Módulos contratados, usuários e permissões",
                "Dashboards e treinamento",
                "Suporte à utilização",
              ].map((t) => (
                <li key={t}>
                  <Check size={17} />
                  {t}
                </li>
              ))}
            </ul>
            <DemoLink
              label="Conhecer o HiAtlas"
              href="/contato?interesse=plataforma"
              outline
            />
          </article>
          <article className="engagement-card managed">
            <Sparkles size={29} />
            <span className="eyebrow">TECNOLOGIA COM ACOMPANHAMENTO</span>
            <h3>HiAtlas Serviço Gerenciado</h3>
            <p>
              A HiGamer fornece a plataforma e participa do atendimento
              necessário para sua utilização, com suporte operacional próximo.
            </p>
            <ul>
              {[
                "Implantação, configuração e parametrizações",
                "Acompanhamento, suporte e treinamento",
                "Melhorias e integração de dados",
                "Atendimento pós-implantação",
              ].map((t) => (
                <li key={t}>
                  <Check size={17} />
                  {t}
                </li>
              ))}
            </ul>
            <DemoLink
              label="Falar com a HiGamer"
              href="/contato?interesse=gerenciado"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
