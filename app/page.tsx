import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ShowroomSection } from "@/components/ShowroomSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <main className="relative overflow-hidden ">
        <div className="relative mx-auto w-full max-w-[1600px] px-3 pt-3 sm:px-5 sm:pt-5">
          <Navbar />
          <Hero />
        </div>
        <div className="dark:bg-[#0c1110] bg-[#f5f1e6] transition-colors duration-700 mt-[-60px] pt-[60px]">
          <AboutSection />
          <CollectionsSection />
          <WhyChooseUsSection />
          <ShowroomSection />
          <CTASection />
      <Footer />
        </div>
      </main>
    </>
  );
}
