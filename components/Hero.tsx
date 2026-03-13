"use client";

import { usePathname } from "next/navigation";
import { FadeIn } from "./FadeIn";

export function Hero() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="top"
      className="flex flex-col justify-center items-start min-h-screen p-0 m-0 w-full relative"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-[-1] h-full w-full bg-grid opacity-30"></div>

      <div className="w-full">
        <FadeIn delay={100}>
          <h1 className="text-primary font-mono text-sm sm:text-[18px] font-normal mb-[20px] ml-1">
            Hi, my name is
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <h2 className="text-slate-lightest text-4xl sm:text-5xl md:text-7xl font-semibold m-0 leading-[1.1]">
            Franz Khyl Ong.
          </h2>
        </FadeIn>

        <FadeIn delay={400}>
          <h3 className="text-slate text-4xl sm:text-5xl md:text-[64px] lg:text-7xl font-semibold mt-2 mb-[20px] leading-[1.1]">
            I build reliable backend systems.
          </h3>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-slate text-lg sm:text-lg max-w-[640px] mt-5 mb-12">
            I&apos;m a backend developer specializing in building exceptional, secure, and reliable digital experiences using <span className="text-primary/90">TypeScript</span>, <span className="text-primary/90">NodeJS</span>, and <span className="text-primary/90">NestJS</span>.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="text-primary bg-transparent border border-primary rounded px-7 py-4 font-mono text-[16px] leading-[1] hover:bg-green-tint transition-colors inline-block mt-[10px]"
          >
            Let&apos;s work together!
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
