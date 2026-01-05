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
            I’m Ganesh Sapkota, a travel photographer and videographer who loves exploring new places and capturing real moments. Through my work, I highlight tourist destinations, local culture, heritage, and the natural beauty of each place. My goal is to share honest stories that inspire people to travel and experience the world differently.
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
          padding: 4rem 0; /* Add vertical spacing */
        }

        .about-image {
          max-width: 450px; /* Medium size on desktop */
          margin: 0 auto;   /* Center in grid cell */
          width: 100%;
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
            grid-template-columns: 1fr 1.5fr;
            gap: 1rem;
            align-items: center; /* Vertically center the photo relative to text */
            padding: 2rem 0;
          }

          .about-image {
            width: 100%;
            height: auto; 
            margin-top: 0; /* Reset margin for centering */
          }

          .image-frame {
            padding: 0.3rem;
            border-width: 1px;
            width: 100%;
          }
           
          .image-frame::after {
            top: 0.5rem;
            left: 0.5rem;
            border-width: 1px;
            height: 100%;
            width: 100%;
          }

          .image-frame img {
            height: auto;
            width: 100%;
            object-fit: contain; /* Show full image */
          }
          
          .heading {
            font-size: 1.5rem;
            margin-bottom: 1.5rem; /* Space after heading as requested */
            margin-top: 0;
            line-height: 1.1;
          }

          .lead {
            font-size: 0.85rem; /* More readable size */
            margin-bottom: 0.8rem;
            line-height: 1.4;
          }

          .about-text p {
            font-size: 0.8rem; /* readable size */
            margin-bottom: 1rem;
            line-height: 1.4;
          }

          .stats-grid {
            margin-top: 1rem;
            gap: 0.5rem;
          }
          
          .stat-num { font-size: 1.2rem; }
          .stat-label { font-size: 0.5rem; }
        }

      `}</style>
    </section>
  );
};

export default About;
