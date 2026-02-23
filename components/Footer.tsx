const links = [
  { label: "Bosh sahifa", href: "/#bosh-sahifa" },
  { label: "Mebel", href: "/#mebel" },
  { label: "Aksessuarlar", href: "/#aksessuarlar" },
  { label: "Online Magazine", href: "/online-magazine" },
  { label: "Biz haqimizda", href: "/#biz-haqimizda" },
];

export function Footer() {
  return (
    <footer className=" border-t border-greenDeep/10 dark:border-white/10 
    bg-[#f5f1e8] dark:bg-[#0f1413] transition-colors duration-500">

      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

        <div className="grid gap-10 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <p className="text-2xl font-semibold text-black dark:text-beigeLight">
              <span className="font-display text-goldAccent">Sof</span> Mebel
            </p>
            <p className="mt-3 text-sm text-black/70 dark:text-beigeLight/70">
              Premium interyer uchun zamonaviy va uzoq xizmat qiladigan
              mebel yechimlari.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p className="mb-4 text-sm font-semibold text-black dark:text-beigeLight">
              Navigatsiya
            </p>
            <nav className="flex flex-col gap-3 text-sm text-black/75 dark:text-beigeLight/75">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-goldAccent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <p className="mb-4 text-sm font-semibold text-black dark:text-beigeLight">
              Aloqa
            </p>
            <div className="space-y-2 text-sm text-black/75 dark:text-beigeLight/75">
              <p>+998 90 123 45 67</p>
              <p>info@sofmebel.uz</p>
              <p>Toshkent, O‘zbekiston</p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-greenDeep/10 dark:border-white/10 pt-6 text-center text-xs text-black/60 dark:text-beigeLight/60">
          © {new Date().getFullYear()} Sof Mebel. Barcha huquqlar himoyalangan.
        </div>

      </div>
    </footer>
  );
}