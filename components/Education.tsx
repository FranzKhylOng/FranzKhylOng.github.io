import { educationData } from "@/data/education";
import { FadeIn } from "./FadeIn";

export function Education() {
  return (
    <section id="education" className="max-w-[900px] w-full mx-auto py-[100px]">
      <FadeIn delay={200} className="w-full">
        <h2 className="flex items-center text-slate-lightest text-[32px] font-semibold whitespace-nowrap mb-10 w-full
          before:content-['03.'] before:relative before:bottom-1 before:text-primary before:font-mono before:text-xl before:mr-2 before:font-normal
          after:content-[''] after:block after:relative after:top-1 after:w-full after:h-[1px] after:ml-5 after:bg-navy-lightest">
          Education
        </h2>
      </FadeIn>
      <div className="space-y-8">
        {educationData.map((item) => (
          <div key={item.id} className="relative pl-8 border-l border-border/50">
            <span className="absolute top-1.5 left-[-4.5px] w-2 h-2 rounded-full bg-primary" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-semibold">{item.school}</h3>
              <span className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                {item.date}
              </span>
            </div>
            <div className="text-lg text-primary mb-2">{item.degree}</div>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
