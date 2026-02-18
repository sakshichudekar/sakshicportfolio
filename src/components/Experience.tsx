import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "EY GDS (Ernst & Young Global Delivery Services)",
    role: "Web Developer Intern – MERN Stack",
    period: "Dec 2024 – Apr 2025",
    type: "AICTE Internship",
    location: "Remote",
    color: "var(--primary)",
    highlights: [
      "Built full-stack MERN applications with RESTful API integration",
      "Implemented user authentication (JWT + bcrypt) and session management",
      "Developed CRUD operations with MongoDB and optimized queries for performance",
      "Collaborated with cross-functional teams using Agile/Scrum methodology",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    cert: "/certs/eygds.pdf",
  },
  {
    company: "Sasken Technologies",
    role: "Software Development Intern",
    period: "3 Months (2024)",
    type: "Industry Internship",
    location: "Bengaluru, India",
    color: "hsl(43, 96%, 56%)",
    highlights: [
      "Worked on embedded software development and system-level programming",
      "Gained hands-on experience in enterprise software development practices",
      "Contributed to code reviews and documentation for product modules",
      "Collaborated with senior engineers on live product development cycles",
    ],
    stack: ["Java", "Embedded Systems", "Testing", "Documentation"],
    cert: "/certs/remaining.pdf",
  },
  {
    company: "Pro Azure",
    role: "Android Application Developer Intern",
    period: "Jun 2022 – Sep 2022",
    type: "Internship",
    location: "Remote",
    color: "hsl(260, 80%, 65%)",
    highlights: [
      "Developed Android apps using Java/Kotlin with MVVM architecture pattern",
      "Integrated Firebase Authentication for secure user login/signup flows",
      "Built dynamic UI components using RecyclerView and custom adapters",
      "Implemented real-time data synchronization with Firebase Realtime Database",
    ],
    stack: ["Java", "Kotlin", "Firebase", "MVVM", "Android Studio", "RecyclerView"],
    cert: "/certs/pro_azure.pdf",
  },
  {
    company: "Mertex",
    role: "IoT Development Intern",
    period: "2023",
    type: "Internship",
    location: "Remote",
    color: "hsl(150, 70%, 45%)",
    highlights: [
      "Developed IoT solutions for real-time sensor data monitoring and control",
      "Integrated hardware modules with cloud platforms for data visualization",
      "Built dashboards for IoT device status and remote management",
      "Gained experience in embedded systems and communication protocols",
    ],
    stack: ["IoT", "Embedded Systems", "Cloud Integration", "Data Visualization"],
    cert: "/certs/mertex.pdf",
  },
  {
    company: "Devine Tech",
    role: "Development Intern",
    period: "2023",
    type: "Internship",
    location: "Remote",
    color: "hsl(190, 90%, 45%)",
    highlights: [
      "Contributed to web application development using modern JavaScript frameworks",
      "Implemented responsive UI designs with cross-browser compatibility",
      "Participated in code reviews and team knowledge-sharing sessions",
      "Delivered project milestones on time in a fast-paced startup environment",
    ],
    stack: ["JavaScript", "HTML/CSS", "React", "Git"],
    cert: "/certs/remaining.pdf",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 animated-gradient opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-primary text-sm mb-3">03. EXPERIENCE</p>
          <h2 className="section-title text-foreground mb-4">
            My Growth <span className="gradient-text-teal">Journey</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-teal mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-px" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-10">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-background"
                    style={{ backgroundColor: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
                  />
                </div>

                {/* Card */}
                <div className={`md:w-1/2 pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card-hover p-6 rounded-xl">
                    {/* Company + period */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-foreground text-lg leading-tight">{exp.company}</h3>
                        <p className="font-mono text-sm" style={{ color: exp.color }}>{exp.role}</p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((hl) => (
                        <li key={hl} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">▹</span>
                          {hl}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="font-mono text-xs bg-muted text-muted-foreground border border-border rounded-md px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Certificate link */}
                    <a
                      href={exp.cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
