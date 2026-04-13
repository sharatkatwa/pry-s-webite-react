import { ArrowRight } from "lucide-react";

function ProductGrid({ items, variant }) {
  if (variant === "collection") {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="showcase-card group">
            <div
              className="showcase-image"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(16, 12, 9, 0.04), rgba(16, 12, 9, 0.66)), url('${item.image}')`,
              }}
            />
            <div className="relative z-10 mt-auto p-6 text-white">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/68">{item.eyebrow}</p>
              <h3 className="mt-3 font-display text-3xl">{item.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/76">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.name} className="product-card">
          <div className="product-image" style={{ backgroundImage: `url('${item.image}')` }} />
          <div className="p-5">
            <h3 className="font-display text-2xl text-[var(--brand-deep)]">{item.name}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)]">{item.price}</span>
              <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-deep)]">
                Visit store
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProductGrid;
