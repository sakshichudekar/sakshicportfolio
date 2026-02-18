import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "Java Developer",
  "Android App Developer",
  "MERN Stack Developer",
  "Full Stack Engineer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </div>

      {/* Floating glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/8 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary">Available for opportunities</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-primary text-lg mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="section-title text-foreground mb-2 leading-tight"
          >
            Sakshi D.{" "}
            <span className="gradient-text-teal">Chudekar</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground mb-8 h-10 flex items-center justify-center gap-1"
          >
            <span className="text-foreground/70">I'm a </span>
            <span className="gradient-text-teal">{displayed}</span>
            <span className="cursor-blink text-primary text-3xl font-thin">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12"
          >
            A passionate developer who builds elegant, scalable solutions using Java, Android & the MERN Stack. 
            I turn complex problems into clean, impactful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a href="#projects" className="btn-primary text-base">
              View My Work →
            </a>
            <a href="#contact" className="btn-outline text-base">
              Let's Connect
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/sakshichudekar", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sakshi-chudekar-8a9a4a333", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sakshichudekar1094@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="font-mono text-xs">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
