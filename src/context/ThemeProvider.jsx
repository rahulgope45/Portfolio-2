import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const themes = [
    
{ name: 'Carbon', bg: '#141414', text: '#EDEDED', accent: '#F97316' },

  // --- PHASE 1: Carbon to Deep Slate (15 Steps) ---
  // Gradually shifting from neutral black to cool navy-slate
  { name: 'Carbon-1', bg: '#151517', text: '#EDEEF1', accent: '#F97321' },
  { name: 'Carbon-2', bg: '#151719', text: '#EDEEF2', accent: '#FA732D' },
  { name: 'Carbon-3', bg: '#16181C', text: '#EEF0F4', accent: '#FA7338' },
  { name: 'Carbon-4', bg: '#171A1F', text: '#EEF1F5', accent: '#FA7344' },
  { name: 'Carbon-5', bg: '#171B21', text: '#EEF1F6', accent: '#FB734F' },
  { name: 'Carbon-6', bg: '#181D24', text: '#EFF2F8', accent: '#FB725B' },
  { name: 'Carbon-7', bg: '#191E27', text: '#EFF3F9', accent: '#FB7266' },
  { name: 'Carbon-8', bg: '#192029', text: '#EFF4FA', accent: '#FB7272' },
  { name: 'Carbon-9', bg: '#1A212C', text: '#F0F4FB', accent: '#FC727D' },
  { name: 'Carbon-10', bg: '#1B232F', text: '#F0F5FC', accent: '#FC7189' },
  { name: 'Carbon-11', bg: '#1B2432', text: '#F0F5FD', accent: '#FC7194' },
  { name: 'Carbon-12', bg: '#1C2534', text: '#F1F5FE', accent: '#FC719F' },
  { name: 'Carbon-13', bg: '#1D2737', text: '#F1F5FF', accent: '#FC71AA' },
  { name: 'Carbon-14', bg: '#1D2839', text: '#F1F5F9', accent: '#FB7180' },
  { name: 'Carbon-15', bg: '#1E283A', text: '#F1F5F9', accent: '#FB7183' },

  { name: 'Deep Slate', bg: '#1E293B', text: '#F1F5F9', accent: '#FB7185' },

  // --- PHASE 2: Deep Slate to Pearl (15 Steps) ---
  // Gradually lifting lightness and shifting accent from Rose to Amber
  { name: 'Slate-1', bg: '#2B3547', text: '#E2E6EF', accent: '#FB747D' },
  { name: 'Slate-2', bg: '#394252', text: '#D3D8E5', accent: '#FB7775' },
  { name: 'Slate-3', bg: '#464E5E', text: '#C4C9DA', accent: '#FA7A6D' },
  { name: 'Slate-4', bg: '#545B6A', text: '#B5BBCE', accent: '#FA7D65' },
  { name: 'Slate-5', bg: '#616775', text: '#A6ADC3', accent: '#F9805D' },
  { name: 'Slate-6', bg: '#6F7481', text: '#979EB9', accent: '#F98355' },
  { name: 'Slate-7', bg: '#7C818D', text: '#8890AE', accent: '#F8864D' },
  { name: 'Slate-8', bg: '#8A8D98', text: '#7981A4', accent: '#F88945' },
  { name: 'Slate-9', bg: '#979AA4', text: '#6A7398', accent: '#F78C3D' },
  { name: 'Slate-10', bg: '#A5A7B0', text: '#5B648E', accent: '#F78F35' },
  { name: 'Slate-11', bg: '#B2B3BB', text: '#4C5683', accent: '#F6922D' },
  { name: 'Slate-12', bg: '#C0C0C7', text: '#3D4779', accent: '#F69525' },
  { name: 'Slate-13', bg: '#CDCDD3', text: '#2E396E', accent: '#F5981D' },
  { name: 'Slate-14', bg: '#DBDBDF', text: '#1F2A64', accent: '#F59B15' },
  { name: 'Slate-15', bg: '#E0E1E5', text: '#101B3C', accent: '#F59D0D' },

  { name: 'Pearl', bg: '#E5E7EB', text: '#020617', accent: '#F59E0B' },

];


export const ThemeProvider = ({ children }) => {
    const [currentThemeIndex, setCurrentThemeIndex] = useState(() => {
        const savedIndex = localStorage.getItem("themeIndex")
        return savedIndex ? parseInt(savedIndex, 10) : 0;
    });
    const currentTheme = themes[currentThemeIndex];


    useEffect(() => {
        document.body.style.backgroundColor = currentTheme.bg;
        document.body.style.color = currentTheme.text;
        document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';

        localStorage.setItem("themeIndex",currentThemeIndex)
    }, [currentTheme,currentThemeIndex]);

    return (
        <ThemeContext.Provider value={{ currentThemeIndex, setCurrentThemeIndex, currentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvide');
    }
    return context;
}