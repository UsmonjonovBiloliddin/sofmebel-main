

const highlights = [
  {
    title: 'Tabiiy materiallar',
    description: 'Yog‘och, mato va aksessuarlar sifat nazoratidan o‘tgan premium materiallardan tanlanadi.'
  },
  {
    title: 'Moslashtirilgan dizayn',
    description: 'Har bir buyurtma interyer uslubingizga mos rang, o‘lcham va kompozitsiya bilan tayyorlanadi.'
  },
  {
    title: 'Kafolat va servis',
    description: 'Yetkazib berishdan keyin ham montaj va servis qo‘llab-quvvatlovi davom etadi.'
  }
];
const stats = [
  { value: "12+", label: "Yillik tajriba" },
  { value: "4.9", label: "Mijoz bahosi" },
  { value: "900+", label: "Tayyor loyiha" },
  { value: "98%", label: "Mamnun mijozlar" },
];

export function WhyChooseUsSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="rounded-3xl bg-[#f6f2eb] dark:bg-[#0c1110] p-6 md:p-8 transition-colors duration-500">

        <div className="grid gap-10 md:grid-cols-2 items-center">

          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-goldAccent dark:text-yellow-400">
              Nega Sof Mebel
            </p>

            <h2 className="mt-3 font-display text-3xl text-black dark:text-beigeLight">
              Sifat, uslub va ishonch
            </h2>

            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-greenDeep/10 dark:border-beigeLight/10 
                  bg-white/70 dark:bg-greenDeep/15 p-4 
                  transition hover:shadow-md"
                >
                  <h3 className="text-base font-semibold text-black dark:text-yellow-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-black/75 dark:text-beigeLight/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl bg-white/80 dark:bg-greenDeep/20 
                p-6 text-center shadow-sm 
                transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="font-display text-3xl text-goldAccent dark:text-yellow-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-black/70 dark:text-beigeLight/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
