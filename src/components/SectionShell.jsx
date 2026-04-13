function SectionShell({ id, eyebrow, title, description, centered = false, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-18 lg:px-8">
      <div className={centered ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}>
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">{eyebrow}</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--brand-deep)] sm:text-5xl">{title}</h2>
        <p className="mt-5 text-base leading-7 text-[var(--muted)]">{description}</p>
      </div>
      {children}
    </section>
  );
}

export default SectionShell;
