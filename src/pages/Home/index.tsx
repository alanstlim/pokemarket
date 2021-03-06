import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../assets/fire.png';
import water from '../../assets/water.png';
import electric from '../../assets/electric.png';
import { useThemeContext } from '../../hooks/ThemeContext';
import { Container, Content } from './styles';

export const Home: React.FC = () => {
  const { setSlug } = useThemeContext();
  const handleTheme = useCallback(
    (element: string) => {
      setSlug(element);
    },
    [setSlug],
  );

  return (
    <Container>
      <h1> Bem vindo ao PokeMarket! </h1>
      <h2> Escolha seu elemento favorito. </h2>
      <Content>
        <Link to="/catalog/fire" onClick={() => handleTheme('/catalog/fire')}>
          <img src={fire} alt="Fogo" />
        </Link>
        <Link to="/catalog/water" onClick={() => handleTheme('/catalog/water')}>
          <img src={water} alt="Água" />
        </Link>
        <Link
          to="/catalog/electric"
          onClick={() => handleTheme('/catalog/electric')}
        >
          <img src={electric} alt="Elétrico" />
        </Link>
      </Content>
    </Container>
  );
};
