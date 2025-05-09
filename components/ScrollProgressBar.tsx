import React, { useEffect, useState } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '45%',
        right: 25,
        width: 7,
        height: 100,
        backgroundColor: '#d1d5db', // Tailwind gray-300 for grey background
        borderRadius: '5px',
        overflow: 'hidden',
        zIndex: 9999,
      }} 
    >
      <div
        style={{
          height: `${scrollProgress}%`,
          width: '100%',
          backgroundColor: 'rgb(119 240 12)', // Tailwind gray-500 for grey progress bar
          // transition: 'height 0.2s ease-out',
                  }}
      />
    </div>
  );
};

export default ScrollProgressBar;
