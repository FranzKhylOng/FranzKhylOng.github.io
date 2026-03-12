"use client";

export function EmailSidebar() {
  return (
    <div className="w-10 fixed bottom-0 right-5 sm:right-10 left-auto z-10 hidden md:block">
      <div className="flex flex-col items-center relative after:content-[''] after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-slate-light">
        <a
          href="mailto:franzkhym.ong@gmail.com"
          className="my-5 mx-auto p-[10px] text-[12px] font-mono leading-none tracking-[0.1em] [writing-mode:vertical-rl] text-slate-light hover:-translate-y-1 hover:text-primary transition-all duration-300 inline-block"
        >
          franzkhym.ong@gmail.com
        </a>
      </div>
    </div>
  );
}
