import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeProvider';

const ColorThemeToggler = () => {

  const {currentThemeIndex, setCurrentThemeIndex,currentTheme,themes} =useTheme()

  


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

      
      

     <div className='hidden md:block'>
       {/* Theme Slider Desktop*/}
      <div className="theme-slider-wrapper ">
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
     </div>


     <div className='block md:hidden'>
       {/* Theme Slider Mobile*/}
      <div className="px-5 pb-4">
              <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-3 rounded-2xl border border-white/10">
                <span className="font-semibold text-sm">Theme</span>
                <input
                  type="range"
                  className="flex-1 max-w-[180px]"
                  min="0"
                  max={themes.length - 1}
                  value={currentThemeIndex}
                  onChange={handleSliderChange}
                />
              </div>
            
      </div>

      
     </div>
    </>
  );
};

export default ColorThemeToggler;