import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
`;

export const SearchContent = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  height: 40px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  margin: 1rem 0;

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 5px;
  }

  svg {
    margin: 0 0.5rem;
    color: #c0c0c0;
  }
`;

export const PokeBagContent = styled.div`
  display: flex;
  flex: 0.2;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.theme.primary};
    height: 22px;
    width: 22px;
    margin-top: 15px;
    margin-left: -10px;

    small {
      font-weight: bold;
      color: ${colors.whiteAux};
    }
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;
