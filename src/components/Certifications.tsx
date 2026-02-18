import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Trophy, ExternalLink, X, ChevronLeft, ChevronRight, Award, FileText } from "lucide-react";

// Featured certifications
const featured = [
  {
    title: "AI Hackathon",
    subtitle: "Haptiq – Certificate of Appreciation",
    year: "2025",
    issuer: "Haptiq / VJ Vilas Javdekar Developers",
    emoji: "🏆",
    color: "from-gold/30 to-yellow-500/10",
    borderColor: "border-gold/40",
    textColor: "text-gold",
    link: "/certs/haptiq.jpeg",
    type: "image",
    highlight: true,
  },
  {
    title: "Data Analytics",
    subtitle: "Deloitte Forage Certificate",
    year: "2024",
    issuer: "Deloitte via Forage",
    emoji: "📊",
    color: "from-primary/20 to-teal/5",
    borderColor: "border-primary/30",
    textColor: "text-primary",
    link: "/certs/deloitte.pdf",
    type: "pdf",
    highlight: false,
  },
  {
    title: "Solutions Architecture",
    subtitle: "AWS Forage Program",
    year: "2024",
    issuer: "Amazon Web Services via Forage",
    emoji: "☁️",
    color: "from-orange-400/15 to-orange-300/5",
    borderColor: "border-orange-400/30",
    textColor: "text-orange-400",
    link: "/certs/aws.pdf",
    type: "pdf",
    highlight: false,
  },
  {
    title: "Java Certificate and remaining certification",
    subtitle: "95% Score Achievement",
    year: "2023",
    issuer: "Java Certified Platform",
    emoji: "☕",
    color: "from-red-400/15 to-red-300/5",
    borderColor: "border-red-400/30",
    textColor: "text-red-400",
    link: "/certs/remaining.pdf",
    type: "pdf",
    highlight: false,
  },
];

// Internship certs (timeline)
const internshipCerts = [
  { title: "EY GDS AICTE", subtitle: "MERN Stack Internship", year: "Dec 2024 – Apr 2025", link: "/certs/eygds.pdf", emoji: "🏢" },
  { title: "Pro Azure", subtitle: "Android App Development", year: "Jun 2022 – Sep 2022", link: "/certs/pro_azure.pdf", emoji: "📱" },
  { title: "Mertex", subtitle: "IoT Internship", year: "2023", link: "/certs/mertex.pdf", emoji: "🔌" },
  { title: "Devine Tech", subtitle: "Development Internship", year: "2023", link: "/certs/remaining.pdf", emoji: "💻" },
  { title: "Sasken Technologies", subtitle: "3-Month Internship", year: "2024", link: "/certs/remaining.pdf", emoji: "🚀" },
];

// Additional certs grid
const moreCerts = [
  { title: "Infosys SpringBoard", subtitle: "Multiple Modules", link: "/certs/infosys.pdf" },
  { title: "Cloud Computing", subtitle: "Online Certification", link: "/certs/remaining.pdf" },
  { title: "Web Development", subtitle: "Frontend Essentials", link: "/certs/remaining.pdf" },
  { title: "Data Structures", subtitle: "Algorithm Mastery", link: "/certs/remaining.pdf" },
  { title: "Machine Learning", subtitle: "AI/ML Fundamentals", link: "/certs/remaining.pdf" },
  { title: "Cybersecurity", subtitle: "Security Basics", link: "/certs/remaining.pdf" },
  { title: "DevOps", subtitle: "CI/CD & Deployment", link: "/certs/remaining.pdf" },
  { title: "React Advanced", subtitle: "Hooks & Performance", link: "/certs/remaining.pdf" },
  { title: "Node.js Expert", subtitle: "Backend Mastery", link: "/certs/remaining.pdf" },
  { title: "Database Design", subtitle: "SQL & NoSQL", link: "/certs/remaining.pdf" },
  { title: "API Development", subtitle: "REST & GraphQL", link: "/certs/remaining.pdf" },
  { title: "Cloud Security", subtitle: "AWS Security", link: "/certs/remaining.pdf" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAllModal, setShowAllModal] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerSrc, setViewerSrc] = useState({ src: "", type: "pdf", title: "" });

  const openViewer = (src: string, type: string, title: string) => {
    setViewerSrc({ src, type, title });
    setViewerOpen(true);
  };

  return (
    <section id="certifications" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 animated-gradient opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-primary text-sm mb-3">05. CERTIFICATIONS</p>
          <h2 className="section-title text-foreground mb-4">
            Proof of <span className="gradient-text-gold">Excellence</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-gold mx-auto" />
        </motion.div>

        {/* ─── Featured Certifications ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-gold" />
            Featured Certifications
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {featured.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => openViewer(cert.link, cert.type, cert.title)}
              className={`cert-card bg-gradient-to-br ${cert.color} border ${cert.borderColor} p-6 cursor-pointer ${
                cert.highlight ? "lg:col-span-1 ring-1 ring-gold/40" : ""
              }`}
            >
              <div className="text-4xl mb-4">{cert.emoji}</div>
              {cert.highlight && (
                <span className="font-mono text-xs bg-gold/20 text-gold border border-gold/30 rounded-full px-2 py-0.5 mb-3 inline-block">
                  🏆 Winner 2025
                </span>
              )}
              <h4 className={`font-display font-bold text-lg ${cert.textColor} mb-1`}>{cert.title}</h4>
              <p className="font-mono text-xs text-muted-foreground mb-2 leading-relaxed">{cert.subtitle}</p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
                <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
                <span className="flex items-center gap-1 font-mono text-xs text-primary">
                  View <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Internship Timeline ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="font-display font-bold text-xl text-foreground mb-8 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Internship Certificates
          </h3>
        </motion.div>

        <div className="relative mb-20">
          {/* Horizontal timeline line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between">
            {internshipCerts.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="flex flex-col items-center text-center md:w-1/5 px-2"
              >
                {/* Dot on timeline */}
                <div className="w-4 h-4 rounded-full bg-primary border-2 border-background mb-4 hidden md:block"
                  style={{ boxShadow: "0 0 10px hsl(172 100% 42% / 0.7)" }} />

                <button
                  onClick={() => openViewer(cert.link, "pdf", cert.title)}
                  className="glass-card-hover p-4 rounded-xl w-full cursor-pointer text-left"
                >
                  <div className="text-2xl mb-2 text-center">{cert.emoji}</div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1 text-center">{cert.title}</h4>
                  <p className="font-mono text-xs text-muted-foreground text-center mb-2">{cert.subtitle}</p>
                  <p className="font-mono text-xs text-primary text-center">{cert.year}</p>
                  <div className="flex items-center justify-center gap-1 mt-3 text-xs text-muted-foreground">
                    <FileText className="w-3 h-3" />
                    <span>Certificate</span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── More Certs WhatsApp-style grid ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-4"
        >
          <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            More Certifications
            <span className="font-mono text-xs text-muted-foreground font-normal">(20+ earned)</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {moreCerts.slice(0, 3).map((cert, i) => (
            <button
              key={cert.title}
              onClick={() => openViewer(cert.link, "pdf", cert.title)}
              className="glass-card-hover p-4 rounded-lg text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <h4 className="font-mono text-sm font-semibold text-foreground mb-1">{cert.title}</h4>
              <p className="font-mono text-xs text-muted-foreground">{cert.subtitle}</p>
            </button>
          ))}

          {/* +more tile */}
          <button
            onClick={() => setShowAllModal(true)}
            className="glass-card relative overflow-hidden rounded-lg flex items-center justify-center min-h-[100px] cursor-pointer border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all group"
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all" />
            <div className="relative text-center">
              <div className="font-display text-2xl font-bold gradient-text-teal">10+</div>
              <div className="font-mono text-xs text-muted-foreground">more certs</div>
              <div className="font-mono text-xs text-primary mt-1">tap to view →</div>
            </div>
          </button>
        </motion.div>
      </div>

      {/* ─── All Certs Modal ─── */}
      <AnimatePresence>
        {showAllModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowAllModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-2xl w-full p-8 rounded-2xl max-h-[80vh] overflow-y-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-xl text-foreground">All Certifications</h3>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {moreCerts.map((cert) => (
                  <button
                    key={cert.title}
                    onClick={() => { openViewer(cert.link, "pdf", cert.title); setShowAllModal(false); }}
                    className="glass-card-hover p-4 rounded-lg text-left flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-semibold text-foreground">{cert.title}</h4>
                      <p className="font-mono text-xs text-muted-foreground">{cert.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Certificate Viewer Modal ─── */}
      <AnimatePresence>
        {viewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col"
          >
            {/* Viewer Header */}
            <div className="flex items-center justify-between p-4 border-b border-border glass-card">
              <h3 className="font-display font-bold text-foreground">{viewerSrc.title}</h3>
              <div className="flex items-center gap-3">
                <a
                  href={viewerSrc.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in new tab
                </a>
                <button
                  onClick={() => setViewerOpen(false)}
                  className="glass-card p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewer Content */}
            <div className="flex-1 flex items-center justify-center p-4">
              {viewerSrc.type === "image" ? (
                <img
                  src={viewerSrc.src}
                  alt={viewerSrc.title}
                  className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <iframe
                  src={viewerSrc.src}
                  className="w-full h-full rounded-xl border border-border"
                  title={viewerSrc.title}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
