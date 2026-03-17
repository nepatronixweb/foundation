"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Testimonials() {
  return (
    <>
      <Navbar />
      <main className="testimonials-page">
        {/* HERO */}
        <section className="testimonials-hero">
          <div className="container">
            <h1 className="hero-title">Voices of <span className="highlight">Transformation</span></h1>
            <p className="hero-subtitle">Real stories from real people who have walked the path.</p>
          </div>
        </section>

        {/* FEATURED STORY */}
        <section className="featured-story section">
          <div className="container">
            <div className="featured-card glass">
              <div className="featured-img-wrapper">
                 <div className="featured-placeholder">
                   <i className="fas fa-quote-left"></i>
                 </div>
              </div>
              <div className="featured-content">
                <div className="star-rating">
                  {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star filled"></i>)}
                </div>
                <h2>"A Rebirth of the Soul"</h2>
                <p className="quote-text">
                  "I came to Pathik Foundation broken and lost. The 7-day retreat wasn't just a program; 
                  it was a complete reset of my nervous system and a rediscovery of my inner joy. 
                  The facilitators hold space with such grace and wisdom."
                </p>
                <div className="author-details">
                  <h4>Sarah Mitchell</h4>
                  <span>Yoga Teacher, USA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS GRID */}
        <section className="stories-grid-section section">
          <div className="container">
            <div className="stories-grid">
              {[
                { name: "Rahul S.", role: "Entrepreneur", text: "The corporate mindfulness session gave my team tools we use daily. Productivity is up, stress is down." },
                { name: "Anita G.", role: "Student", text: "Finally found a place that explains spirituality logically without dogma. Truly eye-opening." },
                { name: "James K.", role: "Traveler", text: "The energy in the ashram is palpable. You feel lighter just stepping through the gates." },
                { name: "Priya M.", role: "Homemaker", text: "My health issues have significantly improved since starting the holistic healing regimen." },
                { name: "David L.", role: "Artist", text: "The creative flow I tapped into during the silence retreat is unlike anything I've experienced." },
                { name: "Sita R.", role: "Doctor", text: "As a medical professional, I appreciate their scientific approach to ancient wisdom." },
              ].map((story, i) => (
                <div className="story-card glass" key={i}>
                  <div className="card-top">
                    <div className="avatar-circle">{story.name.charAt(0)}</div>
                    <div className="rating-mini">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <p>"{story.text}"</p>
                  <div className="story-author">
                    <h5>{story.name}</h5>
                    <small>{story.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .testimonials-page {
          background-color: var(--bg-cream);
          min-height: 100vh;
        }
        .testimonials-hero {
          padding: 160px 0 60px;
          text-align: center;
          background: linear-gradient(to bottom, #fff, var(--bg-cream));
        }
        .hero-title { font-size: 3.5rem; margin-bottom: 20px; color: var(--dark); }
        .highlight { color: var(--primary); }
        .hero-subtitle { font-size: 1.2rem; color: var(--grey-muted); }

        /* FEATURED */
        .featured-story { padding-bottom: 50px; }
        .featured-card {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          border-radius: 30px;
          overflow: hidden;
          background: white;
          box-shadow: var(--shadow-lg); /* Assuming shadow-lg exists or fallback */
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .featured-img-wrapper {
          background: var(--gradient-hero);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
        }
        .featured-placeholder {
          font-size: 5rem;
          color: rgba(255,255,255,0.2);
        }
        .featured-content { padding: 60px; display: flex; flex-direction: column; justify-content: center; }
        .star-rating { color: #f1c40f; margin-bottom: 20px; font-size: 1.2rem; }
        .featured-content h2 { font-size: 2rem; margin-bottom: 20px; color: var(--dark); }
        .quote-text {
          font-size: 1.1rem; line-height: 1.8; color: #555;
          font-style: italic; margin-bottom: 30px;
        }
        .author-details h4 { color: var(--primary); margin-bottom: 5px; }
        .author-details span { color: #999; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }

        /* GRID */
        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        .story-card {
          padding: 30px;
          border-radius: 20px;
          transition: transform 0.3s;
          background: white;
        }
        .story-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
        .card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .avatar-circle {
          width: 50px; height: 50px;
          background: var(--gradient-saffron);
          color: white; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 1.2rem;
        }
        .rating-mini { color: #f1c40f; font-size: 0.8rem; }
        .story-card p { line-height: 1.6; color: #666; margin-bottom: 20px; font-style: italic; }
        .story-author h5 { color: var(--dark); margin-bottom: 2px; }
        .story-author small { color: var(--grey-muted); font-size: 0.85rem; }

        @media(max-width: 900px) {
          .featured-card { grid-template-columns: 1fr; }
          .featured-img-wrapper { min-height: 200px; }
          .featured-content { padding: 40px; }
          .hero-title { font-size: 2.5rem; }
        }
      `}</style>
    </>
  );
}