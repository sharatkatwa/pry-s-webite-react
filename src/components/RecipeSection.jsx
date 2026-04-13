function RecipeSection({ recipes }) {
  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="max-w-2xl text-sm leading-6 text-[var(--muted)]">
          Use it for recipes, blog highlights, or chef notes. The cards are image-led now, but the copy stays
          tight so the section still feels premium.
        </div>
        <a href="#contact" className="hidden text-sm font-medium text-[var(--brand-deep)] md:inline-flex">
          View all recipes
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <article key={recipe.title} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="h-64 w-full object-cover" />
            <div className="p-6">
              <span className="inline-flex rounded-full bg-[var(--surface)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
                {recipe.tag}
              </span>
              <h3 className="mt-4 font-display text-3xl leading-tight text-[var(--brand-deep)]">{recipe.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{recipe.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default RecipeSection;
