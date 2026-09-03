import React from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  { label: "Email", href: "mailto:your-email@example.com" },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative z-30 border-t border-white/10 bg-[#080808] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-sm font-semibold tracking-widest text-[#F5F5F5]">
            TIARA PUJILESTARI
          </p>
          <p className="text-xs text-[#A1A1AA]">Frontend / Full Stack Developer</p>
        </div>

        <p className="text-xs text-[#A1A1AA]">© 2026 Tiara Pujilestari</p>

        <div className="flex items-center gap-4 text-xs tracking-wide text-[#A1A1AA]">
          {socials.map((s, i) => (
            <React.Fragment key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F5F5] transition-colors">
                {s.label}
              </a>
              {i < socials.length - 1 && <span className="opacity-30">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
