export function Brand({ size = "small" }: { size?: "small" | "large" }) {
  const resolution = size === "large" ? 512 : 192;
  return (
    <span className={`brand-art brand-${size}`}>
      <img
        className="logo-light"
        src={`/brand/hiatlas-light-${resolution}.webp`}
        alt="HiAtlas — Supply Chain Intelligence. Um novo horizonte para o seu negócio."
        width={resolution}
        height={resolution}
        loading={size === "large" ? "lazy" : "eager"}
      />
    </span>
  );
}
