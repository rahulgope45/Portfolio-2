import { createContext,useState,useEffect,useContext } from "react";

const ThemeContext = createContext();


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