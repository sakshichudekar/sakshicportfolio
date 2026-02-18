import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    emoji: "💻",
    skills: ["Java", "Kotlin", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    emoji: "🎨",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Android XML", "Jetpack Compose"],
  },
  {
    category: "Backend & DB",
    emoji: "⚙️",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "REST APIs"],
  },
  {
    category: "Cloud & Tools",
    emoji: "☁️",
    skills: ["AWS EC2", "AWS S3", "Git", "GitHub", "Postman", "Android Studio"],
  },
  {
    category: "Architecture",
    emoji: "🏗️",
    skills: ["MVVM", "MVC", "CRUD", "Authentication", "RecyclerView", "MERN Stack"],
  },
  {
    category: "Data & AI",
    emoji: "🤖",
    skills: ["Data Analytics", "IoT Systems", "AI Media", "Agile", "Problem Solving", "Tech Research"],
  },
];

const levelBars = [
  { name: "Java / Android Dev", level: 92 },
  { name: "MERN Stack", level: 85 },
  { name: "React.js / Frontend", level: 88 },
  { name: "Node.js / Express", level: 80 },
  { name: "AWS / Cloud", level: 70 },
  { name: "Firebase / Database", level: 83 },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-primary text-sm mb-3">02. SKILLS</p>
          <h2 className="section-title text-foreground mb-4">
            My Technical <span className="gradient-text-teal">Arsenal</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-teal mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Skill Groups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + gi * 0.08 }}
                className="glass-card p-5 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{group.emoji}</span>
                  <h3 className="font-display font-bold text-foreground text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Bars */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display font-bold text-xl text-foreground mb-8"
            >
              Proficiency Levels
            </motion.h3>
            {levelBars.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-foreground/80">{item.name}</span>
                  <span className="font-mono text-xs text-primary">{item.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-teal"
                  />
                </div>
              </motion.div>
            ))}

            {/* Fun tech tags row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="pt-6 flex flex-wrap gap-2"
            >
              {["Problem Solving", "Open Source", "Agile", "Team Collaboration", "Code Review"].map((tag) => (
                <span key={tag} className="font-mono text-xs bg-gold/10 text-gold border border-gold/20 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
