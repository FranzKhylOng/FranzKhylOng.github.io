import { User } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted flex items-center justify-center mb-8 overflow-hidden border-4 border-background shadow-lg">
        {/* Placeholder for Profile Picture */}
        <User className="w-16 h-16 text-muted-foreground" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        Hi, I'm <span className="text-primary">Franz</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
        A passionate developer building minimal and accessible web experiences.
      </p>
    </section>
  );
}
