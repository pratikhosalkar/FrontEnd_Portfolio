import React from "react";
import { FaBriefcase } from "react-icons/fa";

const timelineData = [
  {
    company: "NeoSoft",
    title: "Software Engineer - FrontEnd",
    date: "April 2025 – Present",
    description:
      "Collaborated cross-functionally with backend, QA, and product teams to build real-time analytics components, reducing response latency by 30% using async API handling and optimized state management. Led the implementation of reusable component libraries and design systems, reducing UI inconsistencies and front-end development time by 40% across 3 major product lines.",
  },
  {
    company: "Accenture",
    title: "Custom Software Engineering Analyst",
    date: "September 2021 - February 2025",
    description:
      "Delivered a scalable CRM web app for a jewelry brand using React.js, Redux, and TypeScript, powering personalized features like wishlist tracking and customer history for 500+ daily active users. Improved app load speed by 40% in a React.js app by redesigning navigation flows and eliminating unnecessary re-renders, enhancing UX and retention on mobile platforms. Optimized integration of RESTful APIs, improving backend sync and reducing screen transition time by 20%, while maintaining consistent UI behavior across platforms. Reduced delivery timelines by 30% by coordinating with PMs and designers using Next.js, and maintaining alignment with sprints in a fully agile setup. Produced scalable design documentation and contributed to component architecture, achieving 98% on-time delivery and zero high-priority production bugs.",
  },
];

const MyExperience: React.FC = () => {
  return (
    <section className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-center h-32 mt-40 mb-20">
        {/* Background large text */}
        <h1 className="absolute text-[8rem] font-extrabold text-yellowGreen/20 select-none pointer-events-none tracking-widest">
          EXPERIENCE
        </h1>

        {/* Foreground smaller text */}
        <h2 className="text-4xl md:text-3xl font-extrabold text-white z-10 relative">
          EXPERIENCE
        </h2>
      </div>{" "}
      <div className="relative max-w-4xl mx-auto">
        {/* Central vertical line */}
        <div className="  absolute left-1/2 top-0 transform -translate-x-1/2 h-full border-l-2 border-yellowGreen"></div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`mb-10 flex flex-col md:flex-row ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } items-center w-full`}
            >
              {/* Card */}
              <div className={`bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md text-white ${
                isLeft ? "md:mr-" : "md:flex-row-reverse"
              }`}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-yellowGreen font-bold">{item.company}</p>
                <p className="text-sm text-white-600 mb-4">{item.date}</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-white mb-4">
                  {item.description.split(". ").map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point.trim()}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline circle */}
              <div className="flex justify-center w-full md:w-12 md:mx-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellowGreen shadow-lg -mt-5 md:mt-0">
                  <FaBriefcase className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyExperience;
