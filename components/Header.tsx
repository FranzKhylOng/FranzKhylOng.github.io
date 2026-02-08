"use strict";
"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="mr-4 flex">
          <Link 
            href="/" 
            className="mr-6 flex items-center space-x-2"
            onClick={(e) => scrollToSection(e, "top")}
          >
            <Image 
              src="/FK.png" 
              alt="FK Logo" 
              width={32} 
              height={32} 
              priority
              className="h-8 w-8 object-contain"
            />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={(e) => scrollToSection(e, "top")}
            >
              Home
            </Link>
            <Link
              href="/#experience"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={(e) => scrollToSection(e, "experience")}
            >
              Experience
            </Link>
             <Link
              href="/#education"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={(e) => scrollToSection(e, "education")}
            >
              Education
            </Link>
            <Link
              href="/#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-muted-foreground h-9 w-9"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 transition-all" />
              ) : (
                <Moon className="h-5 w-5 transition-all" />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
