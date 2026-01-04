import React from 'react';

const SocialHub = () => {
    return (
        <div className="social-hub">
            <h2 className="heading">Let's <span>Connect</span></h2>
            <div className="social-links">
                <a href="#" className="social-icon instagram">IG</a>
                <a href="#" className="social-icon facebook">FB</a>
                <a href="#" className="social-icon twitter">X</a>
                <a href="#" className="social-icon linkedin">IN</a>
            </div>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Ganesh Sapkota Photography. All Rights Reserved.</p>
            </footer>

            <style>{`
        .social-hub {
          text-align: center;
          padding: 4rem 0;
          background: linear-gradient(to top, var(--bg-secondary), var(--bg-primary));
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 3rem 0;
        }

        .social-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-weight: bold;
          transition: var(--transition-fast);
        }

        .social-icon:hover {
          background-color: var(--accent);
          color: var(--bg-primary);
          transform: translateY(-5px);
          box-shadow: 0 5px 15px var(--accent-glow);
        }

        .footer {
          margin-top: 4rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          opacity: 0.6;
        }
      `}</style>
        </div>
    );
};

export default SocialHub;
