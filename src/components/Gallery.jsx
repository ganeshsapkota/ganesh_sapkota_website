import React, { useState } from 'react';

// Import Arghakhanchi Photos
import argha1 from '../assets/Arghakhanchi_image_1.png';
import argha2 from '../assets/Arghakhanchi_image_2.png';
import argha3 from '../assets/Arghakhanchi_image_3.png';
import argha4 from '../assets/Arghakhanchi_image_4.png';
import argha5 from '../assets/Arghakhanchi_image_5.png';
import argha6 from '../assets/Arghakhanchi_image_6.png';

// Import Baglung Photos
import baglung1 from '../assets/Baglung_image_1.png';
import baglung2 from '../assets/Baglung_image_2.png';
import baglung3 from '../assets/Baglung_image_3.png';
import baglung4 from '../assets/Baglung_image_4.png';
import baglung5 from '../assets/Baglung_image_5.png';
import baglung6 from '../assets/Baglung_image_6.png';

// Import Gulmi Photos
import gulmi1 from '../assets/Gulmi_image_1.png';
import gulmi2 from '../assets/Gulmi_image_2.png';
import gulmi3 from '../assets/Gulmi_image_3.png';
import gulmi4 from '../assets/Gulmi_image_4.png';
import gulmi5 from '../assets/Gulmi_image_5.png';
import gulmi6 from '../assets/Gulmi_image_6.png';

// Import Myagdi Photos
import myagdi1 from '../assets/Myagdi_image_1.png';
import myagdi2 from '../assets/Myagdi_image_2.png';
import myagdi3 from '../assets/Myagdi_image_3.png';
import myagdi4 from '../assets/Myagdi_image_4.png';
import myagdi5 from '../assets/Myagdi_image_5.png';
import myagdi6 from '../assets/Myagdi_image_6.png';

// Import Mustang Photos
import mustang1 from '../assets/Mustang_image_1.png';
import mustang2 from '../assets/Mustang_image_2.png';
import mustang3 from '../assets/Mustang_image_3.png';
import mustang4 from '../assets/Mustang_image_4.png';
import mustang5 from '../assets/Mustang_image_5.png';
import mustang6 from '../assets/Mustang_image_6.png';

// Import Syangja Photos
import syangja1 from '../assets/Syangja_image_1.png';
import syangja2 from '../assets/Syangja_image_2.png';
import syangja3 from '../assets/Syangja_image_3.png';
import syangja4 from '../assets/Syangja_image_4.png';
import syangja5 from '../assets/Syangja_image_5.png';
import syangja6 from '../assets/Syangja_image_6.png';

// Import Palpa Photos
import palpa1 from '../assets/Palpa_image_1.png';
import palpa2 from '../assets/Palpa_image_2.png';
import palpa3 from '../assets/Palpa_image_3.png';
import palpa4 from '../assets/Palpa_image_4.png';
import palpa5 from '../assets/Palpa_image_5.png';
import palpa6 from '../assets/Palpa_image_6.png';

// Import Parbat Photos
import parbat1 from '../assets/Parbat_image_1.png';
import parbat2 from '../assets/Parbat_image_2.png';
import parbat3 from '../assets/Parbat_image_3.png';
import parbat4 from '../assets/Parbat_image_4.png';
import parbat5 from '../assets/Parbat_image_5.png';
import parbat6 from '../assets/Parbat_image_6.png';

// Import Pokhara Photos
import pokhara1 from '../assets/Pokhara_image_1.jpg';
import pokhara2 from '../assets/Pokhara_image_2.jpg';
import pokhara3 from '../assets/Pokhara_image_3.jpg';
import pokhara4 from '../assets/Pokhara_image_4.jpg';
import pokhara5 from '../assets/Pokhara_image_5.jpg';
import pokhara6 from '../assets/Pokhara_image_6.jpg';

// Import Kathmandu Photos
import kathmandu1 from '../assets/Kathmandu_image_1.png';
import kathmandu2 from '../assets/Kathmandu_image_2.png';
import kathmandu3 from '../assets/Kathmandu_image_3.png';
import kathmandu4 from '../assets/Kathmandu_image_4.png';
import kathmandu5 from '../assets/Kathmandu_image_5.png';
import kathmandu6 from '../assets/Kathmandu_image_6.png';

// Import Gaindakot Photos
import gaindakot1 from '../assets/Gaindakot_image_1.png';
import gaindakot2 from '../assets/Gaindakot_image_2.png';
import gaindakot3 from '../assets/Gaindakot_image_3.png';
import gaindakot4 from '../assets/Gaindakot_image_4.png';
import gaindakot5 from '../assets/Gaindakot_image_5.png';
import gaindakot6 from '../assets/Gaindakot_image_6.png';

// Import Galkot Photos
import galkot1 from '../assets/Galkot_image_1.png';
import galkot2 from '../assets/Galkot_image_2.png';
import galkot3 from '../assets/Galkot_image_3.png';
import galkot4 from '../assets/Galkot_image_4.png';
import galkot5 from '../assets/Galkot_image_5.png';
import galkot6 from '../assets/Galkot_image_6.png';













const locations = [
  'Arghakhanchi',
  'Baglung',
  'Gulmi',
  'Mustang',
  'Palpa',
  'Syangja',
  'Parbat',
  'Myagdi',
  'Pokhara',
  'Kathmandu',
  'Gaindakot',
  'Galkot'
];

// Generate placeholder data for 6 photos per location
// Manual Data for Arghakhanchi
const arghaData = [
  { id: 'argha-1', location: 'Arghakhanchi', title: 'Supa Deurali Temple', src: argha1, type: 'photo' },
  { id: 'argha-2', location: 'Arghakhanchi', title: 'Supa Deurali Temple', src: argha2, type: 'photo' },
  { id: 'argha-3', location: 'Arghakhanchi', title: 'Lahure tasiyako vir, Supa Deurali', src: argha3, type: 'photo' },
  { id: 'argha-4', location: 'Arghakhanchi', title: 'Lahure ra Bakas, Supa Deurali', src: argha4, type: 'photo' },
  { id: 'argha-5', location: 'Arghakhanchi', title: 'Narpani', src: argha5, type: 'photo' },
  { id: 'argha-6', location: 'Arghakhanchi', title: 'Argha Bhagwati Temple', src: argha6, type: 'photo' },
];

// Manual Data for Baglung
const baglungData = [
  { id: 'baglung-1', location: 'Baglung', title: 'Baglung Bazar', src: baglung1, type: 'photo' },
  { id: 'baglung-2', location: 'Baglung', title: 'Kalika Bhagwati Temple', src: baglung2, type: 'photo' },
  { id: 'baglung-3', location: 'Baglung', title: 'Shree Shreedharacharya Saligram Museum, Kundule-Fedi', src: baglung3, type: 'photo' },
  { id: 'baglung-4', location: 'Baglung', title: 'Panchakot Dham', src: baglung4, type: 'photo' },
  { id: 'baglung-5', location: 'Baglung', title: 'Bhairabsthan, Balewa', src: baglung5, type: 'photo' },
  { id: 'baglung-6', location: 'Baglung', title: 'Gaighat Waterfall, Galkot', src: baglung6, type: 'photo' },
];

// Manual Data for Gulmi
const gulmiData = [
  { id: 'gulmi-1', location: 'Gulmi', title: 'Tamghas Bazar', src: gulmi1, type: 'photo' },
  { id: 'gulmi-2', location: 'Gulmi', title: 'Resunga', src: gulmi2, type: 'photo' },
  { id: 'gulmi-3', location: 'Gulmi', title: 'Ridi (Tinmukhe Pul)', src: gulmi3, type: 'photo' },
  { id: 'gulmi-4', location: 'Gulmi', title: 'अचम्मेशवर मन्दिर ||Shree Achammeshwor Mandir', src: gulmi4, type: 'photo' },
  { id: 'gulmi-5', location: 'Gulmi', title: 'होसमारी झरना || Hosmari Waterfall', src: gulmi5, type: 'photo' },
  { id: 'gulmi-6', location: 'Gulmi', title: 'Purtighat', src: gulmi6, type: 'photo' },
];

// Manual Data for Myagdi
const myagdiData = [
  { id: 'myagdi-1', location: 'Myagdi', title: 'Poon Hill, Ghorepani', src: myagdi1, type: 'photo' },
  { id: 'myagdi-2', location: 'Myagdi', title: 'Lovely Hill', src: myagdi2, type: 'photo' },
  { id: 'myagdi-3', location: 'Myagdi', title: 'Singa Tatopani Kunda', src: myagdi3, type: 'photo' },
  { id: 'myagdi-4', location: 'Myagdi', title: 'Takam', src: myagdi4, type: 'photo' },
  { id: 'myagdi-5', location: 'Myagdi', title: 'Narchyang Waterfall', src: myagdi5, type: 'photo' },
  { id: 'myagdi-6', location: 'Myagdi', title: 'Dharapani', src: myagdi6, type: 'photo' },
];

// Manual Data for Mustang
const mustangData = [
  { id: 'mustang-1', location: 'Mustang', title: 'Muktinath Temple', src: mustang1, type: 'photo' },
  { id: 'mustang-2', location: 'Mustang', title: 'Kagbeni', src: mustang2, type: 'photo' },
  { id: 'mustang-3', location: 'Mustang', title: 'Jomsom Bridge', src: mustang3, type: 'photo' },
  { id: 'mustang-4', location: 'Mustang', title: 'Jomsom Airport', src: mustang4, type: 'photo' },
  { id: 'mustang-5', location: 'Mustang', title: 'Dhumba Lake', src: mustang5, type: 'photo' },
  { id: 'mustang-6', location: 'Mustang', title: 'Marpha Bazar', src: mustang6, type: 'photo' },
];

// Manual Data for Syangja
const syangjaData = [
  { id: 'syangja-1', location: 'Syangja', title: 'मिर्मि मुनि काली थुनेको', src: syangja1, type: 'photo' },
  { id: 'syangja-2', location: 'Syangja', title: 'Tinmukhe Pul', src: syangja2, type: 'photo' },
  { id: 'syangja-3', location: 'Syangja', title: 'मिर्मि मुनि काली थुनेको', src: syangja3, type: 'photo' },
  { id: 'syangja-4', location: 'Syangja', title: 'Hanumansthan', src: syangja4, type: 'photo' },
  { id: 'syangja-5', location: 'Syangja', title: 'Tinmukhe Pul', src: syangja5, type: 'photo' },
  { id: 'syangja-6', location: 'Syangja', title: 'Hanumansthan', src: syangja6, type: 'photo' },
];

// Manual Data for Palpa
const palpaData = [
  { id: 'palpa-1', location: 'Palpa', title: 'Tinmukhe Pul', src: palpa1, type: 'photo' },
  { id: 'palpa-2', location: 'Palpa', title: 'Tinmukhe Pul', src: palpa2, type: 'photo' },
  { id: 'palpa-3', location: 'Palpa', title: 'Rishikesh Temple', src: palpa3, type: 'photo' },
  { id: 'palpa-4', location: 'Palpa', title: 'Tanshen Highway', src: palpa4, type: 'photo' },
  { id: 'palpa-5', location: 'Palpa', title: 'Rani Mahal', src: palpa5, type: 'photo' },
  { id: 'palpa-6', location: 'Palpa', title: 'Rani Mahal', src: palpa6, type: 'photo' },
];

// Manual Data for Parbat
const parbatData = [
  { id: 'parbat-1', location: 'Parbat', title: 'Kushma Bazar', src: parbat1, type: 'photo' },
  { id: 'parbat-2', location: 'Parbat', title: 'Parbati Gufa, Pang', src: parbat2, type: 'photo' },
  { id: 'parbat-3', location: 'Parbat', title: 'View from Banau', src: parbat3, type: 'photo' },
  { id: 'parbat-4', location: 'Parbat', title: 'Durlungkot Temple', src: parbat4, type: 'photo' },
  { id: 'parbat-5', location: 'Parbat', title: 'Pang Village', src: parbat5, type: 'photo' },
  { id: 'parbat-6', location: 'Parbat', title: 'Bungy Jumping, Kushma', src: parbat6, type: 'photo' },
];

// Manual Data for Pokhara
const pokharaData = [
  { id: 'pokhara-1', location: 'Pokhara', title: 'Pumdikot', src: pokhara1, type: 'photo' },
  { id: 'pokhara-2', location: 'Pokhara', title: 'World Peace Pagoda', src: pokhara2, type: 'photo' },
  { id: 'pokhara-3', location: 'Pokhara', title: 'Gupteshwor Mahadev Cave', src: pokhara3, type: 'photo' },
  { id: 'pokhara-4', location: 'Pokhara', title: 'lake side', src: pokhara4, type: 'photo' },
  { id: 'pokhara-5', location: 'Pokhara', title: 'Lake Side', src: pokhara5, type: 'photo' },
  { id: 'pokhara-6', location: 'Pokhara', title: 'Thuli Pokhari', src: pokhara6, type: 'photo' },
];

// Manual Data for Kathmandu
const kathmanduData = [
  { id: 'kathmandu-1', location: 'Kathmandu', title: 'Pashupatinath Temple', src: kathmandu1, type: 'photo' },
  { id: 'kathmandu-2', location: 'Kathmandu', title: 'Dharahara Tower', src: kathmandu2, type: 'photo' },
  { id: 'kathmandu-3', location: 'Kathmandu', title: 'Singha Durbar', src: kathmandu3, type: 'photo' },
  { id: 'kathmandu-4', location: 'Kathmandu', title: 'TU Cricket Ground', src: kathmandu4, type: 'photo' },
  { id: 'kathmandu-5', location: 'Kathmandu', title: 'Chandragiri Hills', src: kathmandu5, type: 'photo' },
  { id: 'kathmandu-6', location: 'Kathmandu', title: 'Chandragiri Cable Car', src: kathmandu6, type: 'photo' },
];

// Manual Data for Gaindakot
const gaindakotData = [
  { id: 'gaindakot-1', location: 'Gaindakot', title: 'मौलाकालिका मन्दिर', src: gaindakot1, type: 'photo' },
  { id: 'gaindakot-2', location: 'Gaindakot', title: 'Maulakalika Mandir', src: gaindakot2, type: 'photo' },
  { id: 'gaindakot-3', location: 'Gaindakot', title: 'मौलाकालिका', src: gaindakot3, type: 'photo' },
  { id: 'gaindakot-4', location: 'Gaindakot', title: 'Maulakalika', src: gaindakot4, type: 'photo' },
  { id: 'gaindakot-5', location: 'Gaindakot', title: 'Narayani pul', src: gaindakot5, type: 'photo' },
  { id: 'gaindakot-6', location: 'Gaindakot', title: 'Narayani Bridge', src: gaindakot6, type: 'photo' },
];

// Manual Data for Galkot
const galkotData = [
  { id: 'galkot-1', location: 'Galkot', title: 'Gaighat Waterfall', src: galkot1, type: 'photo' },
  { id: 'galkot-2', location: 'Galkot', title: 'Galkot Durbar', src: galkot2, type: 'photo' },
  { id: 'galkot-3', location: 'Galkot', title: 'Daram Khola', src: galkot3, type: 'photo' },
  { id: 'galkot-4', location: 'Galkot', title: 'Daram Khola Bridge', src: galkot4, type: 'photo' },
  { id: 'galkot-5', location: 'Galkot', title: 'Hatiya Bazar', src: galkot5, type: 'photo' },
  { id: 'galkot-6', location: 'Galkot', title: 'Galkot Welcome Gate', src: galkot6, type: 'photo' },
];

// Generate placeholder data for other locations
const otherLocations = locations.filter(loc =>
  loc !== 'Arghakhanchi' &&
  loc !== 'Baglung' &&
  loc !== 'Gulmi' &&
  loc !== 'Myagdi' &&
  loc !== 'Mustang' &&
  loc !== 'Syangja' &&
  loc !== 'Palpa' &&
  loc !== 'Parbat' &&
  loc !== 'Pokhara' &&
  loc !== 'Kathmandu' &&
  loc !== 'Gaindakot' &&
  loc !== 'Galkot'
);
const placeholderData = otherLocations.flatMap((location) =>











  Array.from({ length: 6 }).map((_, index) => ({
    id: `${location}-${index + 1}`,
    location: location,
    title: `${location} Shot ${index + 1}`,
    src: `https://placehold.co/600x800/1a1a1a/D4AF25?text=${location}+${index + 1}`,
    type: 'photo'
  }))
);

const galleryData = [...arghaData, ...baglungData, ...gulmiData, ...myagdiData, ...mustangData, ...syangjaData, ...palpaData, ...parbatData, ...pokharaData, ...kathmanduData, ...gaindakotData, ...galkotData, ...placeholderData];













const Gallery = () => {
  const [selectedLocation, setSelectedLocation] = useState('Arghakhanchi');
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const filteredItems = galleryData.filter(item => item.location === selectedLocation);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImgIndex === null) return;

      if (e.key === 'ArrowRight') {
        if (selectedImgIndex < filteredItems.length - 1) {
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
  }, [selectedImgIndex, filteredItems.length]);

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
    if (selectedImgIndex < filteredItems.length - 1) {
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
    <section id="gallery" className="section container gallery-section">
      <h2 className="heading">Photo <span>Gallery</span></h2>
      <p className="subheading">Exploring Nepal: Districts, Heritage, and Culture.</p>

      {/* Location Filter Tabs */}
      <div className="filter-container">
        {locations.map(location => (
          <button
            key={location}
            className={`filter-btn ${selectedLocation === location ? 'active' : ''}`}
            onClick={() => setSelectedLocation(location)}
          >
            {location}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <div key={item.id} className="gallery-item" onClick={() => openModal(index)}>
            <div className="img-wrapper">
              <img src={item.src} alt={item.title} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImgIndex !== null && (
        <div className="gallery-modal" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>&times;</button>

          {selectedImgIndex > 0 && (
            <button className="modal-nav prev" onClick={prevImage}>&#10094;</button>
          )}

          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={filteredItems[selectedImgIndex].src} alt="Full view" />
            <div className="modal-info">
              <h3>{filteredItems[selectedImgIndex].location}</h3>
              <p>{filteredItems[selectedImgIndex].title}</p>
              <div className="modal-counter">{selectedImgIndex + 1} / {filteredItems.length}</div>
            </div>
          </div>

          {selectedImgIndex < filteredItems.length - 1 && (
            <button className="modal-nav next" onClick={nextImage}>&#10095;</button>
          )}
        </div>
      )}

      <style>{`
        .gallery-section {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        .subheading {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        /* Filter Tabs */
        .filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-secondary);
          padding: 0.5rem 1.2rem;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .filter-btn:hover {
          border-color: var(--accent);
          color: white;
        }

        .filter-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: black;
          font-weight: 700;
        }

        /* Grid Layout */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Back to 3 columns */
          gap: 0.8rem;
          margin-top: 0.5rem;
          max-width: 1000px; /* Limit width to keep height in check */
          margin-left: auto;
          margin-right: auto;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gallery-item {
          position: relative;
          cursor: pointer;
          aspect-ratio: 4 / 3; /* Landscape helps save vertical height */
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .img-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        /* Lightbox Modal Styles */
        .gallery-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-content img {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border: 1px solid var(--accent);
          box-shadow: 0 0 50px rgba(212, 175, 55, 0.2);
          border-radius: 4px;
        }
        
        .modal-info {
          text-align: center;
          margin-top: 1.5rem;
        }
        
        .modal-info h3 {
          color: var(--accent);
          font-family: var(--font-heading);
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }

        .modal-info p {
           color: white;
           font-size: 1rem;
           margin-bottom: 0.5rem;
        }

        .modal-counter {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .modal-close {
          position: absolute;
          top: 30px;
          right: 30px;
          color: white;
          font-size: 3rem;
          cursor: pointer;
          background: none;
          border: none;
          transition: 0.3s;
          line-height: 1;
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

        .modal-nav.prev { left: 40px; }
        .modal-nav.next { right: 40px; }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }
          .gallery-item {
            aspect-ratio: 1 / 1; /* Keep square on mobile if preferred */
          }
        }

        @media (max-width: 768px) {
          /* Mobile: 3 columns packed tight */
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem; /* Tighter gap for mobile */
          }
          
          .gallery-item {
            border-radius: 4px; /* Simpler borders on mobile */
          }
          
          .filter-container {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
          }

          .filter-btn {
            font-size: 0.8rem;
            padding: 0.4rem 1rem;
            flex-shrink: 0;
          }
          
          .section {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .modal-nav {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
            background: rgba(0,0,0,0.8);
          }

          .modal-nav.prev { left: 10px; }
          .modal-nav.next { right: 10px; }
          
          .modal-close {
            top: 20px;
            right: 20px;
            font-size: 2.5rem;
          }
          
          .gallery-modal {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
