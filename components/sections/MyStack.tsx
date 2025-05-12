import React, { useEffect } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiReactivex,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

interface Tech {
  name: string;
  icon: React.ReactElement;
}

const frontendTech: Tech[] = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
  },
  { name: "React", icon: <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" /> },
  {
    name: "React Native",
    icon: <SiReactivex className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
  },
  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 sm:w-8 sm:h-8 text-white" /> },
  { name: "Redux", icon: <SiRedux className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />,
  },
];

const MyStack: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const renderTechGrid = (techList: Tech[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {techList.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center justify-center p-4 space-x-3 bg-gray-900 rounded-2xl"
        >
          {tech.icon}
          <span className="text-gray-300 text-sm sm:text-base">{tech.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full bg-black text-gray-300 px-4 sm:px-6 md:px-12 py-12 overflow-hidden max-w-7xl mx-auto top-10">
      <div className="relative flex items-center justify-center h-32 mb-20">
        {/* Background large text */}
        <h1 className="absolute text-[5rem] sm:text-[6rem] md:text-[8rem] font-extrabold text-yellowGreen/20 select-none pointer-events-none tracking-widest">
          SKILL STACK{" "}
        </h1>

        {/* Foreground smaller text */}
        <h2 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-white z-10 relative">
          SKILL STACK{" "}
        </h2>
      </div>

      {/* Skill categories */}
      <div
        className="space-y-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 className="font-bold uppercase text-left text-yellowGreen">
          Frontend
        </h3>
        {renderTechGrid(frontendTech)}
      </div>
    </section>
  );
};

export default MyStack;
