"use client";
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <style jsx>{`
        .progress-bar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          z-index: 2000;
          background: transparent;
        }
        .progress-bar {
          height: 100%;
          background: var(--primary);
          transform-origin: 0%;
          transition: transform 0.1s ease-out;
          box-shadow: 0 0 10px rgba(244, 123, 32, 0.7);
        }
      `}</style>
    </div>
  );
}