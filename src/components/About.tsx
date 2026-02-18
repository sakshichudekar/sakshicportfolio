import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Rocket, Coffee, Target } from "lucide-react";

const mindset = [
  { icon: Brain, title: "Systems Thinker", desc: "I break complex problems into elegant, modular solutions." },
  { icon: Rocket, title: "Ship Fast, Iterate", desc: "I believe in launching early, learning faster, and improving constantly." },
  { icon: Coffee, title: "Lifelong Learner", desc: "From Java to MERN to AWS — curiosity drives every line of code I write." },
  { icon: Target, title: "Impact-Driven", desc: "I build not just features, but experiences that make a real difference." },
];

const stats = [
  { value: "5+", label: "Internships Completed" },
  { value: "20+", label: "Certifications Earned" },
  { value: "4+", label: "Projects Built" },
  { value: "95%", label: "Java Certification Score" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 animated-gradient opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-primary text-sm mb-3">01. ABOUT ME</p>
          <h2 className="section-title text-foreground mb-4">
            The Dev Behind the <span className="gradient-text-teal">Code</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-teal mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Sakshi D. Chudekar</span>, a dedicated full-stack developer 
              with hands-on experience in <span className="text-primary font-medium">Java, Android (Kotlin)</span>, and the{" "}
              <span className="text-primary font-medium">MERN Stack</span>. I thrive at the intersection of clean architecture 
              and intuitive user experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Through 5 internships at companies like <span className="text-foreground font-semibold">EY GDS, Sasken Technologies</span>, 
              and <span className="text-foreground font-semibold">Pro Azure</span>, I've built production-ready applications, 
              REST APIs, and Android apps used by real users.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              When I'm not coding, I'm diving into AI innovations, contributing to open-source, and continuously 
              expanding my cloud & data skills through certifications on <span className="text-primary font-medium">AWS</span> and 
              <span className="text-primary font-medium"> Deloitte Forage</span>.
            </p>
            <a
              href="mailto:sakshichudekar1094@gmail.com"
              className="btn-primary inline-block"
            >
              Let's build something impactful ✨
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card p-6 text-center border-glow-animate"
              >
                <div className="font-display text-4xl font-bold gradient-text-teal mb-2">{stat.value}</div>
                <div className="font-mono text-xs text-muted-foreground leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Developer Mindset */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="font-display text-2xl font-bold text-center text-foreground mb-10">
            🧠 Developer <span className="gradient-text-teal">Mindset</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mindset.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 + i * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
