import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  background-color: ${colors.whiteAux};
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 350px;
  min-width: 300px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
  transition: all ease 0.3s;

  :hover {
    transform: scale(1);
    cursor: pointer;
  }
`;

export const PokeName = styled.p`
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const InfoContent = styled.div`
  display: flex;
  width: 100%;
  flex: 7;
  flex-direction: column;
  align-items: center;

  img {
    height: 120px;
    margin: 0.8rem 0;
  }
`;

export const TypesContent = styled.div`
  display: flex;
  padding-left: 0.6rem;
`;

export const Type = styled.div`
  display: flex;
  height: 2rem;
  width: 5rem;
  margin: 0.5rem 0.1rem;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  p {
    color: ${colors.whiteAux};
    text-transform: capitalize;
  }
`;
export const Price = styled.p`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ButtonContent = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  height: 2.5rem;
  width: 15rem;
  border-radius: 5px;
  border: none;
  margin: 0.8rem 0.5rem;
  cursor: pointer;

  :hover {
    svg,
    p {
      color: ${colors.whiteAux};
    }
  }
`;
