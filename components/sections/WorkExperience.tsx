import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

const workExperience = [
  {
    company: "NeoSoft",
    period: "April 2023 – Present",
    description: [
      "Built real-time analytics components with async API handling and optimized state, reducing latency by 30%.",
      "Led reusable design systems, reducing UI inconsistencies and dev time by 40%."
    ]
  },
  {
    company: "Accenture",
    period: "Sept 2021 – Feb 2025",
    description: [
      "Built scalable CRM for jewelry brand using React, Redux, TypeScript – served 500+ DAUs.",
      "Boosted load speed by 40%, optimized RESTful APIs for 20% faster transitions.",
      "Coordinated agile delivery with PMs/designers using Next.js – achieved 98% on-time delivery."
    ]
  }
];

const MotionH2: React.FC<HTMLMotionProps<'h2'>> = motion.h2;
const MotionDiv: React.FC<HTMLMotionProps<'div'>> = motion.div;

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="mb-12 max-w-4xl mx-auto">
      <MotionH2
        className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </MotionH2>
      {workExperience.map((work, idx) => (
        <MotionDiv
          key={idx}
          className="mb-6"
          initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + idx * 0.2 }}
        >
          <h3 className="text-xl font-semibold">{work.company}</h3>
          <p className="italic text-sm mb-2">{work.period}</p>
          <ul className="list-disc list-inside">
            {work.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </MotionDiv>
      ))}
    </section>
  );
};

export default WorkExperience;
