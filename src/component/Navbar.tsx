import React from "react";
import resumeFile from "../assets/Tiara-Pujilestari-Resume.pdf"

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = (
  { href, children }, // tipe typescript yang menegaskan fungsi ini wajib mengembalikan elemen ui
) => (
  <a
    href={href}
    className="transition-colors duration-200 hover:text-white"
    style={{
      fontSize: "15px",
      fontWeight: "500",
      fontStyle: "normal",
    }}
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  // arrow function
  const handleLogoClick = () => {
    //fungsi internal (handler)
    window.history.pushState(
      //manipulasi url secara instan untuk menghapus tanda #
      "",
      document.title,
      window.location.pathname + window.location.search,
    );

    // scroll ke paling atas secara INSTAN
    window.scrollTo({ top: 0, behavior: "auto" });

    // kirim sinyal custom event untuk memicu ulang animasi Hero
    const event = new CustomEvent("trigger-hero-animation");
    window.dispatchEvent(event);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@400;500;700&display=swap');

        .stack-sans-notch-custom {
          font-family: "Stack Sans Notch", sans-serif;
          font-optical-sizing: auto;
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 border-b stack-sans-notch-custom bg-darkBg/70 backdrop-blur-md border-gray-800/40">
        <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto ">
          <div
            onClick={handleLogoClick}
            className="tracking-widest transition-transform duration-100 cursor-pointer select-none text-neonCyan active:scale-95"
            style={{
              fontSize: "20px",
              fontWeight: "700",
              fontStyle: "normal",
            }}
          >
            PORTOFOLIO
          </div>

          <nav className="hidden space-x-8 tracking-wider text-gray-400 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#timeline">Timeline</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center transition-all duration-300 rounded-full cursor-pointer bg-neonCyan text-darkBg shadow-neon-glow hover:scale-105"
            style={{
              fontSize: "15px",
              fontWeight: "700",
              padding: "8px 20px",
            }}
          >
            Hire Me
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
