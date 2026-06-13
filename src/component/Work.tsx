import React from "react";
import { Flag, ClipboardList } from "lucide-react";

const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="max-w-5xl w-full mx-auto px-6 mb-24 scroll-mt-28 relative"
    >
      <div className="bg-cardBg/80 border border-gray-800/60 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row backdrop-blur-sm">
        <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-800/40">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-neonCyan/10 rounded-2xl blur-xl"></div>

            <div className="bg-slate-950 border-4 border-gray-800 rounded-2xl p-2 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                alt="Mockup"
                className="w-full h-full object-cover rounded-lg opacity-85"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "AWS S3", "Stripe"].map((tech) => (
                <span
                  key={tech}
                  className="bg-innerCard border border-gray-800 text-gray-400 text-[10px] px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-neonCyan drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              E-commerce Platform for XYZ Retail
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-innerCard/50 border border-gray-800/40 p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-neonCyan text-xs font-bold uppercase">
                  <Flag className="w-3.5 h-3.5" />
                  Situation
                </div>

                <p className="text-gray-400 text-xs leading-relaxed">
                  XYZ Retail faced high cart abandonment rates and slow loading
                  times.
                </p>
              </div>

              <div className="bg-innerCard/50 border border-gray-800/40 p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-neonCyan text-xs font-bold uppercase">
                  <ClipboardList className="w-3.5 h-3.5" />
                  Task
                </div>

                <p className="text-gray-400 text-xs leading-relaxed">
                  Architect a scalable headless solution to improve page speed
                  by 40%.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800/40 flex justify-end">
            <button className="bg-neonCyan text-darkBg text-xs font-bold px-6 py-3 rounded-xl shadow-neon-glow">
              View Case Study →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
