'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    alt: "Premium showroom zonasi",
    label: "Luxury Living Line",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    alt: "Zamonaviy ovqatlanish zonasi",
  },
  {
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop",
    alt: "Minimalist mehmonxona interyeri",
  },
];

export function ShowroomSection() {
  return (
    <section
      id="aksessuarlar"
      className="mx-auto mt-20 w-full max-w-7xl px-5 sm:px-8 lg:px-10"
    >
      {/* HEADER */}
      <motion.div
        className="mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-goldAccent dark:text-yellow-400">
          Showroom
        </p>
        <h2 className="mt-3 font-display text-4xl text-black dark:text-beigeLight leading-tight">
          Jonli interyer ilhomlari
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* BIG IMAGE */}
        <motion.div
          className="group relative h-[420px] overflow-hidden rounded-3xl md:col-span-2 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-8 left-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-yellow-400">
              Premium Collection
            </p>
            <h3 className="text-2xl font-semibold text-white">
              {images[0].label}
            </h3>
          </div>
        </motion.div>

        {/* SIDE IMAGES */}
        <div className="grid gap-6">
          {images.slice(1).map((image, idx) => (
            <motion.div
              key={image.alt}
              className="group relative h-[200px] overflow-hidden rounded-3xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}