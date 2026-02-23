import Image from "next/image";
import Link from "next/link";

const magazineStacks = [
  {
    title: "Italian Design Notes",
    description:
      "Minimal shakllar, yumshoq ranglar va premium kompozitsiya yondashuvlari.",
    image: "/images/real/magazine-italian.jpg",
    tag: "Italian Style",
    date: "12 Fevral 2026",
    href: "/online-magazine/italian-design-notes",
  },
  {
    title: "Turkiya Mebel Trendlari",
    description:
      "Ustaxona sifati, klassik elementlar va zamonaviy interyerga mos yechimlar.",
    image: "/images/real/magazine-turkiya.jpg",
    tag: "Turkish Trends",
    date: "5 Fevral 2026",
    href: "/online-magazine/turkiya-mebel-trendlari",
  },
  {
    title: "Material & Texture",
    description:
      "Mato, yog‘och va metal uyg‘unligi bo‘yicha amaliy tavsiyalar va case studylar.",
    image: "/images/real/magazine-material.jpg",
    tag: "Materials",
    date: "28 Yanvar 2026",
    href: "/online-magazine/material-texture",
  },
];

export function OnlineMagazineSection() {
  return (
    <section
      id="online-magazine"
      className="mx-auto mt-24 w-full max-w-7xl px-5 sm:px-8 lg:px-10"
    >
      {/* HEADER */}
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-goldAccent dark:text-yellow-400">
            Online Magazine
          </p>
          <h2 className="mt-3 font-display text-4xl text-black dark:text-beigeLight">
            Dizayn va interyer ilhomlari
          </h2>
        </div>

        <Link
          href="/online-magazine"
          className="text-sm font-medium text-black dark:text-beigeLight hover:text-goldAccent transition"
        >
          Barchasini ko‘rish →
        </Link>
      </div>

      {/* ARTICLES GRID */}
      <div className="grid gap-8 md:grid-cols-3">
        {magazineStacks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block"
          >
            <article
              className="overflow-hidden rounded-3xl 
              border border-greenDeep/10 dark:border-white/10 
              bg-white dark:bg-[#111615] 
              transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Tag */}
                <span
                  className="absolute left-4 top-4 rounded-full 
                  bg-white/85 dark:bg-black/60 
                  px-3 py-1 text-xs font-medium 
                  text-black dark:text-beigeLight backdrop-blur"
                >
                  {item.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-xs text-black/60 dark:text-beigeLight/60">
                  {item.date}
                </p>

                <h3 className="mt-2 font-display text-2xl text-black dark:text-beigeLight transition group-hover:text-goldAccent">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-black/75 dark:text-beigeLight/70">
                  {item.description}
                </p>

                <div className="mt-6 text-sm font-medium text-goldAccent">
                  Batafsil o‘qish →
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}