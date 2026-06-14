import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = (
  { href, children }, // tipe typescript yang menegaskan fungsi ini wajib mengembalikan elemen ui
) => (
  <a
    href={href}
    className="hover:text-white transition-colors duration-200"
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

      <header className="stack-sans-notch-custom fixed top-0 left-0 right-0 z-50 bg-darkBg/70 backdrop-blur-md border-b border-gray-800/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center ">
          <div
            onClick={handleLogoClick}
            className="text-neonCyan tracking-widest cursor-pointer select-none active:scale-95 transition-transform duration-100"
            style={{
              fontSize: "20px",
              fontWeight: "700",
              fontStyle: "normal",
            }}
          >
            PORTOFOLIO
          </div>

          <nav className="hidden md:flex space-x-8 tracking-wider text-gray-400">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#timeline">Timeline</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <button
            className="bg-neonCyan text-darkBg rounded-full shadow-neon-glow hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{
              fontSize: "15px",
              fontWeight: "700",
              padding: "8px 20px",
            }}
          >
            Hire Me
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
