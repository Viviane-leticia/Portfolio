import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-slate-600">
            <p>
              I'm a passionate UX and Frontend Designer with a unique blend of product and graphic design 
              expertise. With both bachelor's degrees from the University of Brasília, I bring a holistic 
              approach to creating digital experiences that are both beautiful and functional.
            </p>
            <p>
              Since 2020, I've been dedicated to crafting user experiences that make a difference. My work 
              spans from designing interactive dashboards in Power BI to developing frontend solutions,
              always with a focus on user-centered design and creativity.
            </p>
            <p>
              Currently working as a Web Designer at National Center for Epidemiological Intelligence and Genomic Surveillance (CNIE)
              at the Brazilian Ministry of Health (MS). I design the experience and 
              interaction of dashboards and support various products including frontend development. My 
              focus is on making a difference for people — following WCAG guidelines and Nielsen Norman Group 
              principles — and for the earth, informed by my postgraduate studies in sustainable design.
            </p>
            <p>
              I'm continuously learning and expanding my toolkit—currently finishing a responsive design 
              course (HTML, CSS, JS) and beginning Python studies. I'm always open to exploring new tools 
              and technologies to deliver better solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}