import { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ModalBag } from '../../components/ModalBag';
import { ModalStats } from '../../components/ModalStats';
import { PokeBag } from '../../components/PokeBag';
import { PokeCard } from '../../components/PokeCard';
import { SearchBar } from '../../components/SearchBar';
import { useSearchContext } from '../../hooks/SearchContext';
import { useThemeContext } from '../../hooks/ThemeContext';
import { api } from '../../services/api';
import { Container, Content, BodyContent, CatalogContent } from './styles';

type PokeApiData = {
  pokemon: {
    name: string;
    url: string;
  };
};

export const Catalog: React.FC = () => {
  const [baseList, setBaseList] = useState<PokeApiData[]>([]);
  const [pokeList, setPokeList] = useState<PokeApiData[]>([]);
  const slug = useHistory();
  const { setSlug, currentTheme } = useThemeContext();
  const { filterText } = useSearchContext();

  const redirectStore = useCallback(() => {
    return slug.push('/');
  }, [slug]);

  const element = useMemo(() => {
    switch (currentTheme) {
      case 'fire':
        return '10';
      case 'water':
        return '11';
      case 'electric':
        return '13';
      default:
        return '404';
    }
  }, [currentTheme]);

  const getDataApi = useCallback(async () => {
    if (element !== '404') {
      await api
        .get(`/type/${element}`)
        .then(result => setBaseList(result.data.pokemon));
    } else {
      redirectStore();
    }
  }, [element, redirectStore]);

  const searchFilterList = useCallback(
    (text: string) => {
      const filteredList: PokeApiData[] = baseList.filter(pokemon => {
        const pokeData = pokemon.pokemon.name.toLowerCase();
        const textData = text.toLowerCase();
        return pokeData.includes(textData) && pokemon;
      });

      setPokeList(filteredList);
    },
    [setPokeList, baseList],
  );

  useEffect(() => {
    getDataApi();
    setSlug(slug.location.pathname);
  }, [getDataApi, setSlug, slug]);

  useEffect(() => {
    searchFilterList(filterText);
  }, [filterText, searchFilterList]);

  return (
    <Container>
      <ModalStats />
      <ModalBag />
      <Header />
      <Content>
        <BodyContent>
          <SearchBar />
          <CatalogContent>
            {pokeList &&
              pokeList.map((pokemon, index) => (
                <PokeCard key={index} url={pokemon.pokemon.url} />
              ))}
          </CatalogContent>
        </BodyContent>
        <PokeBag inCatalog />
      </Content>
    </Container>
  );
};
