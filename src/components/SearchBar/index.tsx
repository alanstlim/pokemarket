import { IoMdSearch } from 'react-icons/io';
import { useSearchContext } from '../../hooks/SearchContext';
import { Container } from './styles';

export const SearchBar: React.FC = () => {
  const { setFilterText } = useSearchContext();

  return (
    <Container>
      <IoMdSearch size={24} />
      <input
        placeholder="Quem é este Pokemon?"
        type="text"
        name="searchPoke"
        onChange={event => setFilterText(event.target.value)}
      />
    </Container>
  );
};
