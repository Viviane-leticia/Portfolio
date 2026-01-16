import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-12">
            I'm always open to new opportunities and collaborations
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:creativivs.ux@gmail.com"
              className="flex items-center justify-center gap-3 p-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Send Email</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/viviane-rocha-8a11b31b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 border-2 border-slate-900 text-slate-900 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Viviane-leticia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 border-2 border-slate-900 text-slate-900 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://viviane-leticia.github.io/Resume/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 border-2 border-slate-900 text-slate-900 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium">Resume</span>
            </motion.a>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-slate-500">
              © 2026 Viviane Rocha UX & Frontend Designer. Designed with creativity and purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}