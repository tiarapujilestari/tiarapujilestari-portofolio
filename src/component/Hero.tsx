import React, { useState, useEffect } from "react";
import { Layers, Terminal } from "lucide-react";
import fotoTiara from "../assets/FOTOPROFILE.png";

const Hero: React.FC = () => {
  // STATE
  const roles = ["Full Stack Developer", "UI/UX Designer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);

      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsSliding(false);
      }, 400); // Durasi jeda saat teks naik dan berganti
    }, 3000); // Teks berganti setiap 3 detik

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="about"
      className="max-w-5xl w-full mx-auto px-6 mb-24 scroll-mt-28 relative"
    >
      {/* CONTAINER UTAMA */}
      <div className="bg-cardBg/90 backdrop-blur-md rounded-[2.5rem] border border-gray-800/60 p-8 md:p-16 shadow-2xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 transition-all duration-300 html-light:bg-gray-100 html-light:border-gray-200">
        <div className="flex-1 space-y-6 max-w-xl">
          <div className="inline-block bg-cyan-950/40 border border-neonCyan/30 text-neonCyan text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded html-light:bg-blue-50 html-light:border-blue-200 html-light:text-blue-600">
            AVAILABLE FOR HIRE
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-gray-100 html-light:text-gray-900">
              Tiara
            </h1>

            <h2 className="text-5xl md:text-6xl font-bold tracking-wide text-neonCyan drop-shadow-[0_0_10px_rgba(0,243,255,0.6)] html-light:text-blue-600 html-light:drop-shadow-none">
              Pujilestari
            </h2>

            {/* EFFECT SLIDE */}
            <div className="h-10 md:h-12 overflow-hidden pt-2 relative">
              <h3
                className={`text-2xl md:text-3xl font-semibold text-gray-400 html-light:text-gray-500 transition-all duration-500 ease-in-out transform absolute ${
                  isSliding
                    ? "-translate-y-8 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                {roles[currentRoleIndex]}
              </h3>
            </div>
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-md html-light:text-gray-600">
            Building scalable and high-performance web solutions with a focus on
            architectural precision and intuitive user experiences. Specialized
            in modern React ecosystems and cloud-native backends.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-neonCyan text-darkBg text-xs md:text-sm font-bold px-6 py-3 rounded-xl shadow-neon-glow hover:opacity-90 transition-all duration-300 cursor-pointer html-light:bg-blue-600 html-light:text-white html-light:shadow-none">
              View Portfolio
            </button>

            <button className="border border-cyan-500/30 text-neonCyan text-xs md:text-sm font-bold px-6 py-3 rounded-xl bg-cyan-950/10 hover:bg-cyan-950/30 transition-all duration-300 cursor-pointer html-light:border-gray-300 html-light:text-gray-700 html-light:bg-transparent html-light:hover:bg-gray-200">
              Contact Me
            </button>
          </div>
        </div>

        {/* FOTO PROFILE */}
        <div className="flex-1 flex justify-center relative">
          {/* EFFECT LAYERS */}
          <div className="absolute -top-4 left-4 lg:left-12 bg-[#1b1437] border border-purple-500/20 p-3 rounded-xl shadow-lg transform -rotate-12 hover:scale-110 transition-transform duration-300 z-20 html-light:bg-purple-50 html-light:border-purple-200">
            <Layers className="w-5 h-5 text-purple-400 html-light:text-purple-600" />
          </div>

          {/* DEKORASI */}
          <div className="absolute -bottom-4 right-4 lg:right-12 bg-[#122834] border border-neonCyan/20 p-3 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 z-20 html-light:bg-blue-50 html-light:border-blue-200">
            <Terminal className="w-5 h-5 text-neonCyan html-light:text-blue-600" />
          </div>

          {/* BINGKAI FOTO LUAR  */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 p-2 relative bg-gradient-to-b from-gray-700/20 to-transparent transition-all duration-300 border-gray-800 html-light:border-gray-300">
            {/* BINGKAI FOTO DALEM */}
            <div className="w-full h-full rounded-full overflow-hidden border flex items-center justify-center transition-all duration-300 border-gray-700 bg-slate-900 html-light:bg-white html-light:border-gray-300">
              <img
                src={fotoTiara}
                alt="Tiara"
                className="w-full h-full object-cover grayscale-[15%] contrast-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "FOTOPROFILE.png";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
