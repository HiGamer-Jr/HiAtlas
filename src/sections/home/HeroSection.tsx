import { Network } from "lucide-react";
import { DashboardPreview } from "../../components/DashboardPreview";
import { DemoLink } from "../../components/UI";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="horizon-glow" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">
            <i />
            OPERAÇÃO. INTELIGÊNCIA. DIREÇÃO.
          </span>
          <h1>
            Um novo horizonte
            <br />
            para o <em>seu negócio.</em>
          </h1>
          <p className="hero-lead">
            Controle sua operação. Conecte seus dados.
            <br className="desktop-break" /> Transforme informação em decisão.
          </p>
          <p className="hero-description">
            Uma plataforma empresarial modular para centralizar processos,
            integrar informações e transformar operações complexas em decisões
            simples, rápidas e inteligentes.
          </p>
          <div className="actions">
            <DemoLink label="Conheça o HiAtlas" href="/hiatlas" />
            <DemoLink label="Solicitar uma demonstração" outline />
          </div>
          <div className="hero-domains">
            COMPRAS <span>·</span> SUPPLY CHAIN <span>·</span> COMEX{" "}
            <span>·</span> ESTOQUE <span>·</span> FINANCEIRO <span>·</span>{" "}
            ANALYTICS
          </div>
        </div>
        <div className="hero-product">
          <div className="product-label">
            <span>
              <i />
              VISIBILIDADE QUE CONECTA
            </span>
            <span>01 / VISÃO EXECUTIVA</span>
          </div>
          <DashboardPreview compact />
          <div className="product-caption">
            <span>
              <Network size={14} /> Da operação à diretoria.
            </span>
            <span>Uma mesma visão.</span>
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>
          HiAtlas <b>by HiGamer</b>
        </span>
        <span>
          EXPLORE UM NOVO HORIZONTE <span className="down-arrow">↓</span>
        </span>
      </div>
    </section>
  );
}
