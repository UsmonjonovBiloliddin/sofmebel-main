import Image from 'next/image';

export function AboutSection() {
  return (
    <section
      id="biz-haqimizda"
      className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10 transition-colors duration-700"
    >
      <div className="grid gap-6 rounded-2xl bg-[#f5f2eb] dark:bg-[#080b0b] p-6 shadow-soft md:grid-cols-[1.2fr_1fr] md:p-10 transition-colors duration-700">
        <div>
          {/* Section Header */}
          <p className="text-xs uppercase tracking-[0.2em] text-[#c6a969] dark:text-yellow-400 transition-colors duration-500">
            Biz haqimizda
          </p>

          <h2 className="mt-3 font-display text-3xl text-black dark:text-beigeLight sm:text-4xl transition-colors duration-500">
            Har bir uy uchun nafis yechim
          </h2>

          <p className="mt-4 max-w-2xl text-black/85 dark:text-beigeLight/80 transition-colors duration-500">
            Biz mijozlarimizga sifatli, zamonaviy va uzoq xizmat qiladigan mebellarni taklif qilamiz.
          </p>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-greenDeep dark:bg-goldAccent px-4 py-2 text-beigeLight dark:text-black transition-colors duration-500">
              Yuqori sifat
            </span>
            <span className="rounded-full bg-white dark:bg-greenDeep px-4 py-2 text-black dark:text-beigeLight transition-colors duration-500">
              Individual dizayn
            </span>
            <span className="rounded-full bg-white dark:bg-greenDeep px-4 py-2 text-black dark:text-beigeLight transition-colors duration-500">
              Tez yetkazib berish
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-52 overflow-hidden rounded-2xl">
          <Image
            src="/images/real/about.jpg"
            alt="Sifatli mebel kolleksiyasi"
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d2b]/40 dark:from-black/40 via-transparent transition-colors duration-500" />
        </div>
      </div>
    </section>
  );
}