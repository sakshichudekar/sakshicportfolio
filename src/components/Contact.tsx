import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Sparkles, ArrowUpRight, Send } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "sakshichudekar1094@gmail.com",
    href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    color: "text-red-400",
    bg: "bg-red-400/10 border-red-400/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sakshichudekar",
    href: "https://github.com/sakshichudekar",
    color: "text-foreground",
    bg: "bg-foreground/10 border-foreground/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sakshi-chudekar-8a9a4a333",
    href: "https://www.linkedin.com/in/sakshi-chudekar-8a9a4a333",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-3">06. CONTACT</p>
          <h2 className="section-title text-foreground mb-4">
            Let's Build Something <span className="gradient-text-teal">Impactful</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-teal mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            I'm currently open to new opportunities. Whether you have a project, internship, 
            or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card border border-primary/25 rounded-2xl p-10 text-center mb-12 border-glow-animate max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm passionate about building impactful digital experiences. 
            Let's connect and create something extraordinary together.
          </p>
          <a
            href="mailto:sakshichudekar1094@gmail.com"
            className="btn-primary inline-flex items-center gap-2 text-base"
          >
            <Send className="w-4 h-4" />
            Say Hello 👋
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`glass-card-hover flex items-center gap-3 px-5 py-3 rounded-xl border ${social.bg} min-w-[240px] group`}
            >
              <div className={`p-2 rounded-lg ${social.bg}`}>
                <social.icon className={`w-4 h-4 ${social.color}`} />
              </div>
              <div className="flex-1 text-left">
                <div className="font-mono text-xs text-muted-foreground">{social.label}</div>
                <div className={`font-mono text-xs ${social.color} truncate max-w-[160px]`}>{social.value}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center border-t border-border pt-8"
        >
          <p className="font-mono text-sm text-muted-foreground">
            Designed & Built by{" "}
            <span className="text-primary font-medium">Sakshi D. Chudekar</span>
            {" "}· {new Date().getFullYear()}
          </p>
          <p className="font-mono text-xs text-muted-foreground/50 mt-2">
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
