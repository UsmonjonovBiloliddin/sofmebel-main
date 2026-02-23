'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  const navbarHeight = 96; // Navbar balandligini moslab o‘zgartiring

  // Scroll bilan fon va active section
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    const sections = document.querySelectorAll("section[id]");
    const onSectionScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", onSectionScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onSectionScroll);
    };
  }, []);

  // Dark mode class qo‘shish
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Smooth scroll sectionga
  const scrollToSection = (id: string) => {
    if (id === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const topPos = el.offsetTop - navbarHeight + 1; // +1 kichik offset
    window.scrollTo({ top: topPos, behavior: "smooth" });
  };

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
          <Link
            href="/"
            className="text-xl font-serif tracking-wide text-gray-900 dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("");
              setMobileOpen(false);
            }}
          >
            <span>Sof</span>
            <span className="ml-1 text-[#b89b5e]">Mebel</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-10">
              {navItems.map((item) => {
                const sectionId = item.href.startsWith("/#")
                  ? item.href.replace("/#", "")
                  : "";

                const isActive =
                  (item.href === "/" && pathname === "/" && scrollY < window.innerHeight / 3) ||
                  (sectionId && activeSection === sectionId) ||
                  pathname === item.href;

                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative text-sm transition-colors duration-300 font-medium ${
                      isActive
                        ? "text-[#FFD700]"
                        : "text-gray-800 dark:text-gray-300 hover:text-[#FFD700] dark:hover:text-[#FFD700]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#b89b5e] rounded-full transition-all duration-300 ${
                        isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Dark Mode Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="cursor-pointer p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center shadow-sm"
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
            className="md:hidden text-gray-900 dark:text-white text-xl"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <nav className="md:hidden bg-gray-50 dark:bg-gray-900 px-6 py-8 space-y-6">
          {navItems.map((item) => {
            const sectionId = item.href.startsWith("/#")
              ? item.href.replace("/#", "")
              : "";

            const isActive =
              (item.href === "/" && pathname === "/" && scrollY < window.innerHeight / 3) ||
              (sectionId && activeSection === sectionId) ||
              pathname === item.href;

            return (
              <button
                key={item.label}
                onClick={() => {
                  scrollToSection(sectionId);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left text-lg transition-colors duration-300 font-medium ${
                  isActive
                    ? "text-[#FFD700]"
                    : "text-gray-800 dark:text-gray-300 hover:text-[#FFD700] dark:hover:text-[#FFD700]"
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Dark Mode Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 w-full flex justify-center items-center"
          >
            {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      )}
    </header>
  );
}