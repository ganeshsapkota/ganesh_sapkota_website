import React, { useEffect, useState, useRef } from 'react';
import heroLensImg from '../assets/hero_photo.png';


const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [flashActive, setFlashActive] = useState(false);
  const canvasRef = useRef(null);

  const heroRef = useRef(null);
  const particles = useRef([]);


  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoaded(true), 500);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);


    // Canvas animation logic
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor(x, y, color, velocity, size = 1.5, decay = 0.01) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
        this.friction = 0.98;
        this.gravity = 0.1;
        this.size = size;
        this.decay = decay;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.draw();
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
      }
    }

    const createFirework = (x, y, particleCount = 40, isFlame = false) => {
      const angleIncrement = (Math.PI * 2) / particleCount;
      const goldColors = isFlame
        ? ['#ff5722', '#ff9800', '#ffc107', '#d4af37']
        : ['#d4af37', '#f1c40f', '#fff3b0', '#ffffff'];

      for (let i = 0; i < particleCount; i++) {
        const speed = isFlame ? Math.random() * 4 : Math.random() * 6;
        particles.current.push(
          new Particle(
            x,
            y,
            goldColors[Math.floor(Math.random() * goldColors.length)],
            {
              x: Math.cos(angleIncrement * i) * speed,
              y: Math.sin(angleIncrement * i) * speed - (isFlame ? 2 : 0)
            },
            isFlame ? Math.random() * 2 + 0.5 : 1.5,
            isFlame ? 0.02 : 0.01
          )
        );
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(5, 5, 5, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        if (particle.alpha > 0) {
          particle.update();
        } else {
          particles.current.splice(index, 1);
        }
      });

      // Auto-launch subtle sparks from center (Lens Area)
      if (Math.random() < 0.1) {
        const centerX = canvas.width / 2 + (mousePos.x * 30);
        const centerY = canvas.height / 2 + (mousePos.y * 30);
        createFirework(
          centerX + (Math.random() - 0.5) * 100,
          centerY + (Math.random() - 0.5) * 100,
          5,
          true
        );
      }

      // Background ambient sparks
      if (Math.random() < 0.02) {
        createFirework(
          Math.random() * canvas.width,
          Math.random() * canvas.height * 0.7,
          10
        );
      }
    };

    animate();

    const triggerFlash = () => {
      setFlashActive(true);

      // Create a burst of particles for the flash
      const centerX = window.innerWidth * 0.4; // Approximate camera position in photo
      const centerY = window.innerHeight * 0.4;
      createFirework(centerX, centerY, 60, false); // White/Gold sparks

      setTimeout(() => setFlashActive(false), 150);

      // Random repeat
      setTimeout(triggerFlash, Math.random() * 5000 + 4000);
    };

    // Start random flashes after initial load
    const flashTimer = setTimeout(triggerFlash, 3000);

    const handleCanvasClick = (e) => {
      createFirework(e.clientX, e.clientY, 50);
    };


    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      clearTimeout(timer);
      clearTimeout(flashTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);

      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('click', handleCanvasClick);
    };

  }, [mousePos]); // Re-bind for center tracking

  return (
    <section className="hero" ref={heroRef}>
      <div className={`camera-flash ${flashActive ? 'active' : ''}`}></div>
      <canvas ref={canvasRef} className="celebration-canvas" />


      <div className="lens-flare" style={{
        transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
        left: `${(mousePos.x + 1) * 50}%`,
        top: `${(mousePos.y + 1) * 50}%`
      }}></div>

      <div className="hero-centerpiece" style={{
        transform: `translate(calc(-50% + ${mousePos.x * 20}px), calc(-50% + ${mousePos.y * 20}px + ${scrollY * 0.3}px))`,
        scale: `${1 + scrollY * 0.0005}`
      }}>

        <div className="photo-container">
          <div className="photo-glow-outer"></div>
          <div className="photo-wrapper">
            <img src={heroLensImg} alt="Ganesh Sapkota" className="hero-photo-img" />
            <div className="photo-overlay"></div>
          </div>
          <div className="photo-glow-inner"></div>
        </div>

      </div>


      <div className="hero-frames" style={{
        transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
      }}>
        <div className="frame frame-1"></div>
        <div className="frame frame-2"></div>
        <div className="frame frame-3"></div>
      </div>

      <div className="hero-content" style={{
        transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10 - scrollY * 0.1}px)`
      }}>

        <h1 className={`hero-title ${loaded ? 'visible' : ''}`}>
          <span className="block">Capture</span>
          <span className="block accent">The Moment</span>
        </h1>
        <p className={`hero-subtitle ${loaded ? 'visible' : ''}`}>
          Preserving moments with creativity and passion.
        </p>

        <div className={`hero-actions ${loaded ? 'visible' : ''}`}>
          <button className="btn" onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>
            View Portfolio
          </button>
        </div>
      </div>

      <div className="hero-background"></div>

      <style>{`
        .hero {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background-color: var(--bg-primary);
        }

        .celebration-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: auto;
          cursor: crosshair;
        }


        .hero-centerpiece {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 3;
          pointer-events: none;
          transition: transform 0.15s ease-out;
          will-change: transform;
        }

        .photo-container {
          position: relative;
          width: 95vw;
          max-width: 1400px;
          aspect-ratio: 1.87 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }


        .photo-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
          animation: photoFloat 6s infinite ease-in-out;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border: 1px solid rgba(212, 175, 55, 0.2);
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }


        .hero-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          scale: 1.02;
          transition: transform 0.5s ease;
        }

        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 60%, rgba(5, 5, 5, 0.3));
          pointer-events: none;
        }


        .photo-glow-outer {
          position: absolute;
          width: 105%;
          height: 105%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 80%);
          filter: blur(50px);
          animation: glowPulse 4s infinite alternate ease-in-out;
          z-index: -1;
        }



        .photo-glow-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          box-shadow: inset 0 0 40px rgba(212, 175, 55, 0.2);
          pointer-events: none;
          z-index: 2;
        }

        @keyframes photoFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        @keyframes glowPulse {
          0% { opacity: 0.4; transform: scale(0.9); }
          100% { opacity: 0.8; transform: scale(1.1); }
        }

        .lens-flare {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
          filter: blur(60px);
          transition: transform 0.2s ease-out;
          mix-blend-mode: screen;
        }

        .hero-frames {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          transition: transform 0.1s ease-out;
        }

        .frame {
          position: absolute;
          border: 1px solid rgba(212, 175, 55, 0.1);
          border-radius: 4px;
          opacity: 0;
          animation: frameFadeIn 2s forwards;
        }

        .frame-1 {
          width: 400px;
          height: 250px;
          top: 20%;
          left: 15%;
          animation-delay: 0.5s;
        }

        .frame-2 {
          width: 300px;
          height: 450px;
          top: 10%;
          right: 15%;
          animation-delay: 1.2s;
        }

        .frame-3 {
          width: 500px;
          height: 350px;
          bottom: 15%;
          left: 30%;
          animation-delay: 0.8s;
        }

        @keyframes frameFadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .hero-content {
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translateY(-50%);
          z-index: 10;
          text-align: left;
          padding: 2rem;
          width: auto;
          max-width: 600px;
          pointer-events: none;
          text-shadow: 0 4px 20px rgba(0,0,0,0.8);
        }

        .camera-flash {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          opacity: 0;
          pointer-events: none;
          z-index: 20;
          transition: opacity 0.1s ease-out;
          mix-blend-mode: overlay;
        }

        .camera-flash.active {
          opacity: 0.6;
        }



        
        .hero-actions {
          pointer-events: auto;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 4.5rem;
          line-height: 1;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        
        .block {
          display: block;
          opacity: 0;
          transform: translateY(60px) skewY(5deg);
          transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.2s ease;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .hero-title.visible .block {
          opacity: 1;
          transform: translateY(0) skewY(0deg);
        }
        
        .hero-title.visible .block:nth-child(2) {
          transition-delay: 0.15s;
        }

        .accent {
          color: var(--accent);
          font-style: italic;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #ddd;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
          transition-delay: 0.6s;
          max-width: 500px;
          margin-left: auto;
          font-weight: 300;
          letter-spacing: 1px;
        }



        .hero-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-actions {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
          transition-delay: 0.9s;
        }

        .hero-actions.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(15,15,20,0) 0%, var(--bg-primary) 90%),
                      repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 30px);
          z-index: 0;
          animation: pulse 20s infinite alternate ease-in-out;
        }

        @media (max-width: 1024px) {
          .hero-title { font-size: 3.5rem; }
          .photo-container { width: 98vw; }
          .hero-content { left: 5%; top: auto; bottom: 10%; transform: none; }
        }

        @media (max-width: 768px) {
          .hero-content { 
            position: absolute;
            top: auto;
            bottom: 10%;
            left: 0;
            right: 0;
            transform: none;
            text-align: center; 
            width: 100%; 
            padding: 1rem;
            max-width: 100%;
          }
          .hero-title { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1rem; margin-bottom: 1.5rem; }
          .frame { display: none; }
          .lens-flare { display: none; }
          .photo-container { width: 100vw; aspect-ratio: 1 / 1.1; }
          .photo-wrapper { border-radius: 0; mask-image: none; -webkit-mask-image: none; opacity: 1; }
          .hero-subtitle { margin-left: auto; margin-right: auto; }
        }



        @media (max-width: 480px) {
          .hero-title { font-size: 2rem; }
          .hero-content { bottom: 8%; }
          .photo-container { aspect-ratio: 1 / 1.4; }
          .photo-wrapper { opacity: 0.7; }
        }

      `}</style>
    </section>
  );
};

export default Hero;
