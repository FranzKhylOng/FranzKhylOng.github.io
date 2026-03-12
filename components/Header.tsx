"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
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

  const navLinks = [
    { name: "About", url: "/#about", id: "about" },
    { name: "Experience", url: "/#experience", id: "experience" },
    { name: "Work", url: "/#work", id: "work" },
    { name: "Contact", url: "/#contact", id: "contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
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
      
      {/* Mobile Menu Icon Placeholder */}
      <div className="md:hidden text-primary">
         {/* Hamburger Icon */}
         <svg viewBox="0 0 100 80" width="30" height="30" className="fill-current">
            <rect width="100" height="10" rx="5"></rect>
            <rect y="30" width="100" height="10" rx="5"></rect>
            <rect y="60" width="100" height="10" rx="5"></rect>
         </svg>
      </div>
    </header>
  );
}
