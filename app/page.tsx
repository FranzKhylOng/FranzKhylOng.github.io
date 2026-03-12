import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col counter-reset:section">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
