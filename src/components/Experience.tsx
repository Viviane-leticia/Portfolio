import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Web Designer",
    company: "CNIE, Ministry of Health",
    period: "2024 - Present",
    responsibilities: [
      "Established a Standard Operating Procedure and adapted the government Design System for Power BI Dashboards",
      <>Design user experience and interactions for Power BI dashboards (<a
        href="https://www.gov.br/saude/pt-br/composicao/svsa/cnie"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        CNIE
      </a>)</>,
      <>Support Python-based frontend development (<a
        href="https://linhadotemposarampo.saude.gov.br"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        linhadotemposarampo.saude.gov.br
      </a>)</>,
      "Develop graphic design solutions that enable creative process documentation",
      "Ensure consistent visual identity application across all CNIE products",
      "Produce reports and communications regarding new releases and awards for Ministry of Health internal distribution"
    ],
    current: true
  },
  {
    title: "Content Manager & Frontend Developer",
    company: "GNOVA at Enap",
    period: "Previous Role",
    responsibilities: [
      "Managed submission workflows for news, publications, and digital products",
      "Maintained and updated website content using HTML",
      "Developed visual identities for institutional programs and events",
      "Ensured consistent brand experience across all digital touchpoints"
    ],
    current: false
  },
  {
    title: "UX Designer",
    company: "Various Projects",
    period: "2020 - Present",
    responsibilities: [
      "Conducted user research and developed user personas",
      "Designed information architecture and user flows",
      "Created wireframes and interactive prototypes",
      "Performed usability testing and iterative improvements",
      "Collaborated with cross-functional development teams"
    ],
    current: true
  }
];

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-slate-200"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-900"></div>
                
                <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      <p className="text-slate-700 flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                      <span className="text-slate-500 flex items-center gap-1 text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-slate-600 flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}