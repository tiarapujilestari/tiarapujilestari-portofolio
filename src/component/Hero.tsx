import React, { useState, useEffect } from "react";
import { Layers, Terminal } from "lucide-react";
import fotoTiara from "../assets/FOTOPROFILE.png";

const Hero: React.FC = () => {
  // STATE UNTUK TEKS BERGANTI & ANIMASI
  const roles = ["Full Stack Developer", "UI/UX Designer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState("translate-y-0 opacity-100");

  useEffect(() => {
    let timeoutOutId: ReturnType<typeof setTimeout>;
    let timeoutInId: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      // animasi keluar (Teks bergeser ke atas & memudar hilang)
      setFadeState("-translate-y-4 opacity-0");

      timeoutOutId = setTimeout(() => {
        // Ganti teks saat posisinya tidak terlihat oleh pengguna
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);

        // Pindahkan posisi teks baru secara instan ke bawah (siap meluncur ke atas)
        setFadeState("translate-y-4 opacity-0");

        timeoutInId = setTimeout(() => {
          // Jalankan animasi masuk (Teks meluncur ke atas menuju posisi normal & muncul)
          setFadeState("translate-y-0 opacity-100");
        }, 50); // Jeda super singkat agar perpindahan posisi instan tidak terlihat patah
      }, 400); // Menunggu durasi animasi keluar selesai
    }, 3000); // Siklus pergantian teks dilakukan setiap 3 detik

    return () => {
      clearInterval(interval);
      if (timeoutOutId) clearTimeout(timeoutOutId);
      if (timeoutInId) clearTimeout(timeoutInId);
    };
  }, [roles.length]);

  return (
    <section
      id="about"
      className="max-w-5xl w-full mx-auto px-6 mb-24 scroll-mt-28 relative"
    >
      {/* Efek Blur Latar Belakang */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonCyan/5 rounded-full blur-[120px] pointer-events-none html-light:hidden"></div>

      {/* Container Utama */}
      <div className="bg-cardBg/90 backdrop-blur-md rounded-[2.5rem] border border-gray-800/60 p-8 md:p-16 shadow-2xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 transition-all duration-300 html-light:bg-gray-100 html-light:border-gray-200">
        {/* BIODATA & TOMBOL */}
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

            {/* EFEK SLIDE YANG SMOOTH */}
            <div className="h-10 md:h-12 overflow-hidden pt-2 relative">
              <h3
                className={`text-2xl md:text-3xl font-semibold text-gray-400 html-light:text-gray-500 transition-all duration-500 ease-in-out transform ${fadeState}`}
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

        {/* FOTO PROFILE & ORNAMEN */}
        <div className="flex-1 flex justify-center relative">
          {/* Ornamen Layers */}
          <div className="absolute -top-4 left-4 lg:left-12 bg-[#1b1437] border border-purple-500/20 p-3 rounded-xl shadow-lg transform -rotate-12 hover:scale-110 transition-transform duration-300 z-20 html-light:bg-purple-50 html-light:border-purple-200">
            <Layers className="w-5 h-5 text-purple-400 html-light:text-purple-600" />
          </div>

          {/* Ornamen Terminal */}
          <div className="absolute -bottom-4 right-4 lg:right-12 bg-[#122834] border border-neonCyan/20 p-3 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 z-20 html-light:bg-blue-50 html-light:border-blue-200">
            <Terminal className="w-5 h-5 text-neonCyan html-light:text-blue-600" />
          </div>

          {/* Bingkai Foto Luar */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 p-2 relative bg-gradient-to-b from-gray-700/20 to-transparent transition-all duration-300 border-gray-800 html-light:border-gray-300">
            {/* Bingkai Foto Dalem */}
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
