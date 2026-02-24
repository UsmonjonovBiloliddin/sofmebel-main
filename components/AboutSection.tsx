'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section
      id="biz-haqimizda"
      className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid gap-6 rounded-2xl bg-[#f5f2eb] dark:bg-[#080b0b] p-6 shadow-soft md:grid-cols-[1.2fr_1fr] md:p-10"
      >
        {/* TEXT SIDE */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#c6a969] dark:text-yellow-400">
            Biz haqimizda
          </p>

          <h2 className="mt-3 font-display text-3xl text-black dark:text-beigeLight sm:text-4xl">
            Har bir uy uchun nafis yechim
          </h2>

          <p className="mt-4 max-w-2xl text-black/85 dark:text-beigeLight/80">
            Biz mijozlarimizga sifatli, zamonaviy va uzoq xizmat qiladigan mebellarni taklif qilamiz.
          </p>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {["Yuqori sifat", "Individual dizayn", "Tez yetkazib berish"].map(
              (item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + i * 0.2,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-full bg-white dark:bg-greenDeep px-4 py-2 text-black dark:text-beigeLight"
                >
                  {item}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="relative min-h-52 overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/real/about.jpg"
            alt="Sifatli mebel kolleksiyasi"
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d2b]/40 dark:from-black/40 via-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}