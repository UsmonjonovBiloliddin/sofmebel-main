'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Mebel", href: "/#mebel" },
  { label: "Aksessuarlar", href: "/#aksessuarlar" },
  { label: "Online Magazine", href: "/online-magazine" },
  { label: "Biz haqimizda", href: "/#biz-haqimizda" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const navbarHeight = 96;

  /* ================= SCROLL DETECTION ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= DARK MODE ================= */

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  /* ================= NAVIGATION ================= */

  const scrollToSection = (id: string) => {
    if (id === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const topPos = el.offsetTop - navbarHeight + 1;

    window.scrollTo({
      top: topPos,
      behavior: "smooth",
    });
  };

  const handleNavigation = (href: string) => {
    // Section link
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          const id = href.replace("/#", "");
          scrollToSection(id);
        }, 300);
      } else {
        const id = href.replace("/#", "");
        scrollToSection(id);
      }
    }
    // Home
    else if (href === "/") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        scrollToSection("");
      }
    }
    // Normal page
    else {
      router.push(href);
    }

    setMobileOpen(false);
  };

  /* ================= ACTIVE STATE ================= */

 const isActive = (item: typeof navItems[0]) => {

  // HOME active faqat topda bo‘lsa
  if (item.href === "/") {
    return pathname === "/" && activeSection === "" && scrollY < 50;
  }

  // Section link
  if (item.href.startsWith("/#")) {
    return activeSection === item.href.replace("/#", "");
  }

  // Normal page
  return pathname === item.href;
};
  /* ================= UI ================= */

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        scrollY > 20
          ? "bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700"
          : "bg-white dark:bg-[#0c1110]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-5">

          {/* LOGO */}
          <button
            onClick={() => handleNavigation("/")}
            className="text-xl font-serif tracking-wide text-gray-900 dark:text-white"
          >
            <span>Sof</span>
            <span className="ml-1 text-[#b89b5e]">Mebel</span>
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-10">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive(item)
                      ? "text-[#FFD700]"
                      : "text-gray-800 dark:text-gray-300 hover:text-[#FFD700] dark:hover:text-[#FFD700]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#b89b5e] rounded-full transition-all duration-300 ${
                      isActive(item) ? "w-6 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* Dark Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? (
                <Sun className="text-yellow-400" size={20} />
              ) : (
                <Moon className="text-gray-600 dark:text-gray-300" size={20} />
              )}
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-xl text-gray-900 dark:text-white"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <nav className="md:hidden bg-gray-50 dark:bg-gray-900 px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.href)}
              className={`block w-full text-left text-lg font-medium transition-colors duration-300 ${
                isActive(item)
                  ? "text-[#FFD700]"
                  : "text-gray-800 dark:text-gray-300 hover:text-[#FFD700]"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="mt-4 w-full p-2 rounded-full bg-gray-200 dark:bg-gray-800 flex justify-center"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </nav>
      )}
    </header>
  );
}