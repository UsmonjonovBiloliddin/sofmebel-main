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
      className="relative mx-auto mt-36 w-full max-w-7xl px-6 sm:px-8 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-goldAccent/10 via-transparent to-goldAccent/10 blur-3xl dark:from-yellow-500/10 dark:to-yellow-400/10" />

      {/* HEADER */}
      <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-goldAccent dark:text-yellow-400">
            Online Magazine
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight text-gray-900 dark:text-beigeLight sm:text-5xl">
            Interyer dizayn maqolalari
          </h2>

          <p className="mt-4 max-w-xl text-sm text-gray-600 dark:text-beigeLight/60">
            Mebel, material, zamonaviy dizayn va interyer tendensiyalari haqida
            professional maqolalar va tahlillar.
          </p>
        </div>

        <Link
          href="/online-magazine"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-beigeLight transition"
        >
          Barcha maqolalar
          <span className="transition group-hover:translate-x-1 group-hover:text-goldAccent">
            →
          </span>
        </Link>
      </div>

      {/* GRID */}
      <div className="grid gap-10 md:grid-cols-3">
        {magazineStacks.map((item) => (
          <Link key={item.title} href={item.href} className="group block">
            <article
              className="
              relative overflow-hidden rounded-3xl
              border border-gray-200/70 dark:border-white/10
              bg-white dark:bg-[#111615]
              shadow-sm
              transition-all duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 dark:opacity-70" />

                <span
                  className="
                  absolute left-5 top-5 rounded-full
                  bg-white/90 dark:bg-black/60
                  px-4 py-1 text-xs font-medium
                  text-gray-900 dark:text-beigeLight
                  backdrop-blur-md
                  "
                >
                  {item.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <p className="text-xs tracking-wide text-gray-500 dark:text-beigeLight/50">
                  {item.date}
                </p>

                <h3
                  className="
                  mt-3 font-display text-2xl leading-snug
                  text-gray-900 dark:text-beigeLight
                  transition-colors duration-300
                  group-hover:text-goldAccent
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-beigeLight/70">
                  {item.description}
                </p>

                <div
                  className="
                  mt-6 inline-flex items-center gap-2
                  text-sm font-medium text-goldAccent
                  opacity-80 transition
                  group-hover:opacity-100
                  "
                >
                  Maqolani o‘qish
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition group-hover:ring-goldAccent/30" />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}