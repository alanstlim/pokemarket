import { createContext, useContext, useMemo, useState } from 'react';

export type ThemeContextData = {
    currentTheme: string;
    slug: string;
    setSlug(text: string): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
    const [slug, setSlug] = useState('');
    const userTheme = JSON.parse(localStorage.getItem('@PokeMarket:user') || '[]');


    const currentTheme = useMemo(() => {
        switch (slug) {
          case '/catalog/fire':
            return 'fire';
          case '/catalog/water':
            return 'water';
          case '/catalog/electric':
            return 'electric';
          default:
            return userTheme.theme;
        }
      }, [slug, userTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setSlug, slug }}>
            {children}
        </ThemeContext.Provider>
    );
};

function useThemeContext(): ThemeContextData {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within an ThemeProvider');
    }

    return context;
}

export { ThemeProvider, useThemeContext };