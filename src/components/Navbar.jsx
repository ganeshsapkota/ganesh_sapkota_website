import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false);

    if (sectionId === 'game') {
      navigate('/game');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={() => handleNavigation('home')}>
          Ganesh<span> Sapkota</span>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="menu-bg-accent"></div>
          {[
            { id: 'home', label: 'Home' },
            { id: 'gallery', label: 'Gallery' },
            { id: 'graduation', label: 'Graduation' },
            { id: 'game', label: 'Play Game' },
            { id: 'about', label: 'About Me' },
            { id: 'contact', label: 'Contact Me' }
          ].map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              style={{ '--i': index }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-fast);
          background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%);
        }


        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(5, 5, 5, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          cursor: pointer;
          letter-spacing: 1px;
          z-index: 1001;
        }

        .logo span {
          color: var(--accent);
          font-style: italic;
        }

        .nav-menu {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-menu li {
          color: var(--text-secondary);
          text-transform: uppercase;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: var(--transition-fast);
          position: relative;
        }

        .nav-menu li::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent);
          transition: var(--transition-fast);
        }

        .nav-menu li:hover {
          color: var(--accent);
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        .nav-menu li:hover::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
          z-index: 1001;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          width: 28px;
          height: 2px;
          background-color: white;
          transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .hamburger.open span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
            background-color: var(--accent);
          }

          .hamburger.open span:nth-child(2) {
            opacity: 0;
            transform: translateX(-20px);
          }

          .hamburger.open span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
            background-color: var(--accent);
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background: rgba(10, 10, 10, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
            clip-path: circle(30px at calc(100% - 40px) 40px);
          }

          .nav-menu.open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            clip-path: circle(150% at calc(100% - 40px) 40px);
          }

          .nav-menu li {
            font-size: 1.8rem;
            font-family: var(--font-heading);
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transition-delay: calc(0.1s * var(--i));
            position: relative;
            padding: 0.5rem 1rem;
            -webkit-tap-highlight-color: transparent; /* Remove default blue highlight */
          }

          .nav-menu li::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 150%;
            height: 100%;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
            transition: transform 0.4s ease-out;
            pointer-events: none;
            z-index: -1;
            border-radius: 50%;
          }

          .nav-menu li:active {
            transform: scale(0.95);
            color: var(--accent);
            text-shadow: 0 0 15px rgba(212, 175, 55, 0.8);
          }

          .nav-menu li:active::before {
            transform: translate(-50%, -50%) scale(1);
          }

          .nav-menu.open li {
            opacity: 1;
            transform: translateY(0);
            transition-delay: calc(0.3s + (0.1s * var(--i)));
          }

          .menu-bg-accent {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
            filter: blur(50px);
            z-index: -1;
            animation: float 10s infinite ease-in-out;
            pointer-events: none;
          }

          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-45%, -55%) scale(1.1); }
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
