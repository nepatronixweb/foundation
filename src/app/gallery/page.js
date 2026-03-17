"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

const categories = ["All", "Workshops", "Retreats", "Meditation", "Community", "Events"];

// Sample data with varying aspect ratios for masonry effect
const galleryData = [
  { id: 1, title: "Morning Meditation", category: "Meditation", height: 400, img: "https://picsum.photos/600/800?random=1" },
  { id: 2, title: "Forest Retreat", category: "Retreats", height: 300, img: "https://picsum.photos/600/500?random=2" },
  { id: 3, title: "Community Gathering", category: "Community", height: 500, img: "https://picsum.photos/600/900?random=3" },
  { id: 4, title: "Yoga Workshop", category: "Workshops", height: 350, img: "https://picsum.photos/600/550?random=4" },
  { id: 5, title: "Silent Walk", category: "Meditation", height: 450, img: "https://picsum.photos/600/850?random=5" },
  { id: 6, title: "Sound Healing", category: "Events", height: 300, img: "https://picsum.photos/600/500?random=6" },
  { id: 7, title: "Group Session", category: "Workshops", height: 400, img: "https://picsum.photos/600/800?random=7" },
  { id: 8, title: "Nature Connection", category: "Retreats", height: 550, img: "https://picsum.photos/600/1000?random=8" },
  { id: 9, title: "Evening Satsang", category: "Community", height: 320, img: "https://picsum.photos/600/520?random=9" },
  { id: 10, title: "Advanced Asanas", category: "Workshops", height: 420, img: "https://picsum.photos/600/820?random=10" },
  { id: 11, title: "Mindful Eating", category: "Retreats", height: 280, img: "https://picsum.photos/600/480?random=11" },
  { id: 12, title: "Closing Ceremony", category: "Events", height: 380, img: "https://picsum.photos/600/780?random=12" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="gallery-page">
        {/* 1. HERO SECTION */}
        <section className="gallery-hero">
          <div className="hero-bg-parallax">
            <div className="lotus-overlay"></div>
          </div>
          <div className="hero-content text-center animate-up">
            <h1 className="hero-title">Moments of <span className="highlight">Transformation</span></h1>
            <p className="hero-subtitle">Witness the journey of stillness, growth, and connection.</p>
          </div>
        </section>


        {/* 2. FILTER BAR */}
        <section className="filter-section sticky-filters animate-up">
          <div className="container">
            <div className="filter-scroll">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MAIN MASONRY GALLERY */}
        <section className="main-gallery section">
          <div className="container">
            <div className="masonry-grid">
              {filteredImages.map((img, index) => (
                <div 
                  key={img.id} 
                  className="masonry-item animate-up" 
                  style={{animationDelay: `${index * 50}ms`}}
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="image-wrapper">
                    <img src={img.img} alt={img.title} style={{height: `${img.height}px`}} loading="lazy" />
                    <div className="hover-overlay">
                      <div className="overlay-content">
                        <i className="fas fa-spa"></i>
                        <h4>{img.title}</h4>
                        <span className="view-text">View</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredImages.length === 0 && (
              <div className="empty-state">No moments found in this category.</div>
            )}
          </div>
        </section>
      </main>

      {/* 4. LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="lightbox-image-container">
              <img src={selectedImage.img} alt={selectedImage.title} />
            </div>
            <div className="lightbox-details">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        /* Global & Animations */
        .gallery-page {
          background-color: var(--bg-cream);
          min-height: 100vh;
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

        /* 1. HERO SECTION */
        .gallery-hero {
          position: relative;
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(180deg, #0a200b 0%, #1a4a1c 100%);
          color: white;
        }
        .hero-bg-parallax {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.1;
        }
        .lotus-overlay {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(50px);
          animation: float 10s infinite ease-in-out;
        }
        .hero-content {
          z-index: 2;
          padding: 20px;
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
        }
        .highlight {
          color: transparent;
          background: var(--gradient-saffron);
          -webkit-background-clip: text;
        }
        .hero-subtitle {
          font-family: var(--font-body);
          font-size: 1.2rem;
          opacity: 0.8;
          font-weight: 300;
        }


        /* 2. FILTER BAR */
        .filter-section {
          padding: 20px 0;
          background: rgba(255, 248, 240, 0.9);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 70px; /* Below Navbar */
          z-index: 10;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .filter-scroll {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 5px;
          justify-content: center;
        }
        .filter-pill {
          padding: 10px 24px;
          border-radius: 50px;
          border: 1px solid rgba(0,0,0,0.1);
          background: white;
          color: var(--grey-muted);
          font-family: var(--font-body);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .filter-pill:hover {
          border-color: var(--secondary);
          color: var(--secondary);
        }
        .filter-pill.active {
          background: var(--gradient-saffron);
          color: white;
          border-color: transparent;
          box-shadow: 0 5px 15px rgba(244, 123, 32, 0.3);
        }

        /* 3. MASONRY GALLERY */
        .main-gallery {
          padding-top: 20px;
          padding-bottom: 80px;
        }
        .masonry-grid {
          column-count: 3;
          column-gap: 24px;
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 24px;
          cursor: pointer;
        }
        .image-wrapper {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #ddd; /* Skeleton bg */
        }
        .image-wrapper:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .hover-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.4);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--secondary); /* Saffron border on hover */
        }
        .image-wrapper:hover .hover-overlay {
          opacity: 1;
        }
        .overlay-content {
          text-align: center;
          color: white;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }
        .image-wrapper:hover .overlay-content {
          transform: translateY(0);
        }
        .overlay-content i { font-size: 2rem; margin-bottom: 10px; color: var(--secondary); }
        .overlay-content h4 { font-family: var(--font-heading); margin-bottom: 5px; font-size: 1.2rem; }
        .view-text { font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid white; padding-bottom: 2px; }

        /* 4. LIGHTBOX */
        .lightbox-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          width: auto;
          background: transparent;
        }
        .close-btn {
          position: absolute;
          top: -40px; right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          transition: color 0.3s;
        }
        .close-btn:hover { color: var(--secondary); }
        
        .lightbox-image-container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .lightbox-image-container img {
          max-width: 100%;
          max-height: 80vh;
          display: block;
        }
        .lightbox-details {
          margin-top: 15px;
          color: white;
          text-align: center;
        }
        .lightbox-details h3 { font-family: var(--font-heading); margin-bottom: 5px; }
        .lightbox-details p { color: #aaa; font-size: 0.9rem; }

        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .masonry-grid { column-count: 2; }
          .hero-title { font-size: 2.5rem; }
          .filter-scroll { justify-content: flex-start; }
        }
        @media (max-width: 600px) {
          .masonry-grid { column-count: 1; }
        }
      `}</style>
    </>
  );
}