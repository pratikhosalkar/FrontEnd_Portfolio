import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

const skills = [
  "React.js", "React Native", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS", "Redux", "RESTful APIs", "Next.js",
  "Tailwind CSS", "SQL", "Webpack", "Babel", "Git (GitHub/GitLab)", "CI/CD", "NPM", "React Native Debugger", "Unit Testing",
  "Xcode", "Agile (Scrum)", "JIRA", "Confluence", "Figma", "Postman", "SASS", "Code Splitting", "Lazy Loading",
  "Mobile Optimization", "State Management", "Responsive Design", "Reusable Components", "Application Development",
  "Mobile App Development", "Software Engineering Concepts", "Business Applications", "Modern Web Standards"
];

const softSkills = [
  "Problem-Solving", "Collaboration", "Leadership", "Performance Optimization", "Mentor Junior Developers"
];

const MotionH2: React.FC<HTMLMotionProps<'h2'>> = motion.h2;
const MotionSpan: React.FC<HTMLMotionProps<'span'>> = motion.span;
const MotionH3: React.FC<HTMLMotionProps<'h3'>> = motion.h3;

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-12 max-w-4xl mx-auto">
      <MotionH2
        className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </MotionH2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {skills.map((skill, idx) => (
          <MotionSpan
            key={idx}
            className="bg-gray-800 rounded px-3 py-1 text-sm"
            whileHover={{ scale: 1.1, backgroundColor: '#2563eb' }}
          >
            {skill}
          </MotionSpan>
        ))}
      </div>
      <MotionH3
        className="mt-6 font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Soft Skills
      </MotionH3>
      <ul className="list-disc list-inside">
        {softSkills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
