import { createContext,useState,useEffect,useContext } from "react";

const ThemeContext = createContext();

const themes = [
  // Ultra Dark
  { name: 'Midnight', bg: '#0F172A', text: '#E5E7EB', accent: '#38BDF8' },
  { name: 'Obsidian', bg: '#111827', text: '#F3F4F6', accent: '#A78BFA' },
  { name: 'Carbon', bg: '#141414', text: '#EDEDED', accent: '#F97316' },
  { name: 'Pitch Black', bg: '#000000', text: '#FFFFFF', accent: '#22C55E' },

  // Dark Slate / Steel
  { name: 'Deep Slate', bg: '#1E293B', text: '#F1F5F9', accent: '#FB7185' },
  { name: 'Charcoal', bg: '#1F2937', text: '#E5E7EB', accent: '#FACC15' },
  { name: 'Gunmetal', bg: '#273449', text: '#FAFAFA', accent: '#C084FC' },
  { name: 'Steel', bg: '#334155', text: '#F8FAFC', accent: '#4ADE80' },
  { name: 'Ashen Night', bg: '#2D3748', text: '#EDF2F7', accent: '#63B3ED' },

  // Cool Dark
  { name: 'Deep Ocean', bg: '#0F3057', text: '#E0F2FE', accent: '#38BDF8' },
  { name: 'Nordic Blue', bg: '#1B2A41', text: '#E5E7EB', accent: '#60A5FA' },
  { name: 'Abyss', bg: '#020617', text: '#CBD5F5', accent: '#818CF8' },

  // Neutral Dark
  { name: 'Foggy Night', bg: '#374151', text: '#F9FAFB', accent: '#34D399' },
  { name: 'Smokey Quartz', bg: '#3F3F46', text: '#FAFAFA', accent: '#FB923C' },
  { name: 'Iron', bg: '#44403C', text: '#FAFAF9', accent: '#A3E635' },

  // Mid Gray
  { name: 'Fog', bg: '#4B5563', text: '#FFFFFF', accent: '#F472B6' },
  { name: 'Clouded Sky', bg: '#6B7280', text: '#FFFFFF', accent: '#22C55E' },
  { name: 'Silver Smoke', bg: '#9CA3AF', text: '#111827', accent: '#2563EB' },
  { name: 'Dust', bg: '#A1A1AA', text: '#111827', accent: '#E11D48' },

  // Soft Light
  { name: 'Mist', bg: '#CBD5E1', text: '#020617', accent: '#9333EA' },
  { name: 'Pearl', bg: '#E5E7EB', text: '#020617', accent: '#F59E0B' },
  { name: 'Soft Dawn', bg: '#E7E5E4', text: '#020617', accent: '#EF4444' },
  { name: 'Pale Sky', bg: '#E2E8F0', text: '#020617', accent: '#14B8A6' },

  // Bright / Clean
  { name: 'Ivory', bg: '#FAFAF9', text: '#111827', accent: '#F97316' },
  { name: 'Snowfall', bg: '#F8FAFC', text: '#020617', accent: '#22C55E' },
  { name: 'Frost', bg: '#F1F5F9', text: '#020617', accent: '#3B82F6' },
  { name: 'White Smoke', bg: '#FDFDFD', text: '#020617', accent: '#EC4899' },
  { name: 'Pure White', bg: '#FFFFFF', text: '#020617', accent: '#4F46E5' },

  // Pastel / Soft Color
  { name: 'Rose Cloud', bg: '#FFE4E6', text: '#020617', accent: '#E11D48' },
  { name: 'Lavender Mist', bg: '#EDE9FE', text: '#020617', accent: '#7C3AED' },
  { name: 'Mint Breeze', bg: '#ECFDF5', text: '#020617', accent: '#10B981' },
  { name: 'Sky Wash', bg: '#E0F2FE', text: '#020617', accent: '#0284C7' },
  { name: 'Peach Glow', bg: '#FFF1E6', text: '#020617', accent: '#EA580C' },

  // Warm Light
  { name: 'Sand', bg: '#FAF3E0', text: '#1C1917', accent: '#D97706' },
  { name: 'Vanilla', bg: '#FEFCE8', text: '#1C1917', accent: '#CA8A04' },
  { name: 'Warm Linen', bg: '#F5F5F4', text: '#1C1917', accent: '#B45309' },

  // Extra Bright
  { name: 'Bright Day', bg: '#E5E5E5', text: '#020617', accent: '#FACC15' },
  { name: 'Paper', bg: '#F9FAFB', text: '#020617', accent: '#2563EB' },

  // Earth Tones
  { name: 'Terra Cotta', bg: '#E07A5F', text: '#FFF7ED', accent: '#3D405B' },
  { name: 'Olive Grove', bg: '#556B2F', text: '#F9FAF9', accent: '#FFD700' },
  { name: 'Forest Floor', bg: '#2E4600', text: '#F0FFF4', accent: '#9AE6B4' },
  { name: 'Clay', bg: '#B5651D', text: '#FFF8F0', accent: '#FFB347' },

  // Jewel Tones
  { name: 'Emerald', bg: '#064E3B', text: '#ECFDF5', accent: '#10B981' },
  { name: 'Sapphire', bg: '#0F172A', text: '#E0F2FE', accent: '#3B82F6' },
  { name: 'Ruby', bg: '#7F1D1D', text: '#FEE2E2', accent: '#EF4444' },
  { name: 'Amethyst', bg: '#4B0082', text: '#F5F3FF', accent: '#A78BFA' },

  // Neon / Vibrant
  { name: 'Neon Pink', bg: '#FF007F', text: '#FDFDFD', accent: '#00FFFF' },
  { name: 'Electric Blue', bg: '#0000FF', text: '#FDFDFD', accent: '#39FF14' },
  { name: 'Cyber Lime', bg: '#CCFF00', text: '#111827', accent: '#FF3131' },
  { name: 'Hot Magenta', bg: '#FF1DCE', text: '#FDFDFD', accent: '#00BFFF' },

  // Seasonal
  { name: 'Spring Bloom', bg: '#FDE68A', text: '#1C1917', accent: '#84CC16' },
  { name: 'Summer Sky', bg: '#60A5FA', text: '#020617', accent: '#F59E0B' },
  { name: 'Autumn Leaf', bg: '#D97706', text: '#FFF7ED', accent: '#DC2626' },
  { name: 'Winter Chill', bg: '#1E3A8A', text: '#E0F2FE', accent: '#38BDF8' },

  // Gradient Inspired
  { name: 'Sunset', bg: '#FF7E5F', text: '#FFF7ED', accent: '#FEB47B' },
  { name: 'Aurora', bg: '#0F2027', text: '#F0FFF4', accent: '#2C5364' },
  { name: 'Galaxy', bg: '#1A1A2E', text: '#E5E7EB', accent: '#C084FC' },
  { name: 'Coral Reef', bg: '#FF6F61', text: '#FFF7ED', accent: '#00CED1' },

  // Metallic
  { name: 'Gold', bg: '#FFD700', text: '#111827', accent: '#B45309' },

];


export const ThemeProvider = ({children})=>{
    const [currentThemeIndex,setCurrentThemeIndex] = useState(0);
    const currentTheme = themes[currentThemeIndex];

    useEffect(()=>{
        document.body.style.backgroundColor = currentTheme.bg;
        document.body.style.color = currentTheme.text;
        document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    },[currentTheme]);

    return(
        <ThemeContext.Provider value={{currentThemeIndex,setCurrentThemeIndex,currentTheme,themes}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () =>{
    const context =useContext(ThemeContext);
    if(!context){
        throw new Error('useTheme must be used within ThemeProvide');
    }
    return context;
}