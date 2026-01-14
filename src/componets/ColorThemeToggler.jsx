import { useState, useEffect } from 'react';

const ColorThemeToggler = () => {
  const themes = [
  { name: 'Midnight', bg: '#19252B', text: '#EAEAEA', accent: '#4FC3F7' },
  { name: 'Deep Slate', bg: '#25333A', text: '#F0F0F0', accent: '#FF7043' },
  { name: 'Charcoal', bg: '#2F4048', text: '#F5F5F5', accent: '#FFCA28' },
  { name: 'Steel', bg: '#3A4D56', text: '#FAFAFA', accent: '#66BB6A' },
  { name: 'Gunmetal', bg: '#455A64', text: '#FFFFFF', accent: '#AB47BC' },
  { name: 'Ash', bg: '#546E7A', text: '#FFFFFF', accent: '#29B6F6' },
  { name: 'Fog', bg: '#607D8B', text: '#FFFFFF', accent: '#FF5722' },
  { name: 'Clouded Sky', bg: '#78909C', text: '#000000', accent: '#8BC34A' },
  { name: 'Silver Blue', bg: '#90A4AE', text: '#000000', accent: '#FFC107' },
  { name: 'Dust', bg: '#B0BEC5', text: '#000000', accent: '#03A9F4' },
  { name: 'Mist', bg: '#CFD8DC', text: '#000000', accent: '#E91E63' },
  { name: 'Pearl', bg: '#ECEFF1', text: '#000000', accent: '#9C27B0' },
  { name: 'Ivory', bg: '#F5F5F5', text: '#000000', accent: '#FF9800' },
  { name: 'Snowfall', bg: '#FAFAFA', text: '#000000', accent: '#4CAF50' },
  { name: 'Frost', bg: '#FCFCFC', text: '#000000', accent: '#2196F3' },
  { name: 'White Smoke', bg: '#FDFDFD', text: '#000000', accent: '#FF4081' },
  { name: 'Pure White', bg: '#FFFFFF', text: '#000000', accent: '#3F51B5' },
  { name: 'Soft Dawn', bg: '#E0E0E0', text: '#000000', accent: '#FF5722' },
  { name: 'Pale Sky', bg: '#D6D6D6', text: '#000000', accent: '#009688' },
  { name: 'Bright Day', bg: '#CCCCCC', text: '#000000', accent: '#FFEB3B' },
];


  const [currentThemeIndex, setCurrentThemeIndex] = useState(16);

  const currentTheme = themes[currentThemeIndex];

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.bg;
    document.body.style.color = currentTheme.text;
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  }, [currentTheme]);

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setCurrentThemeIndex(value);
  };

  return (
    <>
      <style>{`
        * {
          
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow-x: hidden;
        }

        .demo-content {
          text-align: center;
          padding: 40px;
          max-width: 800px;
        }

        .demo-title {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -2px;
        }

        .demo-text {
          font-size: clamp(1rem, 2vw, 1.3rem);
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .theme-slider-wrapper {
          position: fixed;
          top: 30px;
          right: 40px;
          z-index: 1000;
        }

        .slider-container {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 12px 20px;
          border-radius: 50px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .theme-name {
          font-weight: 600;
          font-size: 0.9rem;
          min-width: 70px;
          text-align: left;
          opacity: 0.9;
        }

        .theme-slider {
          -webkit-appearance: none;
          width: 180px;
          height: 8px;
          border-radius: 10px;
          background: linear-gradient(
            to right,
            #0f172a 0%,
            #0c4a6e 16.66%,
            #14532d 33.33%,
            #7c2d12 50%,
            #581c87 66.66%,
            #881337 83.33%,
            #ffffff 100%
          );
          outline: none;
          cursor: pointer;
        }

        .theme-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 
            0 0 0 4px rgba(255, 255, 255, 0.3),
            0 4px 12px rgba(0, 0, 0, 0.4);
          transition: all 0.2s ease;
        }

        .theme-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 
            0 0 0 6px rgba(255, 255, 255, 0.4),
            0 6px 16px rgba(0, 0, 0, 0.5);
        }

        .theme-slider::-webkit-slider-thumb:active {
          transform: scale(1.05);
        }

        .theme-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 
            0 0 0 4px rgba(255, 255, 255, 0.3),
            0 4px 12px rgba(0, 0, 0, 0.4);
          transition: all 0.2s ease;
        }

        .theme-slider::-moz-range-thumb:hover {
          transform: scale(1.15);
          box-shadow: 
            0 0 0 6px rgba(255, 255, 255, 0.4),
            0 6px 16px rgba(0, 0, 0, 0.5);
        }

        .theme-slider::-moz-range-thumb:active {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .theme-slider-wrapper {
            top: 20px;
            right: 20px;
            left: 20px;
          }

          .slider-container {
            padding: 10px 16px;
            justify-content: center;
          }

          .theme-slider {
            width: 140px;
          }

          .theme-name {
            min-width: 60px;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .theme-slider-wrapper {
            right: 10px;
            left: 10px;
          }

          .slider-container {
            flex-direction: column;
            gap: 8px;
            padding: 12px;
          }

          .theme-slider {
            width: 100%;
            max-width: 200px;
          }

          .theme-name {
            text-align: center;
          }
        }
      `}</style>

      {/* Demo Content */}
      

      {/* Theme Slider */}
      <div className="theme-slider-wrapper">
        <div className="slider-container">
          <span className="theme-name">{currentTheme.name}</span>
          <input
            type="range"
            min="0"
            max={themes.length - 1}
            value={currentThemeIndex}
            onChange={handleSliderChange}
            className="theme-slider"
          />
        </div>
      </div>
    </>
  );
};

export default ColorThemeToggler;