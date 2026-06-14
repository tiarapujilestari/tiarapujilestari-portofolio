import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-[10px] text-gray-600 tracking-widest border-t border-gray-900">
      © {new Date().getFullYear()} TP.DEV - ALL RIGHTS RESERVED
    </footer>
  );
};

export default Footer;
