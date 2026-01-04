import React, { useState, useEffect, useCallback } from 'react';

const WORDS = [
  { word: 'PASHUPATINATH', hint: 'Holiest Hindu temple on the banks of Bagmati.' },
  { word: 'SWAYAMBHUNATH', hint: 'Also known as the "Monkey Temple."' },
  { word: 'LUMBINI', hint: 'The birthplace of Lord Buddha.' },
  { word: 'JANAKPUR', hint: 'Famous for the Janaki Mandir and Mithila culture.' },
  { word: 'FEWA LAKE', hint: 'Iconic lake in Pokhara with Tal Barahi temple.' },
  { word: 'KATHMANDU', hint: 'The capital city of Nepal.' },
  { word: 'PATAN', hint: 'Known as the "City of Fine Arts."' },
  { word: 'BHAKTAPUR', hint: 'Famous for the 55-Window Palace and curd (Juju Dhau).' },
  { word: 'CHITWAN', hint: 'Home to the first National Park in Nepal.' },
  { word: 'MUKTINATH', hint: 'Sacred temple for both Hindus and Buddhists in Mustang.' },
  { word: 'RARA LAKE', hint: 'The largest and deepest freshwater lake in Nepal.' },
  { word: 'DASHAIN', hint: 'The biggest and longest Hindu festival in Nepal.' },
  { word: 'TIHAR', hint: 'The festival of lights and flowers.' },
  { word: 'HOLI', hint: 'The festival of colors (Fagu Purnima).' },
  { word: 'TEEJ', hint: 'Fasting festival celebrated by Hindu women.' },
  { word: 'LHOSAR', hint: 'The Tibetan/Sherpa/Tamang New Year.' },
  { word: 'CHHATH', hint: 'Festival dedicated to the Sun God in the Terai.' },
  { word: 'SEL ROTI', hint: 'Traditional ring-shaped sweet bread.' },
  { word: 'BUDDHA JAYANTI', hint: 'Celebration of the birth of Buddha.' },
  { word: 'KALIKA BHAGWATI', hint: 'Most famous temple in Baglung Bazaar.' },
  { word: 'DHORPATAN', hint: 'The only hunting reserve in Nepal.' },
  { word: 'GANDAKI GOLDEN BRIDGE', hint: "One of the world's longest suspension bridges." },
  { word: 'GAIGHAT WATERFALL', hint: 'A scenic waterfall located in Baglung.' },
  { word: 'KALIGANDAKI', hint: 'The river that flows through Baglung.' },
  { word: 'MOUNT EVEREST', hint: 'The highest peak in the world (Sagarmatha).' },
  { word: 'MACHHAPUCHHRE', hint: 'The "Fishtail" mountain near Pokhara.' },
  { word: 'DHAULAGIRI', hint: 'The seventh highest mountain, visible from Baglung.' },
  { word: 'KUNDULE FEDI', hint: "The specific location in Baglung where the world's first Salagram museum is situated." },
  { word: 'ARGHAKHANCHI', hint: 'The district where Supa Deurali is located.' },
  { word: 'TAMGHAS', hint: 'The district headquarters of Gulmi.' },
  { word: 'RURU KSHETRA', hint: 'A major Hindu pilgrimage site, also known as Ridi.' },
  { word: 'DHAULAGIRI', hint: 'The massive mountain range clearly visible from Resunga.' },
  { word: 'KALIGANDAKI', hint: 'The holy river that forms the border of Gulmi.' },
  { word: 'RIDI', hint: 'The famous religious town where the three-way bridge is located.' },
  { word: 'NARCHYANG', hint: 'The village in Myagdi famous for its massive 300m waterfall.' },
  { word: 'POON HILL', hint: 'Famous sunrise viewpoint near Ghorepani village.' },
  { word: 'PUMDIKOT', hint: 'Home to the massive, towering statue of Lord Shiva.' },
  { word: 'MAULA KALIKA', hint: 'Famous hilltop temple in Gaindakot with 2,000+ steps.' },
  { word: 'SAGARMATHA', hint: 'The local Nepali name for Mount Everest.' },
  { word: 'RHODODENDRON', hint: 'Known as "Lali Gurans," it is the national flower of Nepal.' },
  { word: 'NAMASTE', hint: 'The traditional greeting meaning "I bow to the divine in you."' },
  { word: 'DANPHE', hint: 'The colorful Himalayan Monal, which is Nepal’s national bird.' },
  { word: 'ILAM', hint: 'The district famous for lush green tea gardens in Eastern Nepal.' },
  { word: 'RANI MAHAL', hint: 'The "Taj Mahal of Nepal," built by a king for his wife in Palpa.' },
  { word: 'DHORPATAN', hint: 'The only hunting reserve in Nepal where blue sheep are found.' },
];

const Hangman = () => {
  const [wordData, setWordData] = useState({ word: '', hint: '' });
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameState, setGameState] = useState('playing'); // 'playing', 'won', 'lost'

  const initGame = useCallback(() => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWordData(randomWord);
    setGuessedLetters([]);
    setMistakes(0);
    setGameState('playing');
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleGuess = (letter) => {
    if (gameState !== 'playing' || guessedLetters.includes(letter)) return;

    const newGuessed = [...guessedLetters, letter];
    setGuessedLetters(newGuessed);

    if (!wordData.word.includes(letter)) {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      if (newMistakes >= 6) {
        setGameState('lost');
      }
    } else {
      // Check win condition: every character must be guessed, IGNORING spaces
      const allGuessed = wordData.word.split('').every(char => char === ' ' || newGuessed.includes(char));
      if (allGuessed) {
        setGameState('won');
      }
    }
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const renderHangman = () => {
    return (
      <svg width="200" height="250" viewBox="0 0 200 250" className="hangman-svg">
        {/* Gallows */}
        <line x1="20" y1="230" x2="180" y2="230" stroke="white" strokeWidth="4" />
        <line x1="40" y1="230" x2="40" y2="20" stroke="white" strokeWidth="4" />
        <line x1="40" y1="20" x2="120" y2="20" stroke="white" strokeWidth="4" />
        <line x1="120" y1="20" x2="120" y2="50" stroke="white" strokeWidth="4" />

        {/* Head */}
        {mistakes > 0 && <circle cx="120" cy="70" r="20" stroke="var(--accent)" strokeWidth="4" fill="transparent" />}
        {/* Body */}
        {mistakes > 1 && <line x1="120" y1="90" x2="120" y2="150" stroke="var(--accent)" strokeWidth="4" />}
        {/* Left Arm */}
        {mistakes > 2 && <line x1="120" y1="110" x2="90" y2="130" stroke="var(--accent)" strokeWidth="4" />}
        {/* Right Arm */}
        {mistakes > 3 && <line x1="120" y1="110" x2="150" y2="130" stroke="var(--accent)" strokeWidth="4" />}
        {/* Left Leg */}
        {mistakes > 4 && <line x1="120" y1="150" x2="90" y2="190" stroke="var(--accent)" strokeWidth="4" />}
        {/* Right Leg */}
        {mistakes > 5 && <line x1="120" y1="150" x2="150" y2="190" stroke="var(--accent)" strokeWidth="4" />}
      </svg>
    );
  };

  return (
    <div className="hangman-page">
      <div className="container">
        <h2 className="heading">Word <span>Challenge</span></h2>
        <p className="subheading">Guess the correct answer to save the Hangman!</p>

        <div className="hangman-game-grid">
          <div className="illustration-side">
            {renderHangman()}
          </div>

          <div className="game-side">
            <div className="word-slots">
              {wordData.word.split('').map((char, i) => {
                if (char === ' ') {
                  return <span key={i} className="space-slot"></span>;
                }
                return (
                  <span key={i} className="letter-slot">
                    {guessedLetters.includes(char) ? char : ''}
                  </span>
                );
              })}
            </div>

            <div className="game-info">
              <p className="hint"><span>Hint:</span> {wordData.hint}</p>
              <p className="guesses">Mistakes: <span className={mistakes > 4 ? 'danger' : ''}>{mistakes} / 6</span></p>
            </div>

            <div className="virtual-keyboard">
              {alphabet.map((letter) => {
                const guessed = guessedLetters.includes(letter);
                const isCorrect = guessed && wordData.word.includes(letter);
                const isWrong = guessed && !wordData.word.includes(letter);

                return (
                  <button
                    key={letter}
                    className={`key ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                    disabled={guessed || gameState !== 'playing'}
                    onClick={() => handleGuess(letter)}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>

            {(gameState !== 'playing') && (
              <div className="game-modal">
                <div className="modal-content">
                  <div className="emoji-result">
                    {gameState === 'won' ? '🎉' : '😢'}
                  </div>
                  <h3 className={gameState === 'won' ? 'text-success' : 'text-danger'}>
                    {gameState === 'won' ? 'You Won!' : 'Game Over!'}
                  </h3>
                  <p>The word was: <strong>{wordData.word}</strong></p>
                  <button className="btn next-btn" onClick={initGame}>
                    {gameState === 'won' ? 'Next Level' : 'Try Again'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hangman-page {
          min-height: 100vh;
          padding-top: 100px;
          padding-bottom: 2rem;
          background-color: var(--bg-primary);
        }

        .hangman-game-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid rgba(212, 175, 55, 0.1);
          margin-top: 2rem;
          touch-action: manipulation;
          position: relative;
        }

        .illustration-side {
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          padding: 2rem;
        }

        .word-slots {
          display: flex;
          gap: 0.8rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .letter-slot {
          width: 40px;
          height: 50px;
          border-bottom: 3px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
        }

        .space-slot {
          width: 20px;
          height: 50px;
          display: inline-block;
        }

        .game-info {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .hint {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .hint span {
          color: var(--accent);
          font-weight: bold;
        }

        .guesses {
          font-size: 1.1rem;
        }

        .danger {
          color: #ff4444;
          font-weight: bold;
        }

        .virtual-keyboard {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .key {
          width: 45px;
          height: 45px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .key:hover:not(:disabled) {
          border-color: var(--accent);
          background: rgba(212, 175, 55, 0.1);
        }

        .key.correct {
          background: var(--accent);
          color: black;
          border-color: var(--accent);
        }

        .key.wrong {
          background: rgba(255, 68, 68, 0.2);
          color: #ff4444;
          border-color: #ff4444;
          opacity: 0.6;
        }

        .key:disabled {
          cursor: not-allowed;
        }

        .game-modal {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          z-index: 10;
          animation: fadeIn 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .modal-content {
          text-align: center;
          padding: 2rem;
        }
        
        .emoji-result {
          font-size: 5rem;
          margin-bottom: 1rem;
          animation: bounce 1s infinite alternate;
        }
        
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }

        .modal-content h3 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-family: var(--font-heading);
        }

        .text-success { color: var(--accent); }
        .text-danger { color: #ff4444; }

        .modal-content p {
          color: white;
          margin-bottom: 2rem;
          font-size: 1.2rem;
        }
        
        .next-btn {
           font-size: 1.2rem;
           padding: 1rem 3rem;
           background: var(--accent);
           color: black;
           border: none;
           border-radius: 50px;
           font-weight: bold;
           cursor: pointer;
           transition: transform 0.2s;
        }
        
        .next-btn:hover {
           transform: scale(1.05);
           box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 992px) {
          .hangman-game-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
          }
        }

        @media (max-width: 600px) {
          .hangman-page {
            padding-top: 70px;
            padding-bottom: 0.5rem;
          }

          .hangman-game-grid {
            padding: 1rem;
            gap: 1rem; /* Reduced gap */
            margin-top: 0.5rem;
          }

          .illustration-side {
            padding: 0.5rem;
            background: rgba(0, 0, 0, 0.1);
          }
          
          .hangman-svg {
            width: 120px; /* Smaller image */
            height: 150px;
          }

          .game-info {
            margin-bottom: 0.5rem; /* Tighter spacing */
          }

          .word-slots {
            gap: 0.2rem;
            margin-bottom: 1rem;
          }

          .letter-slot {
            width: 28px;
            height: 38px;
            font-size: 1.2rem;
            border-bottom-width: 2px;
          }
          
          .space-slot {
            width: 8px;
          }

          .virtual-keyboard {
            gap: 4px; /* Tighter keys */
          }

          .key {
            width: auto;
            min-width: 34px; /* Narrower keys */
            height: 40px;    /* Shorter keys */
            font-size: 0.9rem;
            flex: 1 0 10%;
            border-radius: 6px;
          }

          .modal-content {
            padding: 1rem;
          }

          .modal-content h3 {
            font-size: 1.8rem;
          }

          .emoji-result {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hangman;
