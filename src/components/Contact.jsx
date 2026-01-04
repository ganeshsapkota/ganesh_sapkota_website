import React from 'react';

const Contact = () => {
  const socials = [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@ganeshexplorer',
      color: '#ffffff',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.05.82.26 1.68.81 2.27.7.81 1.83 1.17 2.87.95 1.12-.2 2.04-1.1 2.37-2.17.15-.45.18-.93.17-1.41-.02-3.97-.01-7.94-.02-11.91z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ganeshexplore/',
      color: '#E4405F',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-4.78 2.618-4.803 7.191-.014 1.28-.014 1.688 0 4.947.02 4.574 2.445 6.991 7.022 7.011 1.28.014 1.688.014 4.947 0 4.57 0 6.993-2.443 7.013-7.013.014-1.28.014-1.688 0-4.947-.02-4.574-2.445-6.991-7.022-7.011-1.28-.014-1.688-.014-4.947 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/gnsexplorer17/',
      color: '#1877F2',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      )
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@gnsexplorer17',
      color: '#FF0000',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="section container">
      <div className="contact-content">
        <h2 className="heading">Contact <span>Me</span></h2>
        <p className="contact-desc">Ready to start a project? Connect with me on social media or send an inquiry.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>Baglung, Nepal</p>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <p><a href="mailto:ganeshsapkota18@gmail.com">ganeshsapkota18@gmail.com</a></p>
            </div>
          </div>

          <div className="social-grid">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{ '--brand-color': social.color }}
              >
                <div className="social-icon-wrapper">
                  {social.icon}
                </div>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-content {
          text-align: center;
        }

        .contact-desc {
          margin-bottom: 4rem;
          color: var(--text-secondary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          text-align: left;
        }

        .contact-info h3 {
          font-family: var(--font-heading);
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--accent);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .info-item a {
          color: var(--text-primary);
          transition: var(--transition-fast);
        }
        
        .info-item a:hover {
          color: var(--accent);
        }

        .info-icon {
          font-size: 1.5rem;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.5rem;
        }

        .social-card {
          background: var(--bg-secondary);
          padding: 2.5rem 1rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .social-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background: var(--brand-color);
          opacity: 0.1;
          transition: var(--transition-fast);
          z-index: 0;
        }

        .social-card:hover {
          border-color: var(--brand-color);
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.4);
        }

        .social-card:hover::before {
          height: 100%;
        }

        .social-icon-wrapper {
          width: 50px;
          height: 50px;
          color: var(--text-secondary);
          transition: all 0.4s ease;
          z-index: 1;
        }

        .social-card:hover .social-icon-wrapper {
          color: var(--brand-color);
          transform: scale(1.2) rotate(8deg);
          filter: drop-shadow(0 0 8px var(--brand-color));
        }

        .social-name {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          z-index: 1;
        }

        .social-card:hover .social-name {
          color: white;
          letter-spacing: 3px;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
