import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Circle,
  Globe2,
  LayoutDashboard,
  Package,
  Ship,
  ShoppingCart,
  Wallet,
} from "lucide-react";
const bars = [38, 55, 44, 72, 62, 86];
export function DashboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`dashboard ${compact ? "dashboard-compact" : ""}`}
      aria-label="Prévia ilustrativa do dashboard executivo HiAtlas com dados demonstrativos"
    >
      <aside className="dash-sidebar" aria-hidden="true">
        <span className="dash-monogram">
          H<span>i</span>
        </span>
        {[
          LayoutDashboard,
          ShoppingCart,
          Globe2,
          Ship,
          Package,
          Wallet,
          ChartNoAxesCombined,
        ].map((Icon, i) => (
          <span className={i === 0 ? "selected" : ""} key={i}>
            <Icon size={17} />
          </span>
        ))}
        <span className="dash-avatar">HA</span>
      </aside>
      <div className="dash-main">
        <div className="dash-top">
          <span>
            HiAtlas <b>/</b> Visão executiva
          </span>
          <span className="dash-status">
            <i /> Ambiente demonstrativo
          </span>
        </div>
        <div className="dash-heading">
          <div>
            <span className="dash-kicker">SUA OPERAÇÃO, EM PERSPECTIVA</span>
            <h3>
              Panorama executivo<span>.</span>
            </h3>
          </div>
          <span className="dash-filter">Todas as unidades · 1º semestre</span>
        </div>
        <div className="dash-kpis">
          {[
            ["Compras em andamento", "128", "24 aguardando aprovação"],
            ["Valor em compras", "R$ 2,84 mi", "Planejamento consolidado"],
            ["Estoque consolidado", "42.580", "3 unidades conectadas"],
            ["Importações em trânsito", "18", "7 containers em andamento"],
          ].map(([label, value, note], i) => (
            <div key={label}>
              <span>{label}</span>
              <strong>
                {value}
                <ArrowUpRight size={16} />
              </strong>
              <small className={i === 2 ? "positive" : ""}>{note}</small>
            </div>
          ))}
        </div>
        <div className="dash-charts">
          <div className="chart-panel">
            <div className="panel-heading">
              <strong>Compras & planejamento</strong>
              <span>
                <i className="legend-dot" /> Realizado{" "}
                <i className="legend-dot muted-dot" /> Previsto
              </span>
            </div>
            <div className="bar-chart">
              <div className="chart-scale">
                <span>900 mil</span>
                <span>600 mil</span>
                <span>300 mil</span>
                <span>0</span>
              </div>
              <div className="bar-groups">
                {bars.map((height, i) => (
                  <div className="bar-group" key={i}>
                    <div className="bar-pair">
                      <i style={{ height: `${height}%` }} />
                      <i
                        style={{ height: `${height + (i % 2 ? -10 : 10)}%` }}
                      />
                    </div>
                    <span>{["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="chart-panel coverage">
            <strong>Saúde do estoque</strong>
            <div className="donut">
              <div>
                <strong>
                  84<span>%</span>
                </strong>
                <small>em equilíbrio</small>
              </div>
            </div>
            <div className="donut-key">
              <span>
                <i />
                Equilibrado <b>84%</b>
              </span>
              <span>
                <i />
                Atenção <b>12%</b>
              </span>
              <span>
                <i />
                Crítico <b>4%</b>
              </span>
            </div>
          </div>
        </div>
        <div className="dash-bottom">
          <div>
            <span className="priority-icon">
              <Circle size={14} />
            </span>
            <span>
              <strong>O que precisa da sua atenção</strong>
              <small>
                6 produtos abaixo do estoque mínimo · 3 entregas nesta semana
              </small>
            </span>
          </div>
          <span className="priority-label">
            Prioridades da operação <ArrowUpRight size={14} />
          </span>
        </div>
        <div className="dash-foot">
          Dados fictícios para ilustrar a visão da plataforma.{" "}
          <span>HIATLAS ANALYTICS</span>
        </div>
      </div>
    </div>
  );
}
