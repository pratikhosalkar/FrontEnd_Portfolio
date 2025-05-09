import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Customer Management App for a Clothing Store",
    description: "Improved data accessibility and store efficiency by 35% with intuitive UI and responsive design. Leveraged React Native, Redux, and RESTful APIs for seamless performance across devices"
  },
  {
    title: "Campaign Dashboard for a Marketing Client",
    description: "Designed and built a Next.js web application to store and display campaign data for a client, ensuring 100% uptime and faster data rendering."
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen bg-black text-gray-300 px-6 md:px-12 py-12 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold mb-4 border-b border-green-600 pb-2 text-green-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.9 + idx * 0.2 }}
        >
          <h3 className="text-xl font-semibold text-green-400">{project.title}</h3>
          <p>{project.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
