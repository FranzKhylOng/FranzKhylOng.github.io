"use client";

import { Github, Linkedin } from "lucide-react";

export function SocialSidebar() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/FranzKhylOng",
      icon: <Github className="w-5 h-5" />,
    },
    {
      url: "https://linkedin.com/in/franz-khyl-ong/",
      icon: <Linkedin className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-10 fixed bottom-0 left-5 sm:left-10 right-auto z-10 hidden md:block">
      <ul className="flex flex-col items-center m-0 p-0 list-none after:content-[''] after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-slate-light">
        {socialLinks.map((link, i) => (
          <li key={i} className="last-of-type:mb-5">
            <a
              href={link.url}
              aria-label={link.name}
              target="_blank"
              rel="noreferrer"
              className="p-[10px] inline-block text-slate-light hover:-translate-y-1 hover:text-primary transition-all duration-300"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
