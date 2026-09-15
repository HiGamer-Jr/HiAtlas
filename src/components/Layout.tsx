import { useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { Brand } from "./Brand";
import { DemoLink } from "./UI";
const links = [
  ["/", "Início"],
  ["/hiatlas", "O HiAtlas"],
  ["/solucoes", "Soluções"],
  ["/contato", "Contato"],
];
export function Layout({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) {
  const [open, setOpen] = useState(false);
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const whatsapp =
    phone && /^\d{10,15}$/.test(phone)
      ? `https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de conhecer melhor o HiAtlas e entender como a solução pode ser aplicada à minha empresa.")}`
      : null;
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand-link" href="/" aria-label="HiAtlas, início">
            <Brand />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                aria-current={path === href ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <div className="header-demo">
              <DemoLink />
            </div>
            <button
              className="icon-button mobile-toggle"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Navegação móvel"
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
          >
            {links.map(([href, label]) => (
              <a
                href={href}
                key={href}
                aria-current={path === href ? "page" : undefined}
              >
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
            <DemoLink />
          </nav>
        )}
      </header>
      <main id="conteudo">{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="/" aria-label="HiAtlas, início">
              <Brand />
            </a>
            <strong>HiAtlas by HiGamer</strong>
            <p>
              Um novo horizonte
              <br />
              para o seu negócio.
            </p>
          </div>
          <div>
            <h2>Produto</h2>
            {links.slice(1).map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h2>Soluções</h2>
            {[
              ["compras", "Compras"],
              ["comex", "COMEX"],
              ["importacao", "Importações"],
              ["estoque", "Estoque"],
              ["financeiro", "Financeiro"],
              ["analytics", "Analytics"],
            ].map(([id, label]) => (
              <a key={id} href={`/solucoes#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h2>Empresa</h2>
            <a href="/hiatlas#higamer">HiGamer</a>
            <a href="/contato">Contato</a>
            <h2 className="footer-legal-title">Privacidade</h2>
            <a href="/contato#dados">Uso dos dados de contato</a>
            <span className="legal-note">
              Política de Privacidade e Termos de Uso serão disponibilizados
              antes da abertura comercial.
            </span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} HiGamer. Todos os direitos reservados.
          </span>
          <span>HiAtlas — Informação em direção.</span>
        </div>
      </footer>
      {whatsapp && (
        <a
          className="whatsapp"
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar sobre o HiAtlas no WhatsApp"
        >
          <MessageCircle size={25} />
        </a>
      )}
    </>
  );
}
