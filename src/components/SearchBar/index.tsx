import { useMemo } from 'react';
import { GiSchoolBag } from 'react-icons/gi';
import { IoMdSearch } from 'react-icons/io';
import { useBagContext } from '../../hooks/BagContext';
import { useModalContext } from '../../hooks/ModalContext';
import { useSearchContext } from '../../hooks/SearchContext';
import { Container, PokeBagContent, SearchContent } from './styles';

export const SearchBar: React.FC = () => {
  const { setFilterText } = useSearchContext();
  const { products } = useBagContext();
  const { setIsOpenBag } = useModalContext();

  const ProductsInBag = useMemo(() => {
    return products.length;
  }, [products]);
  return (
    <Container>
      <SearchContent>
        <IoMdSearch size={24} />
        <input
          placeholder="Quem é este Pokemon?"
          type="text"
          name="searchPoke"
          onChange={event => setFilterText(event.target.value)}
        />
      </SearchContent>
      <PokeBagContent>
        <GiSchoolBag size={34} onClick={() => setIsOpenBag(true)} />
        <div>
          <small> {ProductsInBag} </small>
        </div>
      </PokeBagContent>
    </Container>
  );
};
