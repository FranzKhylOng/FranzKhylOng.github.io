"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { experienceData } from "@/data/experience";

export function Experience() {
  const [activeTabId, setActiveTabId] = useState(experienceData[0].id);

  const activeJob = experienceData.find((job) => job.id === activeTabId);

  return (
    <section id="experience" className="max-w-[900px] w-full mx-auto py-[100px]">
      <FadeIn delay={200} className="w-full">
        <h2 className="flex items-center text-slate-lightest text-[32px] font-semibold whitespace-nowrap mb-10 w-full
          before:content-['02.'] before:relative before:bottom-1 before:text-primary before:font-mono before:text-xl before:mr-2 before:font-normal
          after:content-[''] after:block after:relative after:top-1 after:w-full after:h-[1px] after:ml-5 after:bg-navy-lightest">
          Where I've Worked
        </h2>
      </FadeIn>

      <div className="flex flex-col md:flex-row min-h-[340px]">
        {/* Tabs */}
        <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-[200px] mb-8 md:mb-0 z-10 hide-scrollbar">
          {experienceData.map((job, i) => {
            const isActive = activeTabId === job.id;
            return (
              <button
                key={job.id}
                onClick={() => setActiveTabId(job.id)}
                className={`relative flex items-center w-full h-[42px] px-5 sm:px-4 bg-transparent hover:bg-navy-light hover:text-primary transition-all duration-300 font-mono text-sm text-left whitespace-nowrap md:whitespace-normal
                  ${isActive ? "text-primary bg-navy-light border-b-2 md:border-b-0 md:border-l-2 border-primary" : "text-slate border-b-2 md:border-b-0 md:border-l-2 border-navy-lightest"}
                `}
              >
                {job.company}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="relative w-full md:ml-5 md:w-3/4">
          {activeJob && (
            <FadeIn key={activeJob.id} delay={200}>
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                {activeJob.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className={roleIndex > 0 ? "mt-10" : ""}>
                    <h3 className="text-xl sm:text-[22px] font-medium text-slate-lightest mb-1">
                      {role.title}{" "}
                    </h3>

                    <p className="text-slate-light font-mono text-[13px] mb-6">
                      {role.date}
                    </p>

                    <ul className="text-slate text-lg list-none p-0 m-0 space-y-3">
                      {role.description.map((desc, descIndex) => (
                        <li key={descIndex} className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-primary before:leading-tight">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
