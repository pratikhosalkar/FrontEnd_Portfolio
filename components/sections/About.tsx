import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollProgressBar from '../ScrollProgressBar';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black text-gray-300 px-6 md:px-12 py-12 overflow-hidden flex flex-col justify-center max-w-7xl mx-auto mb-20"
    >
      {/* Subtle star background */}
      <div className="absolute inset-0 pointer-events-none">
        <canvas
          id="starfield"
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>
      <div className="relative flex items-center justify-center h-32 mb-10">
        {/* Background large text */}
        <h1 className="absolute text-[8rem] font-extrabold text-yellowGreen/20 select-none pointer-events-none tracking-widest">
          ABOUT ME
        </h1>

        {/* Foreground smaller text */}
        <h2 className="text-4xl md:text-3xl font-extrabold text-white z-10 relative">
          ABOUT ME
        </h2>
      </div>

      {/* Vertical email on left side */}
      <div className="hidden md:flex fixed left-4 top-1/2 h-48 flex-col justify-center items-center z-10">
        <div className="transform -rotate-90 origin-left text-yellowGreen-400 tracking-widest select-none">
          pratikhosalkar@gmail.com
        </div>
      </div>
      <div className="hidden md:flex fixed right-4 top-1/2 h-48 flex-col justify-center items-center z-10">
        <ScrollProgressBar />
      </div>

      {/* Main content */}
      <div
        className="text-center max-w-4xl mx-auto mb-8"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-4xl font-sans font-light">
          I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
        </h1>
      </div>

      <div className="flex flex-col items-center mb-12">
        <span className="text-yellowGreen text-l uppercase tracking-widest mb-2" data-aos="fade-up" data-aos-delay="100">This is me.</span>
        <hr className="w-24 border-white-600" data-aos="fade-up" data-aos-delay="150" />
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        <div
          className="md:w-1/2 flex justify-center align-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="anime_person.webp"
            alt="Pratik Hosalkar"
            className="rounded-full border-4 border-yellowGreen w-60 h-60 object-cover"
          />
        </div>
        <div
          className="md:w-1/2 text-white-400 text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p>
            I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
          </p>
          <p className="mt-4">
            My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
