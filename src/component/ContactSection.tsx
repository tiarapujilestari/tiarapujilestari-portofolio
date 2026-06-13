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
      <div className="w-full max-w-4xl bg-[#0b1329]/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-16 shadow-2xl relative z-10 mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-4 text-slate-100">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Ready to architect your next digital leap or just want to discuss
            the future of tech?
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* EMAIL ADDRESS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FULL NAME */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#050b18] border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition duration-200"
              />
            </div>

            {/* EMAIL ADDRESS */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-[#050b18] border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition duration-200"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-mono tracking-widest text-slate-400 uppercase">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Share your vision or project details..."
              className="w-full bg-[#050b18] border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition duration-200 resize-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono tracking-widest uppercase font-semibold py-4 px-6 rounded-xl transition duration-300 shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]"
            >
              Send Transmission
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
