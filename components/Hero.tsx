'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const fullTitle = "Soddalik ichidagi";
  const fullAccent = "haqiqiy nafislik";
  const fullDesc =
    "Zamonaviy interyer uchun yaratilgan yuqori sifatli mebellar kolleksiyasi.";

  const [title, setTitle] = useState("");
  const [accent, setAccent] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    let i = 0;
    const titleInterval = setInterval(() => {
      setTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(titleInterval);
    }, 40);

    setTimeout(() => {
      let j = 0;
      const accentInterval = setInterval(() => {
        setAccent(fullAccent.slice(0, j + 1));
        j++;
        if (j === fullAccent.length) clearInterval(accentInterval);
      }, 40);
    }, 800);

    setTimeout(() => {
      let k = 0;
      const descInterval = setInterval(() => {
        setDesc(fullDesc.slice(0, k + 1));
        k++;
        if (k === fullDesc.length) clearInterval(descInterval);
      }, 20);
    }, 1600);
  }, []);

  return (
    <section className="h-[100vh] overflow-hidden transition-colors duration-700 bg-white dark:bg-[#0c1110] text-gray-900 dark:text-white ">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/real/hero.jpg"
          alt="Luxury interior"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 
            bg-gradient-to-r 
            from-[#0c1110] via-[#0c1110]/70 to-transparent
            dark:from-[#0c1110] dark:via-[#0c1110]/90 dark:to-transparent
            transition-colors duration-700"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-[100vh] flex flex-col justify-center">
        <div className="max-w-2xl p-10 rounded-[9px] space-y-10 dark:bg-transparent dark:backdrop-blur-none">
          <h1 className="font-serif text-5xl leading-[1.05] text-white lg:text-6xl">
            {title}
            <br />
            <span className="text-[#c6a86b] transition-colors duration-500">
              {accent}
            </span>
          </h1>

          <p className="text-neutral-400 dark:text-neutral-300 text-lg max-w-md transition-colors duration-500">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
}