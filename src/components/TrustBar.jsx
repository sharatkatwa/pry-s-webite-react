import { ChefHat, CookingPot, Leaf } from "lucide-react";

const promises = [
  {
    title: "100% Natural",
    description: "No additives, no preservatives",
    icon: Leaf,
  },
  {
    title: "Authentic Taste",
    description: "Traditional recipes, rich flavour",
    icon: CookingPot,
  },
  {
    title: "Ready to Cook",
    description: "Quick, easy & consistent results",
    icon: ChefHat,
  },
];

function TrustBar() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
      <div className="grid gap-4 rounded-[2rem] bg-white p-4 shadow-[0_24px_60px_rgba(73,45,29,0.08)] sm:grid-cols-2 xl:grid-cols-3 xl:p-6">
        {promises.map((promise) => {
          const Icon = promise.icon;

          return (
            <div
              key={promise.title}
              className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] px-4 py-5"
            >
              <div className="mt-1 rounded-2xl bg-white p-3 text-[var(--brand-deep)] shadow-sm">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-medium text-[var(--brand-deep)]">{promise.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{promise.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrustBar;
