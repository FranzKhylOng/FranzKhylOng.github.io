import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section 
      id="top" 
      className="flex flex-col justify-center items-start min-h-screen p-0 m-0 w-full"
    >
      <div className="w-full">
        <FadeIn delay={100}>
          <h1 className="text-primary font-mono text-sm sm:text-[16px] font-normal mb-[30px] ml-1">
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
          <p className="text-slate text-lg sm:text-lg max-w-[540px] mt-5 mb-12">
            I&apos;m a backend developer specializing in building exceptional, secure, and reliable digital experiences using <span className="text-primary/90">TypeScript</span>, <span className="text-primary/90">NodeJS</span>, and <span className="text-primary/90">NestJS</span>.
          </p>
        </FadeIn>
        
        <FadeIn delay={100}>
          <a 
            href="#contact" 
            className="text-primary bg-transparent border border-primary rounded px-7 py-4 font-mono text-[16px] leading-[1] hover:bg-green-tint transition-colors inline-block mt-[10px]"
          >
            Let's work together!
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
