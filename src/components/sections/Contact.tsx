import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import Reveal from "../motion/Reveal";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../motion/MagneticButton";

const EMAILJS_SERVICE_ID = "service_junior009";
const EMAILJS_TEMPLATE_ID = "template_junior009";
const EMAILJS_PUBLIC_KEY = "PWARndjNzJlYP6qs5";

const CONTACT_EMAIL = "tiarapujilestari009@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/tiarapujilestari9/";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: CONTACT_EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#6b6b70] outline-none transition duration-200 focus:border-white/30 focus:ring-1 focus:ring-white/10";

  return (
    <section
      id="contact"
      className="relative z-[70] -mt-16 flex flex-col items-center overflow-hidden rounded-t-[3rem] bg-[#0b0b0c] px-6 pb-24 pt-24 md:px-16"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-500/5 blur-[120px]" />

      <Reveal direction="up" className="relative z-10 mb-12 max-w-2xl text-center">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#F5F5F5]">
          Let's Build Something
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Together.
          </span>
        </h2>
      </Reveal>

      <Reveal direction="up" delay={0.1} className="relative z-10 w-full max-w-2xl">
        <GlassCard className="p-8 md:p-12">
          <p className="mx-auto mb-10 max-w-xl text-center text-sm md:text-base leading-relaxed text-[#A1A1AA]">
            Ready to architect your next digital leap or just want to discuss
            the future of tech? Find me on my social profiles below, or send
            a direct message.
          </p>

          {/* SOCIALS */}
          <div className="mx-auto mb-10 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
            <MagneticButton href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <span
                data-cursor="magnetic"
                className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-[#A1A1AA] transition duration-300 hover:border-white/25 hover:text-[#F5F5F5]"
              >
                <LinkedInIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-mono text-sm uppercase tracking-widest">LinkedIn</span>
              </span>
            </MagneticButton>

            <MagneticButton href={`mailto:${CONTACT_EMAIL}`}>
              <span
                data-cursor="magnetic"
                className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-[#A1A1AA] transition duration-300 hover:border-white/25 hover:text-[#F5F5F5]"
              >
                <MailIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-mono text-sm uppercase tracking-widest">Email</span>
              </span>
            </MagneticButton>
          </div>

          <div className="my-8 flex items-center">
            <div className="flex-grow border-t border-white/10" />
            <span className="mx-4 flex-shrink font-mono text-xs uppercase tracking-widest text-[#6b6b70]">
              Or drop a message
            </span>
            <div className="flex-grow border-t border-white/10" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-[#A1A1AA]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-[#A1A1AA]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-[#A1A1AA]">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.01 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
              data-cursor="magnetic"
              className="w-full rounded-full bg-[#F5F5F5] py-4 text-xs md:text-sm font-semibold uppercase tracking-widest text-[#080808] transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-mono text-sm text-emerald-400"
              >
                Pesan berhasil dikirim. Terima kasih!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-mono text-sm text-red-400"
              >
                Gagal mengirim pesan. Coba lagi atau hubungi lewat email/LinkedIn.
              </motion.p>
            )}
          </form>
        </GlassCard>
      </Reveal>
    </section>
  );
};

export default Contact;
