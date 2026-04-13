import { Menu, Search, ShoppingBag } from "lucide-react";
import { siteLinks } from "../data/homepage";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(248,241,234,0.36)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* <a href="#home" className="font-display text-2xl tracking-[0.08em] text-[var(--brand-deep)]"> */}
          {/* Pry&apos;s Masala */}
          <div className="w-20 overflow-hidden flex">

          <img src="/webp/logo.png" className="object-contain object-center" alt="" />
          </div>
        {/* </a> */}

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] lg:flex">
          {siteLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[var(--brand-deep)]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="icon-button" aria-label="Search">
            <Search className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <button className="icon-button" aria-label="Shopping bag">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--brand-deep)] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu className="h-5 w-5" strokeWidth={1.8} />
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-[var(--line)] bg-[var(--canvas)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {siteLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-base text-[var(--muted)] transition hover:text-[var(--brand-deep)]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
