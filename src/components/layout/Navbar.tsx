import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShrunk(latest > 80);
    const diff = latest - lastY.current;
    if (latest > 200 && diff > 4) setHidden(true);
    else if (diff < -4) setHidden(false);
    lastY.current = latest;
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl"
      >
        <motion.div
          animate={{ paddingTop: shrunk ? 8 : 14, paddingBottom: shrunk ? 8 : 14 }}
          className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
        >
          <a
            href="#about"
            className="text-sm font-semibold tracking-[0.2em] text-[#F5F5F5]"
            data-cursor="magnetic"
          >
            TIARA PUJILESTARI
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="magnetic"
                className="text-xs tracking-widest uppercase text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#F5F5F5]"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.header>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#080808] flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#F5F5F5]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-6 px-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="text-4xl font-semibold tracking-tight text-[#F5F5F5]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
