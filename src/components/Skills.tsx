import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Layout, BarChart3, Lightbulb, Users } from 'lucide-react';

const skillCategories = [
  {
    title: "UX Design",
    icon: Users,
    skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Information Architecture", "WCAG", "Human-Centered Design", "Microinteractions"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "Python", "Responsive Design"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Graphic Design", "Visual Identity", "Brand Design", "UI Design", "Sustainable Design"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    skills: ["Power BI", "Dashboard Design", "Data Storytelling", "Interactive Reports"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Product Design",
    icon: Layout,
    skills: ["Product Strategy", "Design Thinking", "User-Centered Design", "Iteration"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    skills: ["Creativity", "Problem Solving", "Collaboration", "Continuous Learning", "Adaptability"],
    color: "from-yellow-500 to-orange-500"
  }
];

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-slate-300 text-lg mb-12">
            Always learning and open to exploring new tools and technologies
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
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