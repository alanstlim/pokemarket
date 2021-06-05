import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as theme from './styles/themes';
import GlobalStyle, { Container } from "./styles/global";
import MainRoutes from "./routes";
import { useThemeContext } from "./hooks/ThemeContext";

function App() {
  const { currentTheme } = useThemeContext();
  const [newTheme, setNewTheme] = useState({});

  
  const handleElement = useCallback((element: string) => {
    localStorage.setItem('@PokeMarket:user', JSON.stringify({
      theme: element,
    }))
    const userTheme = JSON.parse(localStorage.getItem('@PokeMarket:user') || '[]');
      switch (userTheme.theme) {
        case 'fire':
          setNewTheme(theme.fire);
          break;
        case 'water':
          setNewTheme(theme.water);
          break;
        case 'electric':
          setNewTheme(theme.electric);
          break;
        default:
          return theme.fire;
      }

  }, []);

  useEffect(() => {
    handleElement(currentTheme)
  }, [currentTheme, handleElement]);

  return (
    <Container>
      <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet" />
      <GlobalStyle />
      <ThemeProvider theme={newTheme}>
        <MainRoutes />
      </ThemeProvider>
    </Container>
  );
}
export default App;
