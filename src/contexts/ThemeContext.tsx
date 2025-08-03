// "use client"

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { ThemeConfig, themes } from '@/config/themes';

// interface ThemeContextType {
//   currentTheme: ThemeConfig;
//   setTheme: (themeId: string) => void;
//   isAutoTheme: boolean;
//   setAutoTheme: (auto: boolean) => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(themes[0]);
//   const [isAutoTheme, setAutoTheme] = useState<boolean>(true);

//   const setTheme = (themeId: string) => {
//     const theme = themes.find(t => t.id === themeId);
//     if (theme) {
//       setCurrentTheme(theme);
//       if (typeof window !== 'undefined') {
//         localStorage.setItem('theme', themeId);
//         localStorage.setItem('autoTheme', 'false');
//       }
//       setAutoTheme(false);
//       applyTheme(theme);
//     }
//   };

//   const applyTheme = (theme: ThemeConfig) => {
//     const root = document.documentElement;
//     Object.entries(theme.colors).forEach(([key, value]) => {
//       root.style.setProperty(`--${key}`, value);
//     });

//     // Áp dụng background image nếu có
//     if (theme.assets?.backgroundImage) {
//       document.body.style.backgroundImage = `url(${theme.assets.backgroundImage})`;
//     } else {
//       document.body.style.backgroundImage = 'none';
//     }

//     // Thêm class cho effects nếu có
//     if (theme.effects?.animation) {
//       root.classList.remove(...themes.map(t => `theme-${t.id}`));
//       root.classList.add(`theme-${theme.id}`);
//     }
//   };

//   const checkDate = (startDate: string, endDate: string): boolean => {
//     if (!startDate || !endDate) return false;
    
//     const now = new Date();
//     const currentMonth = now.getMonth() + 1;
//     const currentDay = now.getDate();
    
//     const [startMonth, startDay] = startDate.split('-').map(Number);
//     const [endMonth, endDay] = endDate.split('-').map(Number);
    
//     const currentDate = currentMonth * 100 + currentDay;
//     const start = startMonth * 100 + startDay;
//     const end = endMonth * 100 + endDay;
    
//     if (start <= end) {
//       return currentDate >= start && currentDate <= end;
//     } else {
//       // Xử lý trường hợp theme kéo dài qua năm mới
//       return currentDate >= start || currentDate <= end;
//     }
//   };

//   useEffect(() => {
//     // Khôi phục theme từ localStorage
//     if (typeof window !== 'undefined') {
//       const savedTheme = localStorage.getItem('theme');
//       const savedAutoTheme = localStorage.getItem('autoTheme');
      
//       if (savedTheme && savedAutoTheme === 'false') {
//         setTheme(savedTheme);
//         setAutoTheme(false);
//         return;
//       }
//     }

//     // Auto theme theo ngày
//     if (isAutoTheme) {
//       for (const theme of themes) {
//         if (checkDate(theme.startDate, theme.endDate)) {
//           setCurrentTheme(theme);
//           applyTheme(theme);
//           return;
//         }
//       }
//       // Nếu không có theme nào phù hợp, dùng theme mặc định
//       setCurrentTheme(themes[0]);
//       applyTheme(themes[0]);
//     }
//   }, [isAutoTheme]);

//   return (
//     <ThemeContext.Provider value={{ currentTheme, setTheme, isAutoTheme, setAutoTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// }; 