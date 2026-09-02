import React from "react";
import MagneticButton from "../motion/MagneticButton";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  showArrow?: boolean;
  className?: string;
}

/**
 * Button — premium CTA used for "View Project", "Contact Me", nav CTAs.
 * Wraps MagneticButton so every button in the site gets the same
 * cursor-follow + spring-back interaction for free.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  href,
  target,
  rel,
  onClick,
  variant = "primary",
  showArrow = true,
  className = "",
}) => {
  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide overflow-hidden transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "bg-[#F5F5F5] text-[#080808] hover:bg-transparent hover:text-[#F5F5F5] border border-transparent hover:border-white/20"
      : "bg-white/[0.03] text-[#F5F5F5] border border-white/15 hover:border-white/35 hover:bg-white/[0.08]";

  return (
    <MagneticButton href={href} target={target} rel={rel} onClick={onClick} className={className}>
      <span className={`${base} ${styles}`} data-cursor="magnetic">
        {children}
        {showArrow && (
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </span>
    </MagneticButton>
  );
};

export default Button;
