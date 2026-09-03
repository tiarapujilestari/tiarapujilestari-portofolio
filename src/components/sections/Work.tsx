import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flag, ClipboardList, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Reveal from "../motion/Reveal";
import Parallax from "../motion/Parallax";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";

// ===== Project 1: Pemesanan Makan Pasien RS Awal Bros =====
import projectTiara from "../../assets/login.png";
import mockupGambar2 from "../../assets/project-aplikasi-rs.png";
import mockupGambar3 from "../../assets/detail-cabang.png";
import mockupGambar4 from "../../assets/detail-rekap.png";
import mockupGambar5 from "../../assets/detail-pantangan.png";
import mockupGambar6 from "../../assets/detail-pantangan-rg.png";
import mockupGambar7 from "../../assets/input-menu-sarapan.png";
import mockupGambar8 from "../../assets/input-menu-makan-siang.png";
import mockupGambar9 from "../../assets/input-menu-makan-malam.png";
import mockupGambar10 from "../../assets/input-menu-snack-kariyawan.png";
import mockupGambar11 from "../../assets/master-dashboard.png";
import mockupGambar12 from "../../assets/popup-berhasil.png";
import mockupGambar13 from "../../assets/popup-gagal.png";

// ===== Project 2: SIM CPN =====
import simCpnLogin from "../../assets/sim-cpn-login.png";
import simCpnDashboard from "../../assets/sim-cpn-dashboard.png";
import simCpnStokGudang from "../../assets/sim-cpn-stok-gudang.png";
import simCpnDailyRequest from "../../assets/sim-cpn-daily-request.png";

// ===== Project 3: Bokvra Coffee & Resto =====
import bokvraBeranda from "../../assets/bokvra-beranda.png";
import bokvraBlog from "../../assets/bokvra-blog.png";
import bokvraTentangKami from "../../assets/bokvra-tentang-kami.png";
import bokvraMenuLayanan from "../../assets/bokvra-menu-layanan.png";

interface Project {
  id: string;
  index: string;
  title: string;
  tech: string[];
  situation: string;
  tujuan: string;
  thumbnail: string;
  images: string[];
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "rs-awal-bros",
    index: "01",
    title: "Pemesanan Makan Pasien RS Awal Bros",
    tech: ["React", "Node.js", "JavaScript", "VS Code"],
    situation:
      "Pemesanan makanan pasien yang dilakukan setiap hari dan berbeda siklus, harus melewati seleksi menu oleh ahli gizi dan tergantung pantangan makan pasien.",
    tujuan:
      "Tercapainya pemesanan makanan sesuai dengan yang dibutuhkan oleh rumah sakit dan sesuai dengan pantangan ataupun gizi yang dihitung oleh ahli gizi.",
    thumbnail: projectTiara,
    images: [
      projectTiara, mockupGambar2, mockupGambar3, mockupGambar4, mockupGambar5,
      mockupGambar6, mockupGambar7, mockupGambar8, mockupGambar9, mockupGambar10,
      mockupGambar11, mockupGambar12, mockupGambar13,
    ],
  },
  {
    id: "sim-cpn-inventory",
    index: "02",
    title: "SIM CPN — Sistem Informasi Manajemen Inventory & Keuangan",
    tech: ["React", "Node.js", "JavaScript", "MySQL"],
    situation:
      "PT Cahaya Perdana Nusantara membutuhkan sistem terpusat untuk mengelola data master, transaksi inventory, keuangan (mapping RO, payment voucher, bank expense), stok gudang, hingga laporan pembelian dan supplier yang sebelumnya masih tersebar dan manual.",
    tujuan:
      "Menghadirkan Sistem Informasi Manajemen (SIM) berbasis web dengan hak akses login per role, modul stok gudang dengan filter departemen & gudang, transaksi Daily Request (DR) antar departemen lengkap dengan status approval dan cetak, serta laporan pembelian dan supplier yang terintegrasi dalam satu dashboard.",
    thumbnail: simCpnDashboard,
    images: [simCpnLogin, simCpnDashboard, simCpnStokGudang, simCpnDailyRequest],
  },
  {
    id: "bokvra-coffee-resto",
    index: "03",
    title: "Bokvra Coffee & Resto — Company Profile & Blog",
    tech: ["React", "Tailwind CSS", "Vercel"],
    situation:
      "Bokvra Coffee & Resto membutuhkan website resmi untuk memperkenalkan brand, menu, tim, serta blog sebagai media cerita dan edukasi seputar kopi kepada pelanggan.",
    tujuan:
      "Menghadirkan website yang hangat dan sesuai identitas brand (Ngopi Senyaman Rumah), lengkap dengan halaman Beranda, Tentang Kami, Menu & Layanan, Tim, dan Blog yang mudah dikelola.",
    thumbnail: bokvraBeranda,
    images: [bokvraBeranda, bokvraTentangKami, bokvraMenuLayanan, bokvraBlog],
    liveUrl: "https://bokvra-space.vercel.app/",
  },
];

const Work: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeProject = projects.find((p) => p.id === activeProjectId) || null;

  const openModal = (id: string) => {
    setActiveProjectId(id);
    setCurrentImageIndex(0);
  };
  const closeModal = () => setActiveProjectId(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeProject) return;
    setCurrentImageIndex((i) => (i === activeProject.images.length - 1 ? 0 : i + 1));
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeProject) return;
    setCurrentImageIndex((i) => (i === 0 ? activeProject.images.length - 1 : i - 1));
  };

  return (
    <section
      id="work"
      className="relative z-50 -mt-16 rounded-t-[3rem] bg-[#080808] px-6 pb-24 pt-20 md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal direction="up" className="mb-16">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#A1A1AA]">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F5F5]">
            Projects
          </h2>
        </Reveal>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <Reveal key={project.id} direction="up" duration={0.8}>
              <div
                className={`flex flex-col ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-14`}
              >
                {/* IMAGE */}
                <Parallax offset={36} className="w-full lg:w-3/5">
                  <motion.button
                    onClick={() => openModal(project.id)}
                    data-cursor="view"
                    initial={{ scale: 0.92, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.015 }}
                    className="group relative block w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] text-left"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-contain opacity-90 grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </motion.button>
                </Parallax>

                {/* TEXT */}
                <div className="w-full space-y-5 lg:w-2/5">
                  <span className="text-xs tracking-[0.3em] text-[#A1A1AA]">
                    {project.index}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F5F5]">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] text-[#A1A1AA]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <GlassCard className="p-4">
                      <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase text-[#F5F5F5]">
                        <Flag className="h-3.5 w-3.5" />
                        Situation
                      </div>
                      <p className="text-xs leading-relaxed text-[#A1A1AA]">
                        {project.situation}
                      </p>
                    </GlassCard>
                    <GlassCard className="p-4">
                      <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase text-[#F5F5F5]">
                        <ClipboardList className="h-3.5 w-3.5" />
                        Tujuan
                      </div>
                      <p className="text-xs leading-relaxed text-[#A1A1AA]">
                        {project.tujuan}
                      </p>
                    </GlassCard>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    )}
                    <Button
                      onClick={() => openModal(project.id)}
                      variant="ghost"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* MODAL / GALLERY */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-4xl flex-col items-center rounded-[2rem] border border-white/10 bg-[#0d0d0e]/90 p-4 shadow-2xl backdrop-blur-2xl md:p-6"
            >
              <button
                onClick={closeModal}
                data-cursor="magnetic"
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-[#A1A1AA] transition-all hover:rotate-90 hover:text-[#F5F5F5]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-4 w-full px-2 text-left">
                <h4 className="font-mono text-sm uppercase tracking-wide text-[#F5F5F5]">
                  / {activeProject.title}
                </h4>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-xs text-[#A1A1AA]">
                    {currentImageIndex + 1} / {activeProject.images.length}
                  </p>
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[#F5F5F5] hover:underline"
                    >
                      Kunjungi Website <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={activeProject.images[currentImageIndex]}
                    alt={`Screenshot ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    transition={{ duration: 0.3 }}
                    className="max-h-full max-w-full rounded-lg object-contain"
                  />
                </AnimatePresence>

                <button
                  onClick={prevImage}
                  data-cursor="magnetic"
                  className="absolute left-4 z-10 rounded-xl border border-white/10 bg-black/60 p-3 text-white shadow-lg backdrop-blur transition-all hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  data-cursor="magnetic"
                  className="absolute right-4 z-10 rounded-xl border border-white/10 bg-black/60 p-3 text-white shadow-lg backdrop-blur transition-all hover:bg-white hover:text-black"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 flex gap-2">
                {activeProject.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "w-8 bg-[#F5F5F5]"
                        : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
