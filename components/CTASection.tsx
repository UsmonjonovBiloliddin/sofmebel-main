'use client';

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="mx-auto mt-20 w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
      <motion.div
        className="rounded-3xl bg-[#fffffd] dark:bg-[#111615] p-10 sm:p-14 transition-colors duration-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid gap-10 md:grid-cols-[1.2fr_auto] md:items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-goldAccent dark:text-yellow-400">
              Bepul maslahat
            </p>

            <h2 className="mt-4 font-display text-4xl text-black dark:text-beigeLight leading-tight">
              Interyeringiz uchun mos kolleksiyani
              <span className="block">birga tanlaymiz</span>
            </h2>

            <p className="mt-5 max-w-xl text-base text-black/70 dark:text-beigeLight/70">
              Dizaynerimiz bilan bog‘laning va xonangiz o‘lchamiga mos,
              estetik va uzoq xizmat qiladigan mebel yechimini oling.
            </p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row md:flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl 
              bg-greenDeep px-8 py-4 text-base font-semibold text-beigeLight
              transition duration-300 hover:bg-greenDeep/90"
            >
              Uchrashuv belgilash
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl 
              border border-greenDeep/20 dark:border-beigeLight/20
              px-8 py-4 text-base text-black dark:text-beigeLight
              transition duration-300 hover:bg-black/5 dark:hover:bg-white/5"
            >
              Katalogni ko‘rish
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}