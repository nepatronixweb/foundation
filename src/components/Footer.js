"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-top-border"></div>
      
      <div className="container">
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <i className="fas fa-spa logo-icon"></i>
              <span className="brand-text">PATHIK<span className="scent">Foundation</span></span>
            </Link>
            <p className="footer-mission">
              A Living BuddhaField dedicated to holistic transformation through meditation, 
              yoga, and conscious living. Bridging ancient wisdom with modern science.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <div className="nav-col">
              <h4>Explore</h4>
              <ul>
                <li><Link href="/about">Our Story</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/publications">Books & Articles</Link></li>
              </ul>
            </div>
            
            <div className="nav-col">
              <h4>Community</h4>
              <ul>
                <li><Link href="/events">Upcoming Events</Link></li>
                <li><Link href="/volunteer">Volunteer</Link></li>
                <li><Link href="/donate">Support Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Visit Us</h4>
            <address>
              <p><i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal</p>
              <p><i className="fas fa-phone-alt"></i> +977-1234567890</p>
              <p><i className="fas fa-envelope"></i> info@pathikfoundation.org</p>
            </address>
            
            <div className="newsletter">
              <h5>Stay Connected</h5>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Pathik Foundation. All rights reserved.</p>
          <div className="legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: var(--dark);
          color: rgba(255,255,255,0.8);
          padding-top: 80px;
          position: relative;
          overflow: hidden;
        }

        .footer-top-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--gradient-saffron);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 2fr 1.5fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        /* --- BRAND --- */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
          color: white;
          text-decoration: none;
        }
        .logo-icon {
          font-size: 2rem;
          color: var(--secondary);
        }
        .brand-text {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1;
        }
        .scent {
          display: block;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 2px;
          color: var(--primary);
          text-transform: uppercase;
        }
        .footer-mission {
          line-height: 1.6;
          margin-bottom: 30px;
          font-size: 0.95rem;
        }
        .social-links {
          display: flex;
          gap: 15px;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .social-icon:hover {
          background: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(244,123,32,0.4);
        }

        /* --- NAV --- */
        .footer-nav {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .nav-col h4, .footer-contact h4 {
          color: white;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          margin-bottom: 25px;
          position: relative;
          display: inline-block;
        }
        
        .nav-col h4::after, .footer-contact h4::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--secondary);
        }

        .nav-col ul {
          list-style: none;
          padding: 0;
        }
        .nav-col li {
          margin-bottom: 15px;
        }
        .nav-col a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.3s, padding-left 0.3s;
          display: inline-block;
        }
        .nav-col a:hover {
          color: var(--primary);
          padding-left: 5px;
        }

        /* --- CONTACT --- */
        .footer-contact address {
          font-style: normal;
          margin-bottom: 30px;
        }
        .footer-contact p {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          font-size: 0.95rem;
        }
        .footer-contact i {
          color: var(--secondary);
          width: 20px;
          text-align: center;
        }

        .newsletter h5 {
          color: white;
          margin-bottom: 15px;
          font-size: 0.95rem;
        }
        .newsletter-form {
          display: flex;
          background: rgba(255,255,255,0.05);
          border-radius: 30px;
          padding: 5px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .newsletter-form input {
          background: transparent;
          border: none;
          color: white;
          padding: 10px 15px;
          flex-grow: 1;
          font-size: 0.9rem;
          outline: none;
        }
        .newsletter-form button {
          background: var(--secondary);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: background 0.3s;
        }
        .newsletter-form button:hover {
          background: var(--primary);
        }

        /* --- BOTTOM --- */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 30px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
        }
        .legal-links {
          display: flex;
          gap: 20px;
        }
        .legal-links a {
          color: rgba(255,255,255,0.5);
          transition: color 0.3s;
        }
        .legal-links a:hover {
          color: white;
        }

        @media (max-width: 900px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}