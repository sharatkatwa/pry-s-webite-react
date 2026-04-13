import { footerColumns } from "../data/homepage";

function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex w-30 overflow-hidden">
            <img src="/webp/logo.png" alt="" className="object-contain object-center" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
            Carefully curated spice blends that capture the essence of Indian cooking—rich, aromatic, and made to
            elevate every dish effortlessly.
          </p>
        </div>

        {footerColumns.map((column) => (
          <FooterColumn key={column.title} title={column.title} links={column.links} />
        ))}
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Pry&apos;s Masala. All rights reserved.</p>
          <p>
            Made with ❤️ by{" "}
            <a href="https://www.linkedin.com/in/sharat-katwa/" className="text-red-500 font-bold">
              Sharat Katwa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-deep)]">{title}</p>
      <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
        {links.map((link) => (
          <a key={link} href="#contact" className="block transition hover:text-[var(--brand-deep)]">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
