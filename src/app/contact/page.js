"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="contact-page">
        {/* 1. HERO SECTION */}
        <section className="contact-hero">
          <div className="hero-bg-gradient"></div>
          <div className="floating-lotus">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="lotus-svg">
               <path fill="rgba(255,255,255,0.1)" d="M100,20 C100,20 120,60 140,70 C160,80 190,90 190,90 C190,90 160,110 150,130 C140,150 130,190 130,190 C130,190 100,160 100,160 C100,160 70,190 70,190 C70,190 60,150 50,130 C40,110 10,90 10,90 C10,90 40,80 60,70 C80,60 100,20 100,20 Z" />
            </svg>
          </div>
          <div className="hero-content text-center animate-up">
            <h1 className="hero-title">Connect with <span className="highlight">Us</span></h1>
            <p className="hero-subtitle">We’re here to guide your journey towards balance, growth, and inner peace.</p>
          </div>
        </section>

        {/* 2. CONTACT SPLIT SECTION */}
        <section className="contact-split section">
          <div className="container">
            <div className="split-grid">
              
              {/* LEFT: INFO PANEL */}
              <div className="info-panel glass-card animate-up">
                <div className="info-header">
                  <h3>Get in Touch</h3>
                  <p>Reach out to us for any inquiries about our programs, retreats, or community events.</p>
                </div>
                
                <div className="info-list">
                  <div className="info-item">
                    <div className="icon-circle"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="info-text">
                      <h4>Visit Us</h4>
                      <p>Pathik Foundation Ashram<br/>Shivapuri Height, Kathmandu, Nepal</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="icon-circle"><i className="fas fa-phone-alt"></i></div>
                    <div className="info-text">
                      <h4>Call Us</h4>
                      <p>+977-9841XXXXXX<br/>+977-01-4XXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="icon-circle"><i className="fas fa-envelope"></i></div>
                    <div className="info-text">
                      <h4>Email Us</h4>
                      <p>info@pathikfoundation.org</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="icon-circle"><i className="fas fa-clock"></i></div>
                    <div className="info-text">
                      <h4>Office Hours</h4>
                      <p>Sun - Fri: 9:00 AM - 5:00 PM<br/>Sat: Closed (Retreats Only)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: FORM */}
              <div className="form-panel glass-card-white animate-up" style={{animationDelay: '0.2s'}}>
                <h3>Send a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-grid">
                    <div className="input-group">
                      <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" " 
                      />
                      <label htmlFor="name">Full Name</label>
                    </div>

                    <div className="input-group">
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" " 
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="input-group">
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" " 
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>

                    <div className="input-group">
                      <select 
                        name="interest" 
                        id="interest" 
                        value={formData.interest}
                        onChange={handleChange}
                        className={formData.interest ? 'has-value' : ''}
                      >
                         <option value="" disabled></option>
                         <option value="General">General Inquiry</option>
                         <option value="Retreats">Retreat Packages</option>
                         <option value="Workshops">Workshops</option>
                         <option value="Volunteering">Volunteering</option>
                      </select>
                      <label htmlFor="interest" className="select-label">Interested In</label>
                    </div>
                  </div>

                  <div className="input-group">
                    <textarea 
                      name="message" 
                      id="message" 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" " 
                      rows="4"
                    ></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>

                  <button 
                    type="submit" 
                    className={`btn-submit ${formStatus}`}
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  >
                    {formStatus === 'submitting' ? (
                       <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                    ) : formStatus === 'success' ? (
                       <><i className="fas fa-check"></i> Message Sent</>
                    ) : (
                       'Send Message' 
                    )}
                  </button>
                  
                  {formStatus === 'success' && (
                    <p className="success-msg">Thank you for reaching out. We will connect with you shortly.</p>
                  )}
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* 4. MAP SECTION */}
        <section className="map-section animate-up">
           <div className="map-wrapper">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14120.73977334706!2d85.3240!3d27.7750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQ2JzMwLjAiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen="" 
               loading="lazy"
               title="Pathik Foundation Location"
             ></iframe>
             <div className="map-overlay-card glass">
                <h4>Find Us Here</h4>
                <p>Shivapuri Height, Kathmandu</p>
             </div>
           </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="cta-contact section text-center animate-up">
          <div className="container">
             <h2 className="cta-title">Begin Your Journey Today</h2>
             <p className="cta-text">Take the first step towards a life of balance and harmony.</p>
             <div className="cta-buttons">
               <a href="/programs" className="btn btn-primary">View Programs</a>
               <a href="https://wa.me/9779841XXXXXX" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                 <i className="fab fa-whatsapp"></i> WhatsApp Chat
               </a>
             </div>
          </div>
        </section>

      </main>
      <Footer />

      <style jsx>{`
        /* --- GLOBAL --- */
        .contact-page {
          background-color: var(--bg-cream);
          min-height: 100vh;
          overflow-x: hidden;
        }
        .animate-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .section { padding: 80px 0; }

        /* --- HERO --- */
        .contact-hero {
          position: relative;
          height: 45vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #FFF8F0 0%, #e8f5e9 100%);
          overflow: hidden;
        }
        .floating-lotus {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 600px;
          opacity: 0.4;
          animation: spin-slow 120s linear infinite;
        }
        .lotus-svg path { fill: var(--primary); opacity: 0.05; }
        .hero-content {
            text-align: center;
            position: relative;
            z-index: 2;
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          color: var(--dark);
          margin-bottom: 15px;
        }
        .highlight {
          color: transparent;
          background: var(--gradient-saffron);
          -webkit-background-clip: text;
        }
        .hero-subtitle {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--grey-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        /* --- SPLIT GRID --- */
        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          align-items: flex-start;
        }

        /* LEFT INFO PANEL */
        .glass-card {
          background: linear-gradient(135deg, rgba(26,74,28,0.9), rgba(10,32,11,0.95));
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 20px;
          color: white;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .info-header { margin-bottom: 40px; }
        .info-header h3 { font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 10px; color: var(--gradient-saffron); /* fallback */ background: var(--gradient-saffron); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}
        .info-header p { opacity: 0.8; font-size: 0.95rem; line-height: 1.6; }
        
        .info-list { display: flex; flex-direction: column; gap: 30px; }
        .info-item { display: flex; align-items: flex-start; gap: 20px; }
        .icon-circle {
          width: 50px; height: 50px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; color: var(--secondary);
          transition: all 0.3s ease;
        }
        .info-item:hover .icon-circle {
          background: var(--secondary);
          color: white;
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(244,123,32,0.4);
        }
        .info-text h4 { font-size: 1.1rem; margin-bottom: 5px; font-weight: 600; }
        .info-text p { font-size: 0.9rem; opacity: 0.8; line-height: 1.5; }

        /* RIGHT FORM PANEL */
        .glass-card-white {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
        }
        .glass-card-white h3 { font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 30px; color: var(--dark); }
        
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        
        /* Floating Labels */
        .input-group { position: relative; margin-bottom: 10px; }
        .input-group input, .input-group textarea, .input-group select {
          width: 100%;
          padding: 15px 15px 5px; /* Top padding for label space */
          border: 1px solid #ddd;
          border-radius: 12px;
          background: #f9f9f9;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          height: 56px; /* consistent height */
          font-family: var(--font-body);
        }
        .input-group textarea { height: 150px; resize: none; padding-top: 25px; }
        
        .input-group label {
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
          font-size: 0.95rem;
          color: #888;
          pointer-events: none;
          transition: all 0.2s ease;
        }
        .input-group textarea + label { top: 25px; transform: translateY(0); }
        .select-label { top: 50%; transform: translateY(-50%); }

        /* Float logic: placeholder shown trick does not work well with select, using JS class or focus */
        .input-group input:focus, .input-group textarea:focus, .input-group select:focus {
          border-color: var(--secondary);
          background: white;
          box-shadow: 0 0 0 4px rgba(244,123,32,0.1);
        }
        
        /* Floating logic: When input has value (placeholder placeholder=" " trick) or Focus */
        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label,
        .input-group textarea:focus + label,
        .input-group textarea:not(:placeholder-shown) + label {
          top: 8px;
          font-size: 0.75rem;
          color: var(--secondary);
          font-weight: 600;
          transform: translateY(0);
        }
        
        /* Select logic handled by JS class 'has-value' or focus */
        .input-group select:focus + label,
        .input-group select.has-value + label {
          top: 8px;
          font-size: 0.75rem;
          color: var(--secondary);
          font-weight: 600;
          transform: translateY(0);
        }

        .btn-submit {
          padding: 16px;
          border-radius: 50px;
          background: var(--gradient-saffron);
          color: white;
          font-weight: bold;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
          margin-top: 10px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(244,123,32,0.3);
        }
        .btn-submit.success { background: #3A8A3E; cursor: default; }
        .success-msg { color: #3A8A3E; text-align: center; margin-top: 10px; font-weight: 600; animation: fadeIn 0.5s ease; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* --- MAP --- */
        .map-section {
          height: 400px;
          margin: 40px 0;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .map-wrapper { width: 100%; height: 100%; filter: grayscale(30%); transition: filter 0.5s ease; position: relative; }
        .map-wrapper:hover { filter: grayscale(0%); }
        
        .map-overlay-card {
          position: absolute;
          bottom: 20px; left: 20px;
          background: white;
          padding: 15px 25px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-left: 4px solid var(--secondary);
        }
        .map-overlay-card h4 { margin: 0; font-size: 1rem; color: var(--dark); }
        .map-overlay-card p { margin: 0; font-size: 0.85rem; color: #666; }

        /* --- CTA --- */
        .cta-contact {
          background: white;
        }
        .cta-title { font-size: 2.5rem; margin-bottom: 10px; font-family: var(--font-heading); color: var(--dark); }
        .cta-text { font-size: 1.1rem; color: #666; margin-bottom: 30px; }
        .cta-buttons { display: flex; gap: 20px; justify-content: center; }
        .btn-outline-dark {
          border: 1px solid var(--dark);
          color: var(--dark);
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex; align-items: center; gap: 10px;
        }
        .btn-outline-dark:hover { background: var(--dark); color: white; }

        /* Responsive */
        @media (max-width: 900px) {
          .split-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.5rem; }
          .cta-buttons { flex-direction: column; }
        }
      `}</style>
    </>
  );
}