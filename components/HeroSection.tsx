import React, { useEffect } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import {
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const particlesOptions = {
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#00FF00",
    },
    links: {
      color: "#00FF00",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: "bounce",
      random: true,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

const MotionSection = motion.section as React.FC<HTMLMotionProps<"section">>;
const MotionDiv = motion.div as React.FC<HTMLMotionProps<"div">>;
const MotionH1 = motion.h1 as React.FC<HTMLMotionProps<"h1">>;
const MotionP = motion.p as React.FC<HTMLMotionProps<"p">>;
const MotionDivBounce = motion.div as React.FC<HTMLMotionProps<"div">>;

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Local side effects or animations can be handled here if needed
  }, []);

  const handleHireMeClick = () => {
    window.open("https://www.linkedin.com/in/codewithpratik", "_blank");
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center items-center px-6 md:px-12">
      <div className="relative h-screen w-full">
        {/* Title section centered on screen */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-14 text-center">
          {/* Title */}
          <div className="relative flex items-center justify-center h-32 mb-10">
            {/* Background large text */}
            <h1 className="absolute text-[8rem] font-extrabold text-yellowGreen/20 select-none pointer-events-none tracking-widest">
              FRONTEND
            </h1>

            {/* Foreground smaller text */}
            <span className="text-5xl md:text-6xl font-extrabold uppercase text-yellowGreen tracking-widest mr-5">
              FRONTEND
            </span>
            <span className="text-5xl md:text-6xl font-extrabold uppercase text-gray-300 tracking-widest">
              DEVELOPER
            </span>
          </div>

          {/* Intro */}

          <div className="max-w-xl text-gray-300 text-lg md:text-xl">
            Hi! I’m
            <span className="text-yellowGreen text-3xl animate-bounce">
              {" "}
              PRATIK HOSALKAR
            </span>
            . A creative Frontend Developer with 3.5+ years of experience in
            building high-performance, scalable, and responsive web solutions.
          </div>
          {/* Social and Download Icons */}
          <div className="flex flex-row items-center space-x-6 mt-4">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellowGreen transition duration-300 text-4xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellowGreen transition duration-300 text-4xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="/assets/FrontEndDeveloper-React_PratikHosalkar.pdf"
              download
              className="text-gray-300 hover:text-yellowGreen transition duration-300 text-4xl"
              aria-label="Download Portfolio"
            >
              <FaDownload />
            </a>
          </div>
          {/* Chevron Down Icon */}

          <div className="text-yellowGreen text-5xl animate-bounce">
            <FaChevronDown />
          </div>
        </div>

        {/* Right Info Cards Section */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-3">
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-lg p-4 w-25 flex flex-col items-center">
            <span className="text-3xl font-extrabold text-yellowGreen">
              3.5+
            </span>
            <span className="text-gray-300 mt-1">Years of Experience</span>
          </div>
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-lg p-4 w-25 flex flex-col items-center">
            <span className="text-3xl font-extrabold text-yellowGreen">4+</span>
            <span className="text-gray-300 mt-1">Completed Projects</span>
          </div>
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-lg p-4 w-25 flex flex-col items-center">
            <span className="text-3xl font-extrabold text-yellowGreen">
              10k+
            </span>
            <span className="text-gray-300 mt-1">Hours Worked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
