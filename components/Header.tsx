"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 50);

      // Hide header when scrolling down, show when scrolling up
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "About", url: "/#about", id: "about" },
    { name: "Experience", url: "/#experience", id: "experience" },
    { name: "Education", url: "/#education", id: "education" },
    { name: "Contact", url: "/#contact", id: "contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      if (isMenuOpen) toggleMenu();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 px-6 md:px-12 h-[100px] flex items-center justify-between
          ${isScrolled ? "h-[70px] bg-navy/85 shadow-lg backdrop-blur-sm" : ""}
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex items-center">
          <Link
            href="/"
            onClick={(e) => scrollToSection(e, "top")}
            className="text-primary hover:bg-green-tint rounded-full p-2 transition-colors duration-300"
            aria-label="home"
          >
            <div className="w-10 h-10 border-2 border-primary rounded-lg flex items-center justify-center relative transform rotate-45 group">
              <span className="font-mono text-xl font-bold text-primary transform -rotate-45 group-hover:-translate-y-1 transition-transform">
                F
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <ol className="flex justify-between items-center p-0 m-0 list-none text-slate-light text-[13px] font-mono">
            {navLinks.map((link, i) => (
              <li key={i} className="relative mx-3">
                <Link
                  href={link.url}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="p-2 transition-colors hover:text-primary group flex items-center gap-1"
                >
                  <span className="text-primary text-xs">0{i + 1}.</span> {link.name}
                </Link>
              </li>
            ))}
          </ol>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary bg-transparent border border-primary rounded px-4 py-2 font-mono text-[13px] hover:bg-green-tint transition-colors ml-4"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden z-50 text-primary focus:outline-none relative w-8 h-8 flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="relative w-7 h-5">
            <span
              className={`absolute block h-0.5 w-7 bg-primary transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 top-2.5" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-7 bg-primary transform transition-all duration-300 ease-in-out top-2 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-7 bg-primary transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 top-2.5" : "top-4"
              }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-navy/50 backdrop-blur-md z-60 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu Content */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-70 w-[min(75vw,400px)] bg-navy-light shadow-2xl flex flex-col items-center p-10 pt-32 overflow-y-auto transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="w-full flex flex-col items-center gap-12">
          <ol className="flex flex-col items-center gap-8 w-full list-none p-0 m-0 text-slate-lightest font-mono">
            {navLinks.map((link, i) => (
              <li key={i} className="text-center">
                <Link
                  href={link.url}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="flex flex-col items-center gap-1 group p-2"
                >
                  <span className="text-primary text-xs">0{i + 1}.</span>
                  <span className="text-xl group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary bg-transparent border border-primary rounded px-10 py-4 font-mono text-sm hover:bg-green-tint transition-colors mt-4"
          >
            Resume
          </a>
        </nav>
      </aside>
    </>
  );
}
