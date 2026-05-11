interface Props {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({ label, title, description, centered = true }: Props) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase text-white tracking-widest text-primary mb-3">
          {label}
        </span>
      )}
      <h2 className="font-display text-white text-3xl sm:text-4xl font-bold text-foreground text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-white text-muted-foreground max-w-2xl leading-relaxed mx-auto">{description}</p>
      )}
    </div>
  );
}
