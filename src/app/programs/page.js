"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

const programsData = [
  { id: 1, title: "Mindfulness Retreat", category: "Retreat", desc: "A 7-day immersive journey into silence and self-discovery.", color: "linear-gradient(135deg, #FF9E5E, #F47B20)" },
  { id: 2, title: "Weekly Yoga", category: "Weekly", desc: "Rejuvenate your body and mind every Saturday morning.", color: "linear-gradient(135deg, #A8E6CF, #3A8A3E)" },
  { id: 3, title: "Divine Healing", category: "Healing", desc: "Ancient energy healing techniques for modern ailments.", color: "linear-gradient(135deg, #D4A5A5, #FF6B6B)" },
  { id: 4, title: "Corporate Zen", category: "Corporate", desc: "Stress management workshops for high-performing teams.", color: "linear-gradient(135deg, #AED9E0, #3498DB)" },
  { id: 5, title: "Kids Meditation", category: "Weekly", desc: "Fun and engaging mindfulness practices for children.", color: "linear-gradient(135deg, #FAD390, #F39C12)" },
  { id: 6, title: "Vipassana Intro", category: "Retreat", desc: "An introduction to the technique of Vipassana.", color: "linear-gradient(135deg, #D2B4DE, #8E44AD)" },
];

const categories = ["All", "Weekly", "Retreat", "Healing", "Corporate"];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = programsData.filter(program => {
    const matchesCategory = activeCategory === "All" || program.category === activeCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          program.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="programs-page">
        {/* HERO with SEARCH & FILTER */}
        <section className="programs-hero">
          <div className="container">
            <h1 className="page-title">Explore Your <span className="highlight">Path</span></h1>
            <p className="page-subtitle">Discover programs designed to elevate your consciousness.</p>
            
            <div className="search-filter-container glass">
              <div className="search-box">
                <i className="fas fa-search search-icon"></i>
                <input 
                  type="text" 
                  placeholder="Find a program..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="filter-pills">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    className={`pill ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS GRID */}
        <section className="programs-list section">
          <div className="container">
            {filteredPrograms.length > 0 ? (
              <div className="programs-grid">
                {filteredPrograms.map((program) => (
                  <div className="program-card glass" key={program.id}>
                    <div className="card-header" style={{background: program.color}}>
                      <span className="category-badge">{program.category}</span>
                    </div>
                    <div className="card-body">
                      <h3>{program.title}</h3>
                      <p>{program.desc}</p>
                      <button className="btn-link">
                        View Details <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <p>No programs found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .programs-page {
          background-color: var(--bg-cream);
          min-height: 100vh;
        }
        .programs-hero {
          padding: 160px 0 60px;
          text-align: center;
          background: linear-gradient(to bottom, #fff, var(--bg-cream));
        }
        .page-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          color: var(--dark);
        }
        .highlight {
          color: var(--primary);
          position: relative;
          display: inline-block;
        }
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 10px;
          background: rgba(244,123,32,0.2);
          z-index: -1;
        }
        .page-subtitle {
          font-size: 1.2rem;
          color: var(--grey-muted);
          margin-bottom: 50px;
        }

        /* Search & Filter UI */
        .search-filter-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 30px;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
        }
        .search-box {
          position: relative;
          margin-bottom: 25px;
        }
        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--grey-muted);
        }
        .search-box input {
          width: 100%;
          padding: 15px 15px 15px 50px;
          border-radius: 50px;
          border: 1px solid rgba(0,0,0,0.1);
          font-size: 1rem;
          background: rgba(255,255,255,0.8);
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .search-box input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(244,123,32,0.1);
        }
        .filter-pills {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .pill {
          padding: 8px 20px;
          border-radius: 30px;
          border: 1px solid rgba(0,0,0,0.1);
          background: white;
          color: var(--grey-muted);
          cursor: pointer;
          transition: all 0.3s;
          font-family: var(--font-body);
          font-weight: 600;
        }
        .pill:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .pill.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 4px 10px rgba(244,123,32,0.3);
        }

        /* Programs Grid */
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 40px;
        }
        .program-card {
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          background: white;
        }
        .program-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md);
        }
        .card-header {
          height: 140px;
          position: relative;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }
        .category-badge {
          background: rgba(255,255,255,0.9);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--dark);
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .card-body {
          padding: 30px;
        }
        .card-body h3 {
          font-size: 1.4rem;
          margin-bottom: 10px;
          color: var(--dark);
        }
        .card-body p {
          color: var(--grey-muted);
          margin-bottom: 25px;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .btn-link {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          transition: gap 0.3s;
        }
        .btn-link:hover {
          gap: 12px;
        }
        .no-results {
          text-align: center;
          padding: 60px;
          color: var(--grey-muted);
        }
        .no-results i {
          font-size: 3rem;
          margin-bottom: 20px;
          opacity: 0.5;
        }

        @media(max-width: 768px) {
          .page-title { font-size: 2.5rem; }
          .search-filter-container { padding: 20px; }
        }
      `}</style>
    </>
  );
}