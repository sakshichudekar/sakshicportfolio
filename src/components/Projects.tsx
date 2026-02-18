import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "EvalEase",
    subtitle: "Feedback Collection Portal",
    problem: "Manual feedback collection was time-consuming and lacked structured analysis for educators.",
    solution: "Built a full-stack portal with real-time feedback submission, analytics dashboard, and admin management.",
    outcome: "Reduced feedback processing time by 70%; adopted by student cohorts for course evaluations.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    gradient: "from-teal/20 to-primary/5",
    accentColor: "var(--primary)",
    github: "https://github.com/sakshichudekar",
    featured: true,
  },
  {
    number: "02",
    title: "RecipeShare",
    subtitle: "Recipe Sharing Platform",
    problem: "Home cooks had no unified platform to discover, share, and save personalized recipes.",
    solution: "Developed a MERN-based social cooking platform with user profiles, recipe CRUD, and search filtering.",
    outcome: "Clean UI with smooth UX; supports full recipe lifecycle from creation to sharing.",
    stack: ["React.js", "Node.js", "MongoDB", "Express", "Cloudinary", "Tailwind CSS"],
    gradient: "from-gold/15 to-yellow-500/5",
    accentColor: "hsl(43, 96%, 56%)",
    github: "https://github.com/sakshichudekar",
    featured: false,
  },
  {
    number: "03",
    title: "WeatherApp",
    subtitle: "Real-time Weather Application",
    problem: "Users needed a fast, beautiful way to check current weather and 5-day forecasts.",
    solution: "Built a React weather app integrating OpenWeatherMap API with geolocation and city search.",
    outcome: "Live weather data with animated icons, temperature unit toggle, and clean mobile-first UI.",
    stack: ["React.js", "OpenWeatherMap API", "Geolocation API", "Axios", "CSS Animations"],
    gradient: "from-blue-500/10 to-cyan-400/5",
    accentColor: "hsl(200, 100%, 60%)",
    github: "https://github.com/sakshichudekar",
    featured: false,
  },
  {
    number: "04",
    title: "Merchant Intelligence",
    subtitle: "Merchant Analytics Dashboard",
    problem: "Small business owners lacked affordable tools to understand sales patterns and customer behavior.",
    solution: "Created an analytics dashboard with data visualization, KPI tracking, and exportable reports.",
    outcome: "Provides merchants with actionable insights; built with scalable chart components and filters.",
    stack: ["React.js", "Recharts", "Node.js", "MongoDB", "Data Analytics", "REST APIs"],
    gradient: "from-purple-500/10 to-violet-400/5",
    accentColor: "hsl(260, 80%, 65%)",
    github: "https://github.com/sakshichudekar",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-primary text-sm mb-3">04. PROJECTS</p>
          <h2 className="section-title text-foreground mb-4">
            Things I've <span className="gradient-text-teal">Built</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-teal mx-auto mb-4" />
          <p className="text-muted-foreground font-mono text-sm">Case-study style — problem → solution → outcome</p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="glass-card overflow-hidden mb-8 border border-primary/20 hover:border-primary/40 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Visual panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-30" />
              <div className="relative text-center">
                <div className="font-display text-7xl font-bold text-primary/20 mb-4">01</div>
                <div className="font-display text-3xl font-bold gradient-text-teal">EvalEase</div>
                <div className="font-mono text-sm text-muted-foreground mt-2">Feedback Portal</div>
              </div>
            </div>
            {/* Info panel */}
            <div className="lg:col-span-3 p-8">
              <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">Featured Project</span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-4 mb-6">{projects[0].subtitle}</h3>
              
              <div className="space-y-4 mb-6">
                {[
                  { label: "🔴 Problem", text: projects[0].problem },
                  { label: "✅ Solution", text: projects[0].solution },
                  { label: "🚀 Outcome", text: projects[0].outcome },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="font-mono text-xs text-muted-foreground min-w-[80px] pt-0.5">{item.label}</span>
                    <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].stack.map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
              <a
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-3 transition-all"
              >
                <Github className="w-4 h-4" />
                View on GitHub <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="glass-card-hover p-6 rounded-xl flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-4xl font-bold text-muted-foreground/20">{project.number}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-1">{project.title}</h3>
              <p className="font-mono text-xs text-primary mb-4">{project.subtitle}</p>

              <div className="space-y-3 mb-5 flex-1">
                {[
                  { label: "Problem", text: project.problem },
                  { label: "Solution", text: project.solution },
                  { label: "Outcome", text: project.outcome },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="font-mono text-xs text-muted-foreground">{item.label}: </span>
                    <span className="text-xs text-foreground/70">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="font-mono text-xs bg-muted text-muted-foreground border border-border rounded px-2 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sakshichudekar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            See All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
