import VelocityMarquee from "@/components/motion/VelocityMarquee";

export default function MarqueeBanner() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/10 py-16 md:py-24">
      <VelocityMarquee
        text="CREATIVE DEVELOPER   ·   FULL STACK DEVELOPER   ·   FRONTEND ENGINEER   ·"
        baseVelocity={3}
        className="font-display text-5xl italic text-white/10 md:text-7xl"
      />
    </section>
  );
}
