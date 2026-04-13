function StorySection() {
  return (
    <section id="about" className="border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src="/webp/gradma.webp"
            alt="A hand holding whole spices over a scale"
            className="h-full min-h-[420px] max-h-[600px] w-full object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-[rgba(123,42,28,0.92)] px-5 py-4 text-white shadow-[0_22px_50px_rgba(69,22,12,0.28)]">
            <p className="font-display text-2xl">Since 1924</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/72">Legacy-led sourcing</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">The Art of Authentic Spices</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--brand-deep)] sm:text-5xl">
            Authentic sourcing & blending
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
            At Pry’s Masala, spices are more than ingredients—they are a connection to tradition, flavour, and home.
            Each blend is crafted with care to preserve authentic taste, rich aroma, and the essence of Indian cooking.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">
            From careful sourcing to precise blending, we focus on quality at every step. Our approach ensures
            consistency, purity, and flavours you can trust in every meal.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <HighlightStat value="100%" label="Pure and aromatic" />
            <HighlightStat value="Direct" label="Farmer partnerships" />
            <HighlightStat value="Small-batch" label="Freshly blended" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightStat({ value, label }) {
  return (
    <div className="rounded-[1.5rem] border border-[var(--line)] bg-white p-5 shadow-[0_16px_36px_rgba(73,45,29,0.06)]">
      <p className="font-display text-3xl text-[var(--accent)]">{value}</p>
      <p className="mt-2 text-sm text-[var(--muted)]">{label}</p>
    </div>
  );
}

export default StorySection;
