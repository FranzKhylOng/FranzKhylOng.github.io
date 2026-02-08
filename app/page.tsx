import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <div className="container max-w-screen-lg mx-auto px-4 md:px-8 space-y-20 pb-20">
      <Hero />
      <Experience />
      <Education />
    </div>
  );
}
