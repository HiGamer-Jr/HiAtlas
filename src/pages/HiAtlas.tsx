import {
  Check,
  LockKeyhole,
  Compass,
  MousePointer2,
  Globe2,
  ShoppingCart,
} from "lucide-react";
import { Brand } from "../components/Brand";
import { CTA, DemoLink, Reveal, SectionTitle } from "../components/UI";
import { profiles, solutions } from "../data/content";
export default function HiAtlas() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <i />O HIATLAS
          </span>
          <h1>
            Muito mais do que
            <br />
            um sistema de <em>gestão.</em>
          </h1>
          <p>
            Empresas não deveriam precisar trabalhar para alimentar sistemas. A
            tecnologia deve trabalhar para organizar a informação e ajudar
            pessoas a tomar melhores decisões.
          </p>
          <DemoLink />
        </div>
      </section>
      <section className="section" id="higamer">
        <div className="container split-layout">
          <Reveal>
            <SectionTitle
              eyebrow="Nossa visão"
              title="Informação precisa gerar direção."
              text="Excelentes profissionais e grandes volumes de informação nem sempre significam uma operação conectada. Planilhas, processos manuais, controles paralelos e sistemas isolados dificultam enxergar o todo."
            />
            <p className="body-copy">
              Desenvolvido pela HiGamer, o HiAtlas propõe uma camada central de
              operação e inteligência. Supply Chain é uma das principais áreas
              de aplicação, com uma arquitetura preparada para evoluir para
              outros processos empresariais.
            </p>
            <blockquote>
              Não queremos apenas informatizar sua operação. Queremos ajudar sua
              empresa a enxergá-la melhor.
            </blockquote>
          </Reveal>
          <div className="brand-showcase">
            <Brand size="large" />
            <span>HiAtlas by HiGamer</span>
          </div>
        </div>
      </section>
      <section className="section tinted">
        <div className="container">
          <SectionTitle
            eyebrow="Para quem é o HiAtlas?"
            title="Uma mesma plataforma. Diferentes perspectivas."
          />
          <div className="audience-grid">
            {profiles.map(([title, text], i) => (
              <Reveal key={title}>
                <article>
                  <span className="audience-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split-layout">
          <SectionTitle
            eyebrow="Perfis e permissões"
            title="O acesso certo. Para cada responsabilidade."
            text="O controle de acesso é parte da visão do HiAtlas: cada perfil acessa as informações necessárias ao seu trabalho, com possibilidade de permissões personalizadas."
          />
          <div className="permission-panel">
            <div>
              <LockKeyhole />
              <strong>Uma operação protegida por contexto.</strong>
            </div>
            <div className="tag-list">
              {[
                "Administrador",
                "Diretoria",
                "Coordenação",
                "Supervisão",
                "Comprador Nacional",
                "Comprador Internacional",
                "Financeiro",
                "Logística",
                "Lojas",
                "Centros de Distribuição",
              ].map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section tinted">
        <div className="container">
          <SectionTitle
            eyebrow="Cada compra tem sua realidade"
            title="Nacional ou internacional. Contexto em cada etapa."
          />
          <div className="purchase-grid">
            {[solutions[0], solutions[1]].map((item, i) => (
              <article key={item.id}>
                {i === 0 ? <ShoppingCart size={30} /> : <Globe2 size={30} />}
                <h3>{item.area}</h3>
                <p>{item.summary}</p>
                <ul>
                  {[
                    ...item.features,
                    ...(i === 1
                      ? [
                          "Importação, embarque, containers, portos e navios",
                          "Documentação, transit time, custos e logística",
                        ]
                      : []),
                  ].map((t) => (
                    <li key={t}>
                      <Check size={16} />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split-layout">
          <SectionTitle
            eyebrow="Inteligência para compras"
            title="Comprar não deve ser apenas responder a uma falta de estoque."
            text="A visão do HiAtlas é apoiar o comprador com dados que antecipam necessidades e colocam cada decisão em perspectiva."
          />
          <div className="buying-intelligence">
            <div className="tag-list">
              {[
                "Estoque atual",
                "Vendas",
                "Consumo",
                "Cobertura",
                "Pedidos existentes",
                "Mercadoria em trânsito",
                "Lead time",
                "Histórico",
                "Demanda",
                "Estoque mínimo",
                "Estoque máximo",
              ].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="intelligence-result">
              <Compass size={26} />
              <strong>
                Do processo reativo
                <br />à compra inteligente.
              </strong>
            </div>
          </div>
        </div>
      </section>
      <section className="section tinted">
        <div className="container">
          <SectionTitle
            eyebrow="Experiência do usuário"
            title="Um sistema poderoso não precisa ser complicado."
            text="Informações importantes em destaque e uma experiência consistente, para que a equipe concentre energia no trabalho."
          />
          <div className="experience-grid">
            {[
              "Interface moderna",
              "Navegação simples",
              "Poucos cliques",
              "Informações em destaque",
              "Dashboards visuais",
              "Filtros rápidos",
              "Status identificáveis",
              "Experiência consistente",
            ].map((t) => (
              <span key={t}>
                <MousePointer2 size={18} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
