import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    icon: GraduationCap,
    degree: "Bachelor's Degree in Product Design",
    institution: "University of Brasília",
    type: "Undergraduate"
  },
  {
    icon: GraduationCap,
    degree: "Bachelor's Degree in Graphic Design",
    institution: "University of Brasília",
    type: "Undergraduate"
  },
  {
    icon: Award,
    degree: "Postgraduate Degree in Sustainable Design",
    institution: "Unyleya University",
    type: "Postgraduate"
  },
  {
    icon: BookOpen,
    degree: "Responsive Design Course",
    institution: "HTML, CSS & JavaScript",
    type: "Finishing",
    status: "In Progress"
  },
  {
    icon: BookOpen,
    degree: "Python Course",
    institution: "Programming & Development",
    type: "Starting",
    status: "In Progress"
  }
];

export function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="education" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {educationData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-xl">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-slate-900">{item.degree}</h3>
                        {item.status && (
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                            {item.status}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600">{item.institution}</p>
                      <p className="text-sm text-slate-500 mt-1">{item.type}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
