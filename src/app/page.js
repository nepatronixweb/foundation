"use client";
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION - Immersive & Premium */}
        <section className="hero">
          <div className="lotus-watermark">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="lotus-svg">
               <path fill="rgba(255,255,255,0.05)" d="M100,20 C100,20 120,60 140,70 C160,80 190,90 190,90 C190,90 160,110 150,130 C140,150 130,190 130,190 C130,190 100,160 100,160 C100,160 70,190 70,190 C70,190 60,150 50,130 C40,110 10,90 10,90 C10,90 40,80 60,70 C80,60 100,20 100,20 Z" />
             </svg>
          </div>
          
          <div className="container hero-content fade-in-section">
            <h1 className="hero-title">A Living<br/><span className="highlight">BuddhaField</span></h1>
            <p className="hero-subtitle">
              Transform your life through holistic spiritual growth, mindful living, 
              and collective harmony in the heart of Nepal.
            </p>
            <div className="hero-actions">
              <Link href="/programs" className="btn btn-primary">Explore Programs</Link>
              <Link href="/about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
          
          <div className="scroll-indicator">
            <div className="mouse"></div>
          </div>
        </section>

        {/* ENERGY FLOW STATS - Animated & Modern */}
        <section className="stats-section" ref={statsRef}>
          <div className="container">
             <div className="stats-grid">
               {[
                 { num: "2000+", label: "Lives Transformed", icon: "fa-user-friends" },
                 { num: "50+", label: "Programs Conducted", icon: "fa-calendar-alt" },
                 { num: "5", label: "Dimensions of Growth", icon: "fa-layer-group" },
                 { num: "15+", label: "Years of Service", icon: "fa-clock" }
               ].map((stat, i) => (
                 <div className="stat-card fade-in-section" key={i} style={{transitionDelay: `${i*100}ms`}}>
                   <div className="stat-icon-wrapper">
                     <i className={`fas ${stat.icon}`}></i>
                   </div>
                   <h3 className="stat-num">{stat.num}</h3>
                   <span className="stat-label">{stat.label}</span>
                   <div className="progress-ring">
                     <svg width="60" height="60">
                       <circle r="28" cx="30" cy="30" className="bg-ring" />
                       <circle r="28" cx="30" cy="30" className="progress" style={{strokeDashoffset: 50}} />
                     </svg>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 5 DIMENSIONS - Radial / Orbiting Layout */}
        <section className="dimensions-section">
          <div className="container">
            <div className="dimensions-header fade-in-section">
              <h2 className="section-title">5 Dimensions of <span className="text-primary">Pathik</span></h2>
              <p className="section-desc">A holistic ecosystem for complete human flourishing.</p>
            </div>
            
            <div className="orbit-container fade-in-section">
               <div className="core-lotus">
                 <i className="fas fa-spa"></i>
               </div>
               
               {[
                 { title: "Tribhujiya Shikshya", icon: "fa-book-open", deg: 0, color: "#FF6B6B" },
                 { title: "Integrated Health", icon: "fa-leaf", deg: 72, color: "#F47B20" },
                 { title: "Collective Living", icon: "fa-hands-helping", deg: 144, color: "#9B59B6" },
                 { title: "Life Management", icon: "fa-compass", deg: 216, color: "#F1C40F" },
                 { title: "Yog & Spirituality", icon: "fa-om", deg: 288, color: "#3498DB" }
               ].map((dim, i) => (
                 <div className="orbit-item" key={i} style={{'--deg': `${dim.deg}deg`, '--color': dim.color}}>
                   <div className="orbit-content">
                     <i className={`fas ${dim.icon} orbit-icon`}></i>
                     <h4>{dim.title}</h4>
                   </div>
                 </div>
               ))}
               
               <div className="orbit-ring"></div>
            </div>
          </div>
        </section>

        {/* PROGRAMS - Glassmorphism Cards */}
        <section className="programs-section">
          <div className="container">
            <div className="header-flex fade-in-section">
              <h2 className="section-title">Our Offerings</h2>
              <Link href="/programs" className="view-all">View All <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="programs-grid">
              {[
                { title: "Regular Packages", desc: "Weekly sessions for continuous growth.", color: "linear-gradient(135deg, #FF9E5E, #F47B20)" },
                { title: "Retreat Packages", desc: "Immersive getaways in nature.", color: "linear-gradient(135deg, #A8E6CF, #3A8A3E)" },
                { title: "Divine Healing", desc: "Ancient techniques for modern detox.", color: "linear-gradient(135deg, #D4A5A5, #FF6B6B)" },
                { title: "Corporate Wellness", desc: "Mindfulness for professional excellence.", color: "linear-gradient(135deg, #AED9E0, #3498DB)" },
              ].map((prog, i) => (
                <div className="program-card glass fade-in-section" key={i}>
                  <div className="card-accent" style={{background: prog.color}}></div>
                  <div className="card-content">
                    <h3>{prog.title}</h3>
                    <p>{prog.desc}</p>
                    <span className="card-link">Explore <i className="fas fa-chevron-right"></i></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* ABOUT SPLIT - Abstract & Clean */}
        <section className="about-split section">
          <div className="container">
            <div className="split-layout">
              <div className="split-visual fade-in-section">
                 <div className="visual-gradient"></div>
                 <div className="visual-image-placeholder">
                   <i className="fas fa-mountain"></i>
                 </div>
              </div>
              <div className="split-content fade-in-section">
                 <span className="overline">Who We Are</span>
                 <h2>Bridging Ancient Wisdom & Modern Science</h2>
                 <p>Pathik Foundation is a spiritual movement dedicated to awakening human consciousness. We provide a safe, inclusive environment for seekers of all ages.</p>
                 <ul className="modern-list">
                   <li>
                     <span className="check-icon"><i className="fas fa-check"></i></span>
                     <span>Holistic approach to wellness</span>
                   </li>
                   <li>
                     <span className="check-icon"><i className="fas fa-check"></i></span>
                     <span>Vedic & Buddhist foundations</span>
                   </li>
                   <li>
                     <span className="check-icon"><i className="fas fa-check"></i></span>
                     <span>Experienced facilitators</span>
                   </li>
                 </ul>
                 <Link href="/about" className="btn btn-outline" style={{borderColor: 'var(--primary)', color: 'var(--primary)', marginTop: '20px'}}>
                   Read Our Philosophy
                 </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS - Dark & Premium */}
        <section className="testimonials-dark section">
           <div className="container">
             <h2 className="section-title text-center text-white fade-in-section">Stories of Transformation</h2>
             <div className="testimonials-carousel fade-in-section">
               {/* Simplified single item for demo, ideally a slider */}
               <div className="testimonial-feature glass-dark">
                  <i className="fas fa-quote-right quote-mark"></i>
                  <p className="testimonial-text">
                    "I came here seeking peace, but I found my true self. The energy at Pathik Foundation is unlike anywhere else in the world."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">JD</div>
                    <div>
                      <h4>Jane Doe</h4>
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>
               </div>
             </div>
           </div>
        </section>

        {/* CTA - High Impact */}
        <section className="cta-final section">
          <div className="curve-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#FFFFFF"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#FFFFFF"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#FFFFFF"></path>
            </svg>
          </div>
          <div className="container">
            <h2 className="cta-heading fade-in-section">Begin Your Journey</h2>
            <p className="cta-sub fade-in-section">Join our next retreat and experience the BuddhaField.</p>
            <div className="cta-buttons-row fade-in-section">
               <Link href="/programs" className="btn btn-white-pulse">View All Programs</Link>
               <Link href="/contact" className="btn btn-glass">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        /* --- HERO --- */
        .hero {
          height: 100vh;
          background: var(--gradient-hero);
          display: flex;
          align-items: center;
          position: relative;
          color: white;
          overflow: hidden;
        }

        .lotus-watermark {
          position: absolute;
          right: -100px;
          top: 50%;
          transform: translateY(-50%) rotate(15deg);
          width: 800px;
          height: 800px;
          opacity: 0.6;
          pointer-events: none;
        }
        
        .lotus-svg {
          width: 100%;
          height: 100%;
          animation: spin-slow 120s linear infinite;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
        }

        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 25px;
          line-height: 1.1;
          letter-spacing: -2px;
          text-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .highlight {
          color: transparent;
          background: var(--gradient-saffron);
          -webkit-background-clip: text;
          text-shadow: none;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 40px;
          max-width: 600px;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.7;
        }
        
        .mouse {
          width: 26px;
          height: 42px;
          border: 2px solid white;
          border-radius: 20px;
          position: relative;
        }
        
        .mouse::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: float 2s infinite;
        }

        /* --- STATS --- */
        .stats-section {
          padding: 80px 0;
          background: white;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }
        .stat-card {
           text-align: center;
           padding: 20px;
           position: relative;
        }
        .stat-icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(58,138,62,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: var(--secondary);
          font-size: 1.5rem;
        }
        .stat-num {
          font-size: 2.5rem;
          color: var(--dark);
          margin-bottom: 5px;
        }
        .stat-label {
          color: var(--grey-muted);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        .progress-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-90deg);
          width: 140px;
          height: 140px;
          pointer-events: none;
          opacity: 0.1;
        }
        .progress-ring circle {
          fill: transparent;
          stroke-width: 4;
        }
        .bg-ring { stroke: #ddd; }
        .progress { stroke: var(--secondary); stroke-dasharray: 175; transition: stroke-dashoffset 1s ease-out; }

        /* --- DIMENSIONS --- */
        .dimensions-section {
          padding: 120px 0;
          background: var(--bg-cream);
          overflow: visible;
        }
        .dimensions-header { text-align: center; margin-bottom: 80px; }
        .section-title { font-size: 3rem; margin-bottom: 20px; color: var(--dark); }
        .section-desc { font-size: 1.2rem; color: var(--grey-muted); }
        .text-primary { color: var(--primary); }
        
        .orbit-container {
          position: relative;
          width: 600px;
          height: 600px;
          margin: 0 auto;
        }
        .core-lotus {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 120px; height: 120px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 50px rgba(58,138,62,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--secondary);
          z-index: 10;
        }
        .orbit-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 450px; height: 450px;
          border: 1px dashed rgba(0,0,0,0.1);
          border-radius: 50%;
        }
        .orbit-item {
          position: absolute;
          top: 50%; left: 50%;
          width: 280px; /* Reduced visual width for positioning */
          height: 0;
          transform: translate(-50%, -50%) rotate(var(--deg));
          transform-origin: center;
        }
        .orbit-content {
          position: absolute;
          right: -140px; /* Push out */
          top: -40px;
          width: 160px;
          height: 160px;
          transform: rotate(calc(var(--deg) * -1)); /* Counter rotate */
          background: white;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-bottom: 4px solid var(--color);
        }
        .orbit-content:hover {
          transform: rotate(calc(var(--deg) * -1)) scale(1.1);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          z-index: 5;
        }
        .orbit-icon {
          font-size: 2rem;
          color: var(--color);
          margin-bottom: 10px;
        }
        .orbit-content h4 {
          font-size: 0.9rem;
        }

        /* --- PROGRAMS --- */
        .programs-section {
          padding: 100px 0;
          background: white;
        }
        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
        }
        .view-all {
          color: var(--primary);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .program-card {
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: white;
          box-shadow: var(--shadow-sm);
        }
        .program-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md);
        }
        .card-accent {
          height: 60px;
          width: 100%;
        }
        .card-content {
          padding: 30px;
        }
        .card-content h3 { margin-bottom: 10px; font-size: 1.3rem; }
        .card-content p { color: var(--grey-muted); margin-bottom: 25px; font-size: 0.95rem; }
        .card-link {
          color: var(--dark);
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* --- ABOUT --- */
        .about-split {
          background-color: var(--bg-cream);
        }
        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .split-visual {
          position: relative;
          height: 500px;
        }
        .visual-gradient {
          position: absolute;
          top: 20px; left: 20px;
          width: 100%; height: 100%;
          background: var(--gradient-hero);
          border-radius: 30px;
          opacity: 0.1;
        }
        .visual-image-placeholder {
          position: relative;
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #e0e0e0, #f5f5f5);
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: #ccc;
          box-shadow: var(--shadow-md);
        }
        .overline {
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 15px;
        }
        .split-content h2 { font-size: 2.8rem; margin-bottom: 25px; }
        .split-content p { font-size: 1.1rem; color: #555; margin-bottom: 30px; }
        .modern-list { list-style: none; display: flex; flex-direction: column; gap: 15px; }
        .modern-list li { display: flex; align-items: center; gap: 15px; font-size: 1.05rem; font-weight: 600; color: var(--dark); }
        .check-icon {
          width: 24px; height: 24px;
          background: var(--secondary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
        }

        /* --- TESTIMONIALS --- */
        .testimonials-dark {
          background-color: var(--dark);
          padding-bottom: 140px;
        }
        .testimonial-feature {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 60px;
          border-radius: 20px;
        }
        .quote-mark { color: var(--primary); font-size: 3rem; margin-bottom: 30px; display: block; }
        .testimonial-text { color: white; font-size: 1.5rem; font-family: var(--font-heading); line-height: 1.5; margin-bottom: 40px; font-style: italic; }
        .author-avatar { width: 60px; height: 60px; border-radius: 50%; background: #555; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; color: white; }
        .testimonial-author h4 { color: white; margin-bottom: 5px; }
        .testimonial-author span { color: #888; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }

        /* --- CTA --- */
        .cta-final {
          background: var(--gradient-saffron);
          text-align: center;
          color: white;
          padding-top: 50px;
          margin-top: -100px; /* Overlap */
        }
        .curve-divider {
          position: absolute;
          top: -100px;
          left: 0;
          width: 100%;
          height: 100px;
          overflow: hidden;
          line-height: 0;
        }
        .curve-divider svg {
           position: relative;
           display: block;
           width: calc(100% + 1.3px);
           height: 100px;
        }
        .cta-heading { font-size: 3.5rem; margin-bottom: 20px; }
        .cta-sub { font-size: 1.3rem; margin-bottom: 40px; opacity: 0.9; }
        .cta-buttons-row { display: flex; justify-content: center; gap: 20px; }
        
        .btn-white-pulse {
          background: white;
          color: var(--primary);
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: bold;
          animation: pulse-glow 2s infinite;
        }
        .btn-glass {
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.4);
          color: white;
          padding: 16px 40px;
          border-radius: 50px;
          backdrop-filter: blur(5px);
        }

        /* Is Visible Class for Fade In */
        .is-visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 900px) {
          .hero-title { font-size: 3rem; }
          .orbit-container { width: 100%; height: auto; display: flex; flex-direction: column; gap: 20px; margin-top: 50px; }
          .core-lotus, .orbit-ring { display: none; }
          .orbit-item, .orbit-content { position: relative; width: 100%; height: auto; transform: none; right: auto; top: auto; flex-direction: row; justify-content: flex-start; text-align: left; gap: 20px; }
          .split-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}