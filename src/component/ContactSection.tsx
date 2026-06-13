export default function ContactSection() {
  return (
    <div
      id="contact"
      className="bg-[#030712] text-white flex flex-col items-center px-6 pb-24 scroll-mt-28 relative overflow-hidden"
    >
      <div className="w-full text-center pt-8 pb-12 z-10"></div>

      {/* BACKGROUND */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* MAIN CONTAINER CARD */}
      <div className="w-full max-w-2xl bg-[#0b1329]/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-4 text-slate-100">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Ready to architect your next digital leap or just want to discuss
            the future of tech? Find me on my social profiles below.
          </p>
        </div>

        {/* SOSIAL MEDIA NAVIGASI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          {/* LINKEDIN BUTTON */}
          <a
            href="https://linkedin.com/in/username-kamu" // Ubah jadi link LinkedIn kamu
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#050b18] border border-slate-800 rounded-xl py-4 px-6 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:scale-110"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="font-mono text-sm tracking-widest uppercase font-medium">
              LinkedIn
            </span>
          </a>

          {/* INSTAGRAM BUTTON */}
          <a
            href="https://instagram.com/username-kamu" // Ubah jadi link Instagram kamu
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#050b18] border border-slate-800 rounded-xl py-4 px-6 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:scale-110"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="font-mono text-sm tracking-widest uppercase font-medium">
              Instagram
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
