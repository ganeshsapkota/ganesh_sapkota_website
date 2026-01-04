import ganeshWaterfall from '../assets/ganesh_waterfall.jpg';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container about-grid">
        <div className="about-image">
          <div className="image-frame">
            <img src={ganeshWaterfall} alt="Ganesh Explore" />
          </div>
        </div>
        <div className="about-text">
          <h2 className="heading">About <span>Me</span></h2>
          <p className="lead">
            Visionary storyteller through the lens. Capturing life's most precious moments with a unique perspective.
          </p>
          <p>
            With years of experience in professional photography and videography, I focus on capturing the soul of every subject. Based on the philosophy that every frame tells a story, "Ganesh Sapkota" is more than a name—it's a journey into the extraordinary.
          </p>

        </div>
      </div>

      <style>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .image-frame {
          border: 2px solid var(--accent);
          padding: 1rem;
          position: relative;
        }

        .image-frame::after {
          content: '';
          position: absolute;
          top: 2rem;
          left: 2rem;
          width: 100%;
          height: 100%;
          border: 2px solid var(--accent-glow);
          z-index: -1;
        }

        .image-frame img {
          width: 100%;
          height: auto;
          display: block;
        }

        .lead {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .stats-grid {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
          border-top: 1px solid var(--accent);
        }

        .stat-num {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent);
          font-family: var(--font-heading);
        }

        .stat-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 1.5rem;
            align-items: start;
          }

          .image-frame {
            padding: 0.5rem;
            border-width: 1px;
          }
           
          .image-frame::after {
            top: 0.8rem;
            left: 0.8rem;
            border-width: 1px;
          }

          .heading {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .lead {
            font-size: 0.9rem;
            margin-bottom: 1rem;
            line-height: 1.4;
          }

          .about-text p {
            font-size: 0.8rem;
            margin-bottom: 1rem;
            line-height: 1.5;
          }

          .stats-grid {
            margin-top: 1.5rem;
            gap: 1rem;
          }

          .stat-num {
            font-size: 1.5rem;
          }

          .stat-label {
            font-size: 0.6rem;
          }
        }

      `}</style>
    </section>
  );
};

export default About;
