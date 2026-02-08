import { educationData } from "@/data/education";

export function Education() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
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
