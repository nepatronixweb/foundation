"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useEffect, useRef } from 'react';

export default function About() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-content animate-on-scroll">
              <div className="lotus-icon"><i className="fas fa-spa"></i></div>
              <h1 className="hero-title">Our Story & <span className="text-primary">Philosophy</span></h1>
              <p className="hero-subtitle">
                From a humble beginning to a global movement, the Pathik Foundation has been a sanctuary for seekers, 
                blending ancient Vedic wisdom with modern scientific understanding.
              </p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="timeline-section">
          <div className="container">
            <h2 className="section-title text-center animate-on-scroll">The Journey</h2>
            <div className="timeline-wrapper animate-on-scroll" ref={timelineRef}>
              <div className="timeline-line"></div>
              {[
                { year: "2008", title: "Inception", desc: "Started as a small meditation circle in Kathmandu." },
                { year: "2012", title: "First Ashram", desc: "Established the first residential center." },
                { year: "2015", title: "Global Reach", desc: "Launched online programs reaching 20+ countries." },
                { year: "2020", title: "Digital Sanctuary", desc: "Created the virtual 'BuddhaField' during the pandemic." },
                { year: "2025", title: "New Horizons", desc: "Expanding into holistic eco-villages." }
              ].map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="philosophy-section">
          <div className="container">
            <h2 className="section-title text-center animate-on-scroll">Our Core Values</h2>
            <div className="philosophy-grid">
              {[
                { icon: "fa-om", title: "Spiritual Integrity", desc: "Authenticity in practice and teaching." },
                { icon: "fa-heart", title: "Compassion", desc: "Serving with an open heart." },
                { icon: "fa-leaf", title: "Sustainability", desc: "Living in harmony with nature." },
                { icon: "fa-users", title: "Community", desc: "Growing together in a supportive sangha." },
                { icon: "fa-lightbulb", title: "Wisdom", desc: "Continuous learning and self-inquiry." }
              ].map((val, i) => (
                <div className="philosophy-card glass animate-on-scroll" key={i} style={{transitionDelay: `${i*100}ms`}}>
                  <div className="icon-wrapper">
                    <i className={`fas ${val.icon}`}></i>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITATORS */}
        <section className="team-section">
           <div className="container">
             <h2 className="section-title text-center animate-on-scroll">Guiding Lights</h2>
             <div className="team-grid">
               {[
                 { name: "Swami Pathik", role: "Founder & Spiritual Guide", icon: "fa-user-tie" },
                 { name: "Ma Prem", role: "Yoga Acharya", icon: "fa-spa" },
                 { name: "Dr. Sharma", role: "Holistic Healer", icon: "fa-user-md" },
               ].map((member, i) => (
                 <div className="team-member animate-on-scroll" key={i}>
                   <div className="member-img-wrapper">
                     <div className="member-placeholder">
                       <i className={`fas ${member.icon}`}></i>
                     </div>
                     <div className="member-overlay">
                       <span>Read Bio</span>
                     </div>
                   </div>
                   <h3>{member.name}</h3>
                   <span className="role">{member.role}</span>
                 </div>
               ))}
             </div>
           </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        /* --- HERO --- */
        .about-hero {
          background-color: var(--bg-cream);
          padding: 160px 0 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .lotus-icon { font-size: 4rem; color: var(--secondary); margin-bottom: 20px; animation: float 4s ease-in-out infinite; }
        .hero-title { font-size: 3.5rem; margin-bottom: 20px; color: var(--dark); }
        .text-primary { color: var(--primary); }
        .hero-subtitle { max-width: 700px; margin: 0 auto; font-size: 1.2rem; color: var(--grey-muted); }

        /* --- TIMELINE --- */
        .timeline-section { padding: 80px 0; background: white; overflow: hidden; }
        .timeline-wrapper {
          display: flex;
          justify-content: space-between; /* Distribute items */
          padding: 60px 20px;
          position: relative;
          overflow-x: auto; /* Allow scroll on small screens */
          scrollbar-width: thin;
        }
        .timeline-line {
          position: absolute;
          top: 74px; /* Align with dots center usually roughly 15px down + offset */
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--gradient-saffron);
          z-index: 0;
          opacity: 0.5;
        }
        .timeline-item {
          position: relative;
          z-index: 1;
          flex: 0 0 200px; /* Fixed width for consistent items */
          text-align: center;
          padding: 0 10px;
        }
        .timeline-dot {
          width: 30px;
          height: 30px;
          background: var(--primary);
          border: 4px solid white;
          border-radius: 50%;
          margin: 0 auto 30px;
          box-shadow: 0 0 0 2px rgba(244,123,32,0.2);
          transition: transform 0.3s;
          position: relative;
          z-index: 2;
        }
        .timeline-item:hover .timeline-dot { transform: scale(1.3); background: var(--secondary); }
        .year { display: block; font-weight: 700; color: var(--primary); margin-bottom: 10px; font-family: var(--font-heading); font-size: 1.5rem; }
        .timeline-content h3 { font-size: 1.1rem; margin-bottom: 10px; }
        .timeline-content p { font-size: 0.9rem; color: var(--grey-muted); }

        /* --- PHILOSOPHY --- */
        .philosophy-section { padding: 100px 0; background: var(--bg-cream); }
        .philosophy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 60px; }
        .philosophy-card { padding: 40px 30px; text-align: center; border-radius: 20px; transition: transform 0.3s; }
        .philosophy-card:hover { transform: translateY(-10px); }
        .icon-wrapper { width: 70px; height: 70px; background: rgba(58,138,62,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--secondary); margin: 0 auto 20px; }
        
        /* --- TEAM --- */
        .team-section { padding: 100px 0; background: white; }
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-top: 60px; }
        .team-member { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .member-img-wrapper {
          width: 180px; height: 180px;
          margin-bottom: 25px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-md);
        }
        .member-placeholder { width: 100%; height: 100%; background: #f0f0f0; display: flex; align-items: center; justify-content: center; font-size: 4rem; color: #ccc; }
        .member-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(58,138,62,0.8); display: flex; align-items: center; justify-content: center; color: white; opacity: 0; transition: opacity 0.3s; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; }
        .member-img-wrapper:hover .member-overlay { opacity: 1; }
        .team-member h3 { font-size: 1.4rem; margin-bottom: 5px; }
        .role { color: var(--primary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }

        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s; }
        .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
        
        @media (max-width: 768px) {
          .timeline-wrapper { align-items: flex-start; }
        }
      `}</style>
    </>
  );
}