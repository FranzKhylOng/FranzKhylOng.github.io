import Image from "next/image";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section id="top" className="py-20 md:py-32 container max-w-screen-2xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn className="flex justify-center md:justify-start order-2 md:order-1">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-muted border-4 border-background">
            <Image
              src="/FK.png"
              alt="Franz"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
        
        <div className="flex flex-col space-y-6 order-1 md:order-2">
          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Franz</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A passionate developer building <span className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-4">minimal</span> and <span className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-4">accessible</span> web experiences.
            </p>
          </FadeIn>

          <FadeIn delay={600} className="flex gap-4">
             <a 
              href="#contact" 
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get in touch
            </a>
            <a 
              href="#experience" 
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View Work
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
