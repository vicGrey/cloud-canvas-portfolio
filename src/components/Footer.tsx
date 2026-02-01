import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Eye } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card/50 border-t border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Visitor Counter */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg glass">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Visitors: <span id="visitorCount" className="text-foreground font-semibold">0</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. Built with React & AWS.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
