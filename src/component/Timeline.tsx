import React, { useEffect, useState, useRef } from "react";
import fotoManager from "../assets/sarah-maulida.png";

const Timeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk merestart/mengulang animasi
  const triggerAnimation = () => {
    setIsVisible(false); // (efek menghilang/fade out)
    setTimeout(() => {
      setIsVisible(true); // Hidupkan kembali setelah delay kecil agar CSS merefresh animasi
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset jadi false saat user scroll menjauh
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Deteksi klik menu Navbar
    const handleHashChange = () => {
      if (window.location.hash === "#timeline") {
        triggerAnimation();
      }
    };

    // perubahan URL hash
    window.addEventListener("hashchange", handleHashChange);

    // Deteksi juga jika user mengklik menu yang sama berulang kali
    const handleNavbarClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target &&
        target.tagName === "A" &&
        target.getAttribute("href") === "#timeline"
      ) {
        triggerAnimation();
      }
    };

    window.addEventListener("click", handleNavbarClick);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("click", handleNavbarClick);
    };
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="max-w-5xl w-full mx-auto px-6 mb-24 scroll-mt-28 relative overflow-hidden"
    >
      {/* EFFECT BLUR */}
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none transform -translate-x-1/2 html-light:hidden"></div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start w-full">
        {/* EXPERIENCE TIMELINE */}
        <div
          className={`w-full flex-1 space-y-10 transition-all duration-700 transform ${
            isVisible
              ? "opacity-100 translate-x-0 blur-0"
              : "opacity-0 -translate-x-12 blur-sm"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-wide text-gray-100 mb-2 html-light:text-gray-900">
            Experience Timeline
          </h2>

          <div className="relative border-l-2 border-cyan-500/30 pl-6 md:pl-8 ml-3 space-y-10 html-light:border-gray-300">
            {/* Item Timeline 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-darkBg border-2 border-neonCyan flex items-center justify-center shadow-[0_0_10px_#00f3ff] html-light:bg-white html-light:border-blue-600 html-light:shadow-none">
                <div className="w-1.5 h-1.5 rounded-full bg-neonCyan html-light:bg-blue-600"></div>
              </div>

              <div className="bg-cardBg/70 border border-gray-800/60 p-6 rounded-2xl space-y-3 hover:border-cyan-500/20 transition-all duration-300 html-light:bg-gray-100 html-light:border-gray-200">
                <span className="inline-block bg-cyan-950/40 border border-neonCyan/30 text-neonCyan text-[10px] tracking-wider font-bold px-2.5 py-0.5 rounded html-light:bg-blue-50 html-light:border-blue-200 html-light:text-blue-600">
                  2022 - PRESENT
                </span>

                <h3 className="text-xl font-bold text-gray-100 html-light:text-gray-900">
                  Senior Frontend Engineer
                </h3>

                <h4 className="text-xs text-gray-400 font-medium tracking-wide html-light:text-gray-500">
                  Digital Indonesia Hebat
                </h4>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light pt-1 html-light:text-gray-600">
                  Designed and developed responsive web interfaces using HTML,
                  CSS, React.js, and JavaScript. Created user-centered designs,
                  interactive prototypes, and modern dashboard layouts while
                  focusing on usability and accessibility.
                </p>
              </div>
            </div>

            {/* Item Timeline 2 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-darkBg border-2 border-gray-700 flex items-center justify-center html-light:bg-white html-light:border-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600 html-light:bg-gray-400"></div>
              </div>

              <div className="bg-cardBg/70 border border-gray-800/60 p-6 rounded-2xl space-y-3 hover:border-cyan-500/20 transition-all duration-300 html-light:bg-gray-100 html-light:border-gray-200">
                <span className="inline-block bg-gray-800 text-gray-400 text-[10px] tracking-wider font-bold px-2.5 py-0.5 rounded html-light:bg-gray-200 html-light:text-gray-600">
                  2020 - 2022
                </span>

                <h3 className="text-xl font-bold text-gray-100 html-light:text-gray-900">
                  Full Stack Developer
                </h3>

                <h4 className="text-xs text-gray-400 font-medium tracking-wide html-light:text-gray-500">
                  PT CAHAYA PERDANA NUSANTARA
                </h4>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light pt-1 html-light:text-gray-600">
                  Developed a web-based patient meal ordering system to
                  streamline food request management in hospitals. Designed the
                  user interface, database structure, and application workflow
                  using modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CLIENT FEEDBACK */}
        <div
          className={`w-full lg:w-[420px] space-y-8 transition-all duration-700 transform ${
            isVisible
              ? "opacity-100 translate-x-0 blur-0"
              : "opacity-0 translate-x-12 blur-sm"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-wide text-gray-100 html-light:text-gray-900">
            Client Feedback
          </h2>

          <div className="space-y-6">
            {/* Testimonial Card 1 */}
            <div className="bg-cardBg/80 border border-gray-800/60 border-l-4 border-l-neonCyan p-6 rounded-2xl shadow-xl relative overflow-hidden group html-light:bg-gray-100 html-light:border-gray-200 html-light:border-l-blue-600">
              <span className="absolute right-4 top-2 text-7xl font-serif font-black text-gray-800/20 select-none group-hover:text-neonCyan/5 transition-colors html-light:text-gray-300/30">
                “
              </span>

              <p className="text-gray-300 text-xs md:text-sm italic leading-relaxed font-light relative z-10 html-light:text-gray-700">
                "The patient meal ordering application has greatly improved our
                service workflow. It helps staff manage meal requests
                efficiently while ensuring accuracy and a better experience for
                patients."
              </p>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-800/40 relative z-10 html-light:border-gray-200">
                <div className="w-9 h-9 rounded-full bg-slate-800 overflow-hidden border border-gray-700 html-light:border-gray-300">
                  <img
                    src={fotoManager}
                    alt="Sarah Maulida"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-200 html-light:text-gray-900">
                    Sarah Maulida
                  </h4>

                  <span className="text-[10px] text-gray-500 font-medium html-light:text-gray-400">
                    Manager
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-cardBg/80 border border-gray-800/60 border-l-4 border-l-purple-500 p-6 rounded-2xl shadow-xl relative overflow-hidden group html-light:bg-gray-100 html-light:border-gray-200 html-light:border-l-purple-600">
              <span className="absolute right-4 top-2 text-7xl font-serif font-black text-gray-800/20 select-none group-hover:text-purple-500/5 transition-colors html-light:text-gray-300/30">
                “
              </span>

              <p className="text-gray-300 text-xs md:text-sm italic leading-relaxed font-light relative z-10 html-light:text-gray-700">
                "An exceptional application that simplified patient meal
                management, reduced errors, and enhanced service quality. The
                intuitive design made it easy for our staff to adopt and use
                effectively."
              </p>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-800/40 relative z-10 html-light:border-gray-200">
                <div className="w-9 h-9 rounded-full bg-slate-800 overflow-hidden border border-gray-700 html-light:border-gray-300">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
                    alt="Ranti Ramadhani"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-200 html-light:text-gray-900">
                    Ranti Ramadhani
                  </h4>

                  <span className="text-[10px] text-gray-500 font-medium html-light:text-gray-400">
                    Head Umum
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
