"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Tabiiy materiallar",
    description:
      "Yog‘och, mato va aksessuarlar sifat nazoratidan o‘tgan premium materiallardan tanlanadi.",
  },
  {
    title: "Moslashtirilgan dizayn",
    description:
      "Har bir buyurtma interyer uslubingizga mos rang, o‘lcham va kompozitsiya bilan tayyorlanadi.",
  },
  {
    title: "Kafolat va servis",
    description:
      "Yetkazib berishdan keyin ham montaj va servis qo‘llab-quvvatlovi davom etadi.",
  },
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
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="rounded-3xl bg-[#f2ede6] dark:bg-[#0c1110] p-6 md:p-8"
      >
        <div className="grid gap-10 md:grid-cols-2 items-center">

          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.2em] text-[#b89b5e] dark:text-yellow-400"
            >
              Nega Sof Mebel
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 font-display text-3xl text-[#1f1f1f] dark:text-beigeLight"
            >
              Sifat, uslub va ishonch
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="mt-6 space-y-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="rounded-xl border border-black/5 bg-[#faf8f4] p-5 shadow-sm
                  dark:border-beigeLight/10 dark:bg-greenDeep/15"
                >
                  <h3 className="text-base font-semibold text-[#222] dark:text-yellow-400">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#444]/80 dark:text-beigeLight/75">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT STATS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 40 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="rounded-2xl bg-[#f8f5ef] p-6 text-center shadow-sm
                dark:bg-greenDeep/20"
              >
                <p className="font-display text-3xl text-[#b89b5e] dark:text-yellow-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-[#444]/70 dark:text-beigeLight/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}