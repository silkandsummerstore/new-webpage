import { PageHeader } from "./PageHeader";

interface StaticPageProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

export function StaticPage({ label, title, children }: StaticPageProps) {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader label={label} title={title} />
      <div className="mx-auto max-w-2xl px-6 md:px-10 font-serif text-lg text-charcoal/80 leading-relaxed space-y-6">
        {children}
      </div>
    </div>
  );
}
