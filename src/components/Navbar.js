"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo Area */}
        <Link href="/" className="logo">
          <div className="logo-icon-wrapper">
             <i className="fas fa-spa logo-icon"></i>
          </div>
          <div className="logo-text">
            <span className="brand-name">PATHIK</span>
            <span className="brand-suffix">Foundation</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <Link href="/programs" className="cta-button">Join a Program</Link>
          <button 
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          <li onClick={() => setMobileMenuOpen(false)}><Link href="/">Home</Link></li>
          <li onClick={() => setMobileMenuOpen(false)}><Link href="/about">About Us</Link></li>
          <li onClick={() => setMobileMenuOpen(false)}><Link href="/programs">Programs</Link></li>
          <li onClick={() => setMobileMenuOpen(false)}><Link href="/gallery">Gallery</Link></li>
          <li onClick={() => setMobileMenuOpen(false)}><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 25px 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
        }

        .navbar.scrolled {
          padding: 15px 0;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 30px rgba(0,0,0,0.05);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-icon {
          font-size: 2rem;
          background: -webkit-linear-gradient(45deg, var(--primary), #ff9e5e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(244,123,32,0.2));
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: 1px;
        }
        
        .brand-suffix {
          font-size: 0.7rem;
          color: var(--secondary);
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 600;
        }

        /* Navigation */
        .desktop-nav { display: none; }
        
        @media (min-width: 900px) {
          .desktop-nav { display: block; }
          .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
          }
          .nav-links a {
            font-weight: 600;
            font-size: 0.95rem;
            color: var(--dark);
            position: relative;
            padding: 5px 0;
          }
          .nav-links a::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
          }
          .nav-links a:hover::after { width: 100%; }
        }

        /* CTA Button */
        .cta-button {
          padding: 12px 28px;
          background: var(--gradient-saffron);
          color: white;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 4px 15px rgba(244,123,32,0.3);
          transition: all 0.3s ease;
          display: none;
        }

        @media (min-width: 600px) {
          .cta-button { display: inline-block; }
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(244,123,32,0.5);
        }

        /* Mobile Toggle */
        .mobile-toggle {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1002;
        }

        @media (min-width: 900px) {
          .mobile-toggle { display: none; }
        }

        .bar {
          width: 25px;
          height: 2px;
          background: var(--dark);
          transition: all 0.3s ease;
        }

        .mobile-toggle.open .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
        .mobile-toggle.open .bar:nth-child(2) { opacity: 0; }
        .mobile-toggle.open .bar:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 248, 240, 0.98);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.77,0,0.175,1);
          z-index: 1001;
        }

        .mobile-menu.open { transform: translateY(0); }

        .mobile-links {
          list-style: none;
          text-align: center;
        }

        .mobile-links li { margin: 25px 0; opacity: 0; transform: translateY(20px); transition: all 0.3s ease 0.1s; }
        .mobile-menu.open .mobile-links li { opacity: 1; transform: translateY(0); }
        .mobile-menu.open li:nth-child(1) { transition-delay: 0.2s; }
        .mobile-menu.open li:nth-child(2) { transition-delay: 0.3s; }
        .mobile-menu.open li:nth-child(3) { transition-delay: 0.4s; }
        .mobile-menu.open li:nth-child(4) { transition-delay: 0.5s; }

        .mobile-links a {
          font-family: var(--font-heading);
          font-size: 2rem;
          color: var(--dark);
          font-weight: 700;
        }
      `}</style>
    </nav>
  );
}