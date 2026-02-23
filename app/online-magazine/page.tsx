import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OnlineMagazineSection } from "@/components/OnlineMagazineSection";

export default function OnlineMagazinePage() {
  return (
    <>
      {/* MAIN PAGE */}
      <main className="relative min-h-screen overflow-hidden mt-5 bg-[#f5f2eb] dark:bg-[#111615]">
        {/* Dekorativ blurli sharoitlar */}

        {/* Navbar */}
        <Navbar />

        {/* Content offset navbar uchun */}
        <div className="py-[96px] mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10">
          
          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-2xl border border-greenDeep/10 bg-[#f5f2eb] dark:bg-[#111615] p-8 shadow-soft sm:p-10 lg:p-14 mb-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-goldAccent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-greenDeep/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-goldAccent dark:text-yellow-400">
                Online Magazine
              </p>
              <h1 className="mt-3 font-display text-4xl text-greenDeep dark:text-beigeLight sm:text-5xl">
                Dizayn va interyer ilhomlari
              </h1>
              <p className="mt-4 text-base text-greenDeep/80 dark:text-beigeLight/80 sm:text-lg">
                Tez kunda ishga tushadi bu qism. Siz uchun premium dizaynlar va interyer ilhomlari tayyorlanmoqda.
              </p>

              <div className="mt-8">
                <Link
                  href="/#bosh-sahifa"
                  className="inline-flex rounded-2xl bg-greenDeep px-6 py-3 text-sm font-semibold text-beigeLight transition duration-300 hover:-translate-y-0.5 hover:bg-[#294d38]"
                >
                  Bosh sahifaga qaytish
                </Link>
              </div>
            </div>
          </section>

          {/* Online Magazine Cards Section */}
          <OnlineMagazineSection />

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}