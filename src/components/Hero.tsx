import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>,
  ) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate position as percentage from center (-1 to 1)
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);

    setMousePosition({ x, y });
  };

  // Calculate background gradient based on mouse position
  const backgroundStyle = {
    background: `radial-gradient(circle at ${((mousePosition.x + 1) / 2) * 100}% ${((mousePosition.y + 1) / 2) * 100}%, 
      rgba(99, 102, 241, 0.12) 0%, 
      rgba(168, 85, 247, 0.08) 25%, 
      rgba(236, 72, 153, 0.08) 50%, 
      rgba(251, 146, 60, 0.05) 75%, 
      rgba(248, 250, 252, 1) 100%)`,
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden relative transition-all duration-300"
      onMouseMove={handleMouseMove}
      style={backgroundStyle}
    >
      {/* Animated gradient orbs that follow mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${((mousePosition.x + 1) / 2) * 100}% ${((mousePosition.y + 1) / 2) * 100}%, 
            rgba(99, 102, 241, 0.2), 
            transparent 50%)`,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${(1 - (mousePosition.x + 1) / 2) * 100}% ${(1 - (mousePosition.y + 1) / 2) * 100}%, 
            rgba(236, 72, 153, 0.15), 
            transparent 50%)`,
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            x: mousePosition.x * 25,
            rotateY: mousePosition.x * 25,
            rotateX: -mousePosition.y * 25,
          }}
          transition={{
            opacity: { duration: 0.6 },
            y: { duration: 0.6 },
            x: { type: "spring", stiffness: 150, damping: 15 },
            rotateY: {
              type: "spring",
              stiffness: 150,
              damping: 15,
            },
            rotateX: {
              type: "spring",
              stiffness: 150,
              damping: 15,
            },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6">
            UX & Frontend Designer
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Crafting meaningful digital experiences with
            creativity and purpose
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href="https://creativivs.my.canva.site"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium cursor-pointer"
            >
              View My Work
            </motion.a>
            <motion.a
              href=" https://viviane-leticia.github.io/Resume/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-full font-medium cursor-pointer"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: mousePosition.x * 10,
            y: mousePosition.y * 10,
          }}
          transition={{
            opacity: { delay: 0.8, duration: 0.6 },
            x: { type: "spring", stiffness: 150, damping: 15 },
            y: { type: "spring", stiffness: 150, damping: 15 },
          }}
          className="flex justify-center"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-8 h-8 text-slate-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}