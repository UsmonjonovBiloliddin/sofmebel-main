import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className=" h-[100vh] overflow-hidden transition-colors duration-700 bg-white dark:bg-[#0c1110] text-gray-900 dark:text-white">
      
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/real/hero.jpg"
          alt="Luxury interior"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 
                     bg-gradient-to-r 
                     from-white/95 via-white/70 to-white/0
                     dark:from-[#0c1110] dark:via-[#0c1110]/90 dark:to-transparent
                     transition-colors duration-700"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-[100vh] flex flex-col justify-center">
        <div className="max-w-2xl space-y-10">

          <h1 className="font-serif text-6xl leading-[1.05] lg:text-7xl">
            Soddalik ichidagi
            <br />
            <span className="text-[#c6a86b] dark:text-[#c6a86b] transition-colors duration-500">
              haqiqiy nafislik
            </span>
          </h1>

          <p className="text-gray-800 dark:text-neutral-300 text-lg max-w-md transition-colors duration-500">
            Zamonaviy interyer uchun yaratilgan yuqori sifatli mebellar kolleksiyasi.
          </p>

          <div className="flex gap-8 items-center">
            <Link
              href="/shop"
              className="border-b-2 pb-1 border-[#c6a86b] text-[#c6a86b] hover:opacity-90 dark:border-[#c6a86b] dark:text-[#c6a86b] transition-all duration-500 font-medium"
            >
              Kolleksiyani ko‘rish →
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-500"
            >
              Biz haqimizda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 