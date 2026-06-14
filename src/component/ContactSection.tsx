import React, { useState } from "react";

export default function ContactSection() {
  // Menentukan tipe data untuk state form agar type-safe
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Memberikan tipe data FormEvent pada submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data dikirim:", formData);
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-12">
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

        {/* --- FITUR TAMBAHAN: FORMULIR KONTAK DIRECT --- */}
        <div className="relative flex py-5 items-center my-6">
          <div className="flex-grow border-t border-slate-800/60"></div>
          <span className="flex-shrink mx-4 text-slate-500 font-mono text-xs uppercase tracking-widest">
            Or drop a message
          </span>
          <div className="flex-grow border-t border-slate-800/60"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                // Memberikan tipe data ChangeEvent pada element input HTML
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[#050b18] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                // Memberikan tipe data ChangeEvent pada element input HTML
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#050b18] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition duration-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              value={formData.message}
              // Memberikan tipe data ChangeEvent pada element textarea HTML
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-[#050b18] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition duration-200 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-medium rounded-xl py-4 transition duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 text-sm tracking-wider uppercase font-mono"
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
