"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Yashash xonasi",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Yotoqxona",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Oshxona",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bolalar xonasi",
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Ish xonasi",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Premium divanlar",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Minimalist dizayn",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Skandinaviya uslubi",
    image:
      "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luks mebellar",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
];

export function CollectionsSection() {
  return (
    <motion.section
      id="mebel"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:mt-20 lg:px-10"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#f6f2eb] dark:bg-[#0c1110] p-8 transition-colors duration-700">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-goldAccent dark:text-yellow-400">
              Kolleksiyalar
            </p>
            <h2 className="mt-3 font-display text-4xl text-black dark:text-beigeLight">
              Har xona uchun maxsus yechim
            </h2>
          </div>

          <div className="flex gap-4">
            <button className="prev-btn flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#d6c7a1] to-[#bfa46f] dark:from-yellow-500 dark:to-yellow-600 text-white shadow-lg hover:scale-110 transition">
              <ChevronLeft />
            </button>
            <button className="next-btn flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#d6c7a1] to-[#bfa46f] dark:from-yellow-500 dark:to-yellow-600 text-white shadow-lg hover:scale-110 transition">
              <ChevronRight />
            </button>
          </div>
        </motion.div>

        {/* Slider */}
        <Swiper
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
          }}
        >
          {collections.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                className="group relative h-[380px] overflow-hidden rounded-3xl shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}