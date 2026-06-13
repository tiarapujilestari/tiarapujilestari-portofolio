import React, { useState, useEffect } from "react";
import {
  Flag,
  ClipboardList,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import projectTiara from "../assets/project-aplikasi-rs.png";

// Import mockup
import mockupGambar2 from "../assets/menu-order.png";
import mockupGambar3 from "../assets/data-order.png";
import mockupGambar4 from "../assets/list-order.png";
import mockupGambar5 from "../assets/menu-order.png";
import mockupGambar6 from "../assets/success.png";

const Work: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // State animasi utama
  const [animateIn, setAnimateIn] = useState(false);

  // Fungsi animasi lambat turun
  const triggerSlowSlideDown = (delayTime = 0) => {
    setAnimateIn(false);

    setTimeout(() => {
      setAnimateIn(true);
    }, delayTime);
  };

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      triggerSlowSlideDown(100);
    }, 0);

    const handleHashChange = () => {
      if (window.location.hash === "#work") {
        triggerSlowSlideDown(600);
      }
    };

    const handleCustomTrigger = () => {
      triggerSlowSlideDown(600);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("trigger-work-animation", handleCustomTrigger);

    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("trigger-work-animation", handleCustomTrigger);
    };
  }, []);

  const projectImages = [
    projectTiara,
    mockupGambar2,
    mockupGambar3,
    mockupGambar4,
    mockupGambar5,
    mockupGambar6,
  ];

  const triggerSlideTransition = (nextIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(nextIndex);
      setIsAnimating(false);
    }, 150);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAnimating) return;
    const nextIdx =
      currentImageIndex === projectImages.length - 1
        ? 0
        : currentImageIndex + 1;
    triggerSlideTransition(nextIdx);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAnimating) return;
    const prevIdx =
      currentImageIndex === 0
        ? projectImages.length - 1
        : currentImageIndex - 1;
    triggerSlideTransition(prevIdx);
  };

  const handleDotClick = (index: number) => {
    if (index === currentImageIndex || isAnimating) return;
    triggerSlideTransition(index);
  };

  const baseCardClass =
    "bg-cardBg/80 border border-gray-800/60 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row backdrop-blur-sm transform group/card hover:border-neonCyan/40 transition-all";
  const animationStateClass = animateIn
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-32 pointer-events-none";

  return (
    <section
      id="work"
      className="max-w-5xl w-full mx-auto px-6 mb-24 scroll-mt-28 relative"
    >
      {/* CARD UTAMA */}
      <div
        style={{
          boxShadow: animateIn
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            : "none",
          transitionDuration: animateIn ? "3000ms" : "0ms",
          transitionTimingFunction: animateIn
            ? "cubic-bezier(0.34, 1.5, 0.64, 1)"
            : "unset",
        }}
        className={`${baseCardClass} ${animationStateClass}`}
      >
        {/* SISI KIRI */}
        <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-800/40 group">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-neonCyan/10 rounded-2xl blur-xl transition-all duration-500 group-hover:bg-neonCyan/20 group-hover:blur-2xl"></div>

            <div className="bg-slate-950 border-4 border-gray-800 rounded-2xl p-2 aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-neonCyan/30">
              <img
                src={projectTiara}
                alt="project"
                className="w-full h-full object-cover rounded-lg opacity-85 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* SISI KANAN */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Java Script", "Visual Studio Code"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-innerCard border border-gray-800 text-gray-400 text-[10px] px-3 py-1 rounded-full transition-all duration-300 ease-out hover:border-neonCyan/50 hover:text-white transform hover:-translate-y-0.5"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            <h3 className="text-3xl font-bold text-neonCyan drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              Pemesanan Makan Pasien RS Awal Bros
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-innerCard/50 border border-gray-800/40 p-4 rounded-xl space-y-1 transition-all duration-300 ease-out hover:border-neonCyan/30 transform hover:-translate-y-1">
                <div className="flex items-center gap-2 text-neonCyan text-xs font-bold uppercase">
                  <Flag className="w-3.5 h-3.5" />
                  Situation
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Pemesanan Makanan pasien yang di lakukan setiap hari dan
                  berbeda siklus yang harus melewati seleksi menu oleh ahli gizi
                  dan juga tergantung pantangan makan pasien.
                </p>
              </div>

              <div className="bg-innerCard/50 border border-gray-800/40 p-4 rounded-xl space-y-1 transition-all duration-300 ease-out hover:border-neonCyan/30 transform hover:-translate-y-1">
                <div className="flex items-center gap-2 text-neonCyan text-xs font-bold uppercase">
                  <ClipboardList className="w-3.5 h-3.5" />
                  Tujuan
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Tercapainya pemesanan makanan sesuai dengan yang di butuhkan
                  oleh rumah sakit dan juga sesuai dengan pantangan ataupun gizi
                  yang di hitung oleh ahli gizi.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800/40 flex justify-end">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setCurrentImageIndex(0);
              }}
              style={{ boxShadow: "0 0 15px rgba(0, 243, 255, 0.3)" }}
              className="bg-neonCyan text-darkBg text-xs font-bold px-6 py-3 rounded-xl transition-all duration-300 ease-out cursor-pointer transform hover:scale-105 active:scale-95 hover:bg-neonCyan/90"
            >
              View Case Study →
            </button>
          </div>
        </div>
      </div>

      {/* POPUP / SLIDE IMAGE */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-950 border border-gray-800 rounded-3xl p-4 md:p-6 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-slate-900/60 p-2 rounded-full border border-gray-800/60 transition-all duration-300 cursor-pointer hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full text-left mb-4 px-2">
              <h4 className="text-sm font-bold text-neonCyan tracking-wide uppercase font-mono">
                / Project Preview
              </h4>
              <p className="text-gray-400 text-xs mt-1">
                Gambar {currentImageIndex + 1} dari {projectImages.length}
              </p>
            </div>

            <div className="relative w-full aspect-[16/10] bg-slate-900/40 rounded-2xl border border-gray-800/40 flex items-center justify-center overflow-hidden group">
              <img
                src={projectImages[currentImageIndex]}
                alt={`Screenshot slide ${currentImageIndex + 1}`}
                className={`max-w-full max-h-full object-contain rounded-lg transition-all duration-300 ease-in-out ${
                  isAnimating
                    ? "opacity-0 scale-98 blur-sm"
                    : "opacity-100 scale-100 blur-0"
                }`}
              />

              <button
                onClick={prevImage}
                className="absolute left-4 bg-slate-950/80 hover:bg-neonCyan hover:text-darkBg text-white p-3 rounded-xl border border-gray-700 transition-all duration-200 cursor-pointer shadow-lg z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 bg-slate-950/80 hover:bg-neonCyan hover:text-darkBg text-white p-3 rounded-xl border border-gray-700 transition-all duration-200 cursor-pointer shadow-lg z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-2 mt-4">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentImageIndex
                      ? "w-8 bg-neonCyan"
                      : "w-2 bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
