import React from 'react';
import { motion, MotionProps } from "framer-motion";
interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}
const MotionDiv: React.FC<MotionDivProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};
const educationData = [
  {
    degree: "Product Management Certification",
    dateRange: "May 2024 - Nov 2024",
    institution: "Upraised",
  },
  {
    degree: "Bachelor Of Technology in Computer Science",
    dateRange: "July 2017 - August 2021",
    institution: "Lokmanya Tilak College of Engineering, Mumbai University",
  },
];

const Education: React.FC = () => {
  return (
    <section className="bg-black text-gray-300 py-16 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center mt-10">
      {/* <motion.h2
        className="text-4xl font-bold text-green-400 mb-12 text-center tracking-wide font-sans"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2> */}
      <div className="relative flex items-center justify-center h-32 mb-10">
        {/* Background large text */}
        <h1 className="absolute text-[8rem] font-extrabold text-yellowGreen/20 select-none pointer-events-none tracking-widest">
        EDUCATION
        </h1>

        {/* Foreground smaller text */}
        <h2 className="text-4xl md:text-3xl font-extrabold text-white z-10 relative">
        EDUCATION
        </h2>
      </div>
      <div className="relative mx-auto flex flex-col items-center" style={{ maxWidth: '600px' }}>
        {educationData.map((item, index) => (
          <MotionDiv
            key={index}
            className="mb-12 ml-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
          >
            <div className="flex flex-col items-center mb-4">
              <div className="text-4xl mb-2 select-none" aria-hidden="true">🎓</div>
              <div className="font-bold text-xl tracking-wide">{item.degree}</div>
            </div>
            <div className="text-yellowGreen mb-1 tracking-wide">{item.dateRange}</div>
            <div className="text-gray-400 text-sm tracking-wide">{item.institution}</div>
            {index !== educationData.length - 1 && (
              <div className="w-px bg-yellowGreen h-12 mt-6"></div>
            )}
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default Education;
