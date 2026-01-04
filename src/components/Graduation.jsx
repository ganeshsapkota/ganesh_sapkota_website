import React, { useState, useEffect, useRef } from 'react';
import gradFeature from '../assets/Graduation Main Feature.png';
import finalPhoto from '../assets/final_photo.jpg';

// Dynamically load the 44 graduation photos from assets
const momentImages = import.meta.glob('../assets/moment*.{jpg,JPG}', { eager: true, query: '?url' });

const graduationPhotos = Object.entries(momentImages)
  .map(([path, url]) => ({
    src: typeof url === 'string' ? url : (url.default || url),
    path: path
  }))
  .sort((a, b) => {
    const getNum = (p) => {
      // Logic to handle "moment 1.JPG" and "moment 8 (1).JPG"
      const match = p.match(/moment\s*(\d+)\s*(\((\d+)\))?/i);
      if (!match) return 0;
      const primary = parseInt(match[1]);
      const secondary = match[3] ? parseInt(match[3]) : 0;
      if (primary < 8) return primary;
      return 7 + secondary;
    };
    return getNum(a.path) - getNum(b.path);
  })
  .map((item, index) => ({
    id: index + 1,
    src: item.src,
    caption: `Moment ${index + 1}`
  }));

const Graduation = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const sectionRef = useRef(null);

  const navPhotos = [
    ...graduationPhotos,
    { id: 'final', src: finalPhoto, caption: "The Grand Finale" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImgIndex === null) return;

      if (e.key === 'ArrowRight') {
        if (selectedImgIndex < navPhotos.length - 1) {
          setSelectedImgIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (selectedImgIndex > 0) {
          setSelectedImgIndex(prev => prev - 1);
        }
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImgIndex, navPhotos.length]);

  const openModal = (index) => {
    setSelectedImgIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImgIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedImgIndex < navPhotos.length - 1) {
      setSelectedImgIndex((prev) => prev + 1);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedImgIndex > 0) {
      setSelectedImgIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <section id="graduation" className="graduation-section" ref={sectionRef}>
        {/* Background Particles/Sparkles */}
        <div className="celebration-bg">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>

        <div className="container relative-z">
          <div className="graduation-header">
            <h2 className="heading">The <span>Graduation</span></h2>
            <p className="subheading">Celebrating a Milestone of Success</p>
          </div>

          <div className="graduation-content">

            {/* Main Feature Photo - Clickable */}
            <div className="grad-hero-split">
              <div className="grad-main-photo">
                {/* New Year Celebration Effect */}
                <div className="celebration-bursts">
                  <div className="confetti" style={{ backgroundColor: '#f2d74e', left: '10%', animationDelay: '0s' }}></div>
                  <div className="confetti" style={{ backgroundColor: '#95c3de', left: '30%', animationDelay: '0.4s' }}></div>
                  <div className="confetti" style={{ backgroundColor: '#ff9a91', left: '50%', animationDelay: '0.2s' }}></div>
                  <div className="confetti" style={{ backgroundColor: '#f2d74e', left: '70%', animationDelay: '0.6s' }}></div>
                  <div className="confetti" style={{ backgroundColor: '#a8e6cf', left: '90%', animationDelay: '0.1s' }}></div>

                  <div className="burst"></div>
                  <div className="burst delay-1"></div>
                  <div className="burst delay-2"></div>

                  <div className="celebration-glow"></div>
                </div>

                <img
                  src={gradFeature}
                  alt="Graduation Main Feature"
                  loading="lazy"
                />
                <div className="photo-frame-accent"></div>
              </div>

              <div className="grad-text-content">
                <h3>Degrees & Dreams</h3>
                <div className="divider-line"></div>
                <p>
                  This isn't just a ceremony; it's the crowning moment of years of dedication.
                  We laughed, we stressed, we studied, and we conquered.
                  This achievement is as much mine as it is for my <strong>Mom & Dad</strong>,
                  whose endless support and love made this dream possible.
                </p>
                <p>
                  Here is a glimpse into the joy of our graduation day—moments etched in time,
                  reminding us of our hard work and the dreams that lie ahead,
                  dedicated to the pillars of my life.
                </p>
              </div>
            </div>

            {/* Photo Collection Description */}
            <div className="collection-header">
              <h3>Memories Captured</h3>
              <p>A collection of unforgotten moments from the big day, celebrating every smile and achievement.</p>
            </div>

            {/* Photos Grid */}
            <div className="grad-grid">
              {graduationPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="grad-card"
                  style={{ animationDelay: `${(index % 12) * 0.1}s` }}
                >
                  <div className="grad-image-wrapper" onClick={() => openModal(index)}>
                    <img src={photo.src} alt={photo.caption} loading="lazy" />
                    <div className="grad-overlay">
                      <span>{photo.caption}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Final Photo Reveal */}
            <div className="grad-final-reveal" onClick={() => openModal(navPhotos.length - 1)}>
              <div className="final-glow-effect"></div>
              <div className="final-frame">
                <img src={finalPhoto} alt="Graduation Finale" loading="lazy" />
                <div className="final-text">
                  <h4>Final Chapter</h4>
                  <p>One journey ends, another begins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
        .graduation-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #050505 0%, #1a1005 100%);
          color: white;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease, transform 1s ease;
          position: relative;
          overflow: hidden;
        }

        .graduation-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        /* Celebration Background */
        .celebration-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          bottom: -10px;
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          opacity: 0;
          animation: floatUp linear infinite;
        }

        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        .graduation-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        /* Split Hero Layout */
        .grad-hero-split {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 5rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.1);
        }

        .grad-main-photo {
          flex: 0 0 auto;
          position: relative;
          max-width: 280px;
          border-radius: 12px;
          overflow: visible;
          cursor: pointer;
        }

        /* Celebration Effect Styles (New Year Style) */
        .celebration-bursts {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .confetti {
          position: absolute;
          top: -10px;
          width: 8px;
          height: 12px;
          border-radius: 2px;
          animation: confettiFall 3s infinite linear;
          opacity: 0.8;
        }

        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(500px) rotate(720deg); opacity: 0; }
        }

        .burst {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background: var(--accent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 40px 10px var(--accent), 0 0 80px 20px rgba(212,175,55,0.4);
          animation: fireworkBurst 2s infinite ease-out;
          opacity: 0;
        }

        .burst.delay-1 { animation-delay: 0.7s; left: 20%; top: 30%; }
        .burst.delay-2 { animation-delay: 1.3s; left: 80%; top: 70%; }

        @keyframes fireworkBurst {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          50% { opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }

        .celebration-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
          animation: pulseGlow 3s infinite alternate;
        }

        @keyframes pulseGlow {
          from { opacity: 0.3; transform: scale(1); }
          to { opacity: 0.6; transform: scale(1.1); }
        }

        .grad-main-photo img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
          position: relative;
          z-index: 3; /* Above celebration effects */
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: transform 0.5s ease;
        }
        
        .grad-main-photo:hover img {
          transform: scale(1.02);
        }

        .photo-frame-accent {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--accent);
          border-radius: 12px;
          z-index: 2; /* Between image and celebration */
          opacity: 0.5;
        }

        .grad-text-content {
          flex: 1;
          text-align: left;
        }

        .grad-text-content h3 {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--accent);
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }

        .divider-line {
          width: 80px;
          height: 3px;
          background: var(--accent);
          margin: 1rem 0 1.5rem 0;
        }

        .grad-text-content p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        /* Grid Layout - 4 Columns for Desktop */
        .grad-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .collection-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .collection-header h3 {
           font-family: var(--font-heading);
           color: var(--accent);
           font-size: 1.8rem;
           margin-bottom: 0.5rem;
        }

        .collection-header p {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .grad-card {
          position: relative;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .grad-image-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 1/1;
          cursor: pointer;
        }

        .grad-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .grad-image-wrapper:hover img {
          transform: scale(1.1);
        }

        .grad-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 0.8rem;
          background: rgba(0,0,0,0.7);
          color: var(--accent);
          transform: translateY(100%);
          transition: transform 0.3s ease;
          text-align: center;
          font-family: var(--font-heading);
        }

        .grad-image-wrapper:hover .grad-overlay {
          transform: translateY(0);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
           .grad-grid {
             grid-template-columns: repeat(3, 1fr);
             gap: 1.2rem;
           }
        }

        @media (max-width: 900px) {
          .grad-hero-split {
            flex-direction: column; /* Stack on mobile/tablet */
            gap: 2rem;
            text-align: center;
            padding: 1.5rem;
          }

          .grad-main-photo {
            max-width: 100%;
            width: 100%;
          }
          
          .photo-frame-accent {
            left: 10px;
            top: 10px;
          }

          .grad-text-content {
            text-align: center;
          }

          .divider-line {
            margin: 1rem auto; /* Center divider */
          }

          .grad-grid {
             grid-template-columns: repeat(2, 1fr);
             gap: 1rem;
          }
        }

        @media (max-width: 600px) {
           .grad-text-content h3 {
            font-size: 2rem;
          }

          .grad-main-photo {
            max-width: 200px; /* Smaller feature photo on mobile */
            margin: 0 auto;
          }

          .grad-grid {
             grid-template-columns: repeat(2, 1fr); /* 2 photos per row on mobile for better visibility with 44 photos */
             gap: 0.8rem;
          }
          
          .grad-image-wrapper {
             border-radius: 8px;
          }

          .grad-overlay span {
             font-size: 0.8rem;
          }
        }

        /* Modal / Lightbox Styles */
        .grad-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeInModal 0.3s ease;
        }

        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          max-width: 90%;
          max-height: 85vh;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-content img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border: 1px solid var(--accent);
          box-shadow: 0 0 50px rgba(212, 175, 55, 0.2);
          border-radius: 4px;
        }

        .modal-info {
           margin-top: 1rem;
           text-align: center;
        }

        .modal-info h3 {
           color: var(--accent);
           font-family: var(--font-heading);
           letter-spacing: 2px;
        }

        .modal-info p {
          color: var(--text-secondary);
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }

        .modal-close {
          position: absolute;
          top: 30px;
          right: 30px;
          background: none;
          border: none;
          color: white;
          font-size: 3rem;
          cursor: pointer;
          transition: 0.3s;
          z-index: 10001;
        }

        .modal-close:hover {
          color: var(--accent);
          transform: rotate(90deg);
        }

        .modal-nav {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          z-index: 10001;
        }

        .modal-nav:hover {
          background: var(--accent);
          color: black;
          border-color: var(--accent);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }

        .modal-nav.prev {
          left: 40px;
        }

        .modal-nav.next {
          right: 40px;
        }

        .modal-counter {
          color: var(--text-secondary);
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .modal-nav {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
            background: rgba(0,0,0,0.8); /* Maximum visibility on mobile */
          }

          .modal-nav.prev { left: 10px; }
          .modal-nav.next { right: 10px; }
          
          .modal-close {
            top: 20px;
            right: 20px;
            font-size: 2.5rem;
          }
          
          .grad-modal {
            padding: 1rem;
          }
        }

        /* Final Photo Reveal Styles */
        .grad-final-reveal {
           margin-top: 4rem;
           display: flex;
           justify-content: center;
           position: relative;
           cursor: pointer;
           perspective: 1000px;
        }

        .final-frame {
           position: relative;
           max-width: 480px;
           width: 100%;
           border-radius: 20px;
           overflow: hidden;
           border: 4px solid var(--accent);
           box-shadow: 0 0 40px rgba(212, 175, 55, 0.4);
           transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
           z-index: 2;
        }

        .grad-final-reveal:hover .final-frame {
           transform: scale(1.05) rotateX(5deg);
        }

        .final-frame img {
           width: 100%;
           height: auto;
           display: block;
        }

        .final-text {
           position: absolute;
           bottom: 0;
           left: 0;
           width: 100%;
           padding: 2rem;
           background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
           text-align: center;
        }

        .final-text h4 {
           font-family: var(--font-heading);
           color: var(--accent);
           font-size: 2rem;
           margin-bottom: 0.5rem;
           text-transform: uppercase;
           letter-spacing: 4px;
        }

        .final-text p {
           color: white;
           font-style: italic;
           opacity: 0.8;
        }

        .final-glow-effect {
           position: absolute;
           top: 50%;
           left: 50%;
           width: 120%;
           height: 120%;
           background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
           transform: translate(-50%, -50%);
           z-index: 1;
           animation: breathe 4s infinite ease-in-out;
        }

        @keyframes breathe {
           0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
           50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.2); }
        }

        @media (max-width: 768px) {
           .grad-final-reveal {
              margin-top: 4rem;
              padding: 0 1rem;
           }
           .final-text h4 {
              font-size: 1.5rem;
           }
        }
      `}</style>
      </section>

      {/* Full View Lightbox Modal - Completely Outside to avoid stacking context issues */}
      {selectedImgIndex !== null && (
        <div className="grad-modal" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>&times;</button>

          {selectedImgIndex > 0 && (
            <button className="modal-nav prev" onClick={prevImage}>&#10094;</button>
          )}

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={navPhotos[selectedImgIndex].src}
              alt="Full Size"
            />
            <div className="modal-info">
              <h3>{navPhotos[selectedImgIndex].caption}</h3>
              <p className="modal-counter">{selectedImgIndex + 1} / {navPhotos.length}</p>
            </div>
          </div>

          {selectedImgIndex < navPhotos.length - 1 && (
            <button className="modal-nav next" onClick={nextImage}>&#10095;</button>
          )}
        </div>
      )}
    </>
  );
};

export default Graduation;
