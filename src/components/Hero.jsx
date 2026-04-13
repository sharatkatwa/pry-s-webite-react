function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(25,17,12,0.82) 0%, rgba(25,17,12,0.58) 44%, rgba(25,17,12,0.22) 100%), url('public/webp/herobg.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,167,76,0.22),transparent_30%)]" />
      <div className="mx-auto grid min-h-[88svh]  max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <d iv className="relative z-10 max-w-2xl text-white">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80">
            carefully crafted for taste and health
          </span>
          <h1 className="mt-6 font-display capitalize text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Blend that speaks
            <br />
            tradition.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-md">
            Carefully curated spice blends that capture the essence of Indian cooking—rich, aromatic, and made to
            elevate every dish effortlessly.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="button-primary">
              Shop now
            </a>
            <a href="#about" className="button-secondary">
              Explore blends
            </a>
          </div>
        </d>

        <div className="relative z-10 lg:justify-self-end">
          <div className="glass-panel max-w-sm p-6 text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-white/65">Why Choose Us</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <StatCard value="100% Natural" label="No additives, no preservatives" />
              <StatCard value="Authentic Taste" label="Traditional recipes, rich flavour" />
              <StatCard value="Ready to Cook" label="Quick, easy & consistent results" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[1.5rem] border border-white/14 bg-white/8 p-4 backdrop-blur-sm">
      <p className="font-display text-3xl">{value}</p>
      <p className="mt-2 text-sm leading-6 text-white/72">{label}</p>
    </div>
  );
}

export default Hero;
