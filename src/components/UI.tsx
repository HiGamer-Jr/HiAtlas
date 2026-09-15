import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Button } from "./ui/button";
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? undefined : { opacity: [0.7, 1], y: [14, 0] }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <i />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}
export function DemoLink({
  label = "Solicitar uma demonstração",
  outline = false,
  href = "/contato",
}: {
  label?: string;
  outline?: boolean;
  href?: string;
}) {
  return (
    <Button asChild variant={outline ? "outline" : "default"}>
      <a href={href}>
        {label}
        <ArrowUpRight size={17} />
      </a>
    </Button>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="text-link" href={href}>
      {children}
      <ArrowRight size={17} />
    </a>
  );
}
export function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <span className="eyebrow">O próximo horizonte</span>
        <h2>
          Sua operação pode
          <br />
          enxergar mais longe.
        </h2>
        <p>
          Uma nova forma de centralizar processos, conectar informações e
          transformar dados em decisões.
        </p>
        <div className="actions">
          <DemoLink />
          <DemoLink
            outline
            label="Falar com a HiGamer"
            href="/contato?interesse=gerenciado"
          />
        </div>
        <span className="cta-coordinate">
          OPERAÇÃO CONECTADA. DECISÃO COM DIREÇÃO.
        </span>
      </div>
    </section>
  );
}
