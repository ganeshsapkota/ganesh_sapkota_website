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
          <li onClick={() => handleNavigation('home')}>Home</li>
          <li onClick={() => handleNavigation('gallery')}>Gallery</li>
          <li onClick={() => handleNavigation('graduation')}>Graduation</li>
          <li onClick={() => handleNavigation('game')}>Play Game</li>
          <li onClick={() => handleNavigation('about')}>About Me</li>
          <li onClick={() => handleNavigation('contact')}>Contact Me</li>
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
        }

        .nav-menu li:hover::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          padding: 5px;
          z-index: 1001;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background-color: white;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .hamburger.open span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }

          .hamburger.open span:nth-child(2) {
            opacity: 0;
          }

          .hamburger.open span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: var(--bg-secondary);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: 0.5s ease-in-out;
            box-shadow: -10px 0 30px rgba(0,0,0,0.5);
          }

          .nav-menu.open {
            right: 0;
          }

          .nav-menu li {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
