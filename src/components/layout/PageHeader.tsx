interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <header className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10 max-w-[1600px] mx-auto">
      {label && <p className="luxury-label mb-4">{label}</p>}
      <h1 className="editorial-heading text-5xl md:text-7xl lg:text-8xl text-charcoal max-w-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 font-serif text-xl text-charcoal/60 italic max-w-xl">
          {subtitle}
        </p>
      )}
    </header>
  );
}
