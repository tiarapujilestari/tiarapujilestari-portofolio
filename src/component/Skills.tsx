import { useState, useEffect, useRef } from "react";
import {
  Clock,
  ShieldCheck,
  Code2,
  Braces,
  FileJson,
  Atom,
  Blocks,
  GitBranch,
} from "lucide-react";

const Skills = () => {
  // 1. Ambil kondisi hash langsung sebagai nilai awal (Initial State)
  const [isVisible, setIsVisible] = useState<boolean>(
    typeof window !== "undefined" && window.location.hash === "#skills",
  );
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleHashChange = () => {
      if (window.location.hash === "#skills") {
        setIsResetting(true);
        setIsVisible(false);

        setTimeout(() => {
          setIsResetting(false);
          setIsVisible(true);
        }, 50);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // 2. Baris error sinkronus yang sebelumnya ada di sini SEKARANG SUDAH DIHAPUS

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="max-w-5xl w-full mx-auto px-6 mb-24 scroll-mt-28 relative overflow-hidden"
    >
      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* GRID KIRI - MELUNCUR DARI KIRI */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between space-y-10 w-full transform ${
            isResetting
              ? "transition-none"
              : "transition-all duration-[1000ms] ease-out"
          } ${
            isVisible
              ? "opacity-100 translate-x-0 filter blur-0"
              : "opacity-0 -translate-x-20 filter blur-sm"
          }`}
        >
          {/* Narrative */}
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-cyan-400">
              Narrative
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light max-w-2xl">
              With a background deeply rooted in both the logic of engineering
              and the fluidity of design, I approach full-stack development as a
              craft. I thrive in environments where complex problems meet
              elegant code solutions. My process is driven by architectural
              integrity and performance-first thinking.
            </p>
          </div>

          {/* WORK ETHICS */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-cyan-400">
              Work Ethics
            </h2>

            <div className="space-y-3 w-full">
              {/* CARD TIMELINESS */}
              <div className="bg-[#0b1329]/40 backdrop-blur-sm border border-slate-800/60 p-5 rounded-2xl flex items-center gap-5 transition duration-300 hover:border-cyan-500/30 hover:scale-[1.01]">
                <div className="bg-[#050b18] p-3.5 rounded-xl border border-cyan-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200 text-base font-mono uppercase tracking-wider">
                    Timeliness
                  </h4>
                  <p className="text-slate-400 text-xs md:text-sm mt-0.5 leading-relaxed">
                    Consistent delivery within agile sprints and project
                    milestones, ensuring zero downtime transitions.
                  </p>
                </div>
              </div>

              {/* CARD DETAIL ORIENTED */}
              <div className="bg-[#0b1329]/40 backdrop-blur-sm border border-slate-800/60 p-5 rounded-2xl flex items-center gap-5 transition duration-300 hover:border-cyan-500/30 hover:scale-[1.01]">
                <div className="bg-[#050b18] p-3.5 rounded-xl border border-cyan-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200 text-base font-mono uppercase tracking-wider">
                    Detail Oriented
                  </h4>
                  <p className="text-slate-400 text-xs md:text-sm mt-0.5 leading-relaxed">
                    Writing clean, maintainable, and well-documented codebases
                    with meticulous attention to edge cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GRID KANAN - MELUNCUR DARI KANAN */}
        <div
          className={`lg:col-span-5 w-full bg-[#0b1329]/50 backdrop-blur-md border border-slate-800/70 p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative transform ${
            isResetting
              ? "transition-none"
              : "transition-all duration-[1000ms] ease-out"
          } ${
            isVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-20 scale-95"
          }`}
        >
          <h3 className="text-2xl font-normal text-center text-slate-200 tracking-wide mb-10 font-mono uppercase">
            Core Stack
          </h3>

          {/* GRID STACK */}
          <div className="grid grid-cols-3 gap-4 md:gap-5">
            {/* HTML */}
            <div
              className={`bg-[#050b18]/60 border border-slate-800/50 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 group aspect-square ${
                isResetting ? "transition-none" : "transition duration-500"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
            >
              <Code2 className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[11px] text-slate-500 font-mono tracking-wider group-hover:text-slate-300 transition-colors">
                HTML
              </span>
            </div>

            {/* CSS */}
            <div
              className={`bg-[#050b18]/60 border border-slate-800/50 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 group aspect-square ${
                isResetting ? "transition-none" : "transition duration-500"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <Braces className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[11px] text-slate-500 font-mono tracking-wider group-hover:text-slate-300 transition-colors">
                CSS
              </span>
            </div>

            {/* JS / TS */}
            <div
              className={`bg-[#050b18]/60 border border-slate-800/50 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 group aspect-square ${
                isResetting ? "transition-none" : "transition duration-500"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <FileJson className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[11px] text-slate-500 font-mono tracking-wider group-hover:text-slate-300 transition-colors">
                Typescript
              </span>
            </div>

            {/* REACT */}
            <div
              className={`bg-[#050b18]/60 border border-slate-800/50 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-cyan-500/40 group aspect-square ring-1 ring-cyan-500/10 ${
                isResetting ? "transition-none" : "transition duration-500"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <Atom className="w-6 h-6 text-cyan-400 animate-[spin_20s_linear_infinite]" />
              <span className="text-[11px] text-cyan-400 font-mono tracking-wider font-medium">
                React
              </span>
            </div>

            {/* Node.js */}
            <div
              className={`bg-[#050b18]/60 border border-slate-800/50 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 group aspect-square ${
                isResetting ? "transition-none" : "transition duration-500"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
            >
              <Blocks className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[11px] text-slate-500 font-mono tracking-wider group-hover:text-slate-300 transition-colors">
                Node.js
              </span>
            </div>

            {/* GIT */}
            <div
              className={`bg-[#050b18]/60 border border-slate-800/50 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 group aspect-square ${
                isResetting ? "transition-none" : "transition duration-500"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <GitBranch className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-[11px] text-slate-500 font-mono tracking-wider group-hover:text-slate-300 transition-colors">
                Git
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
