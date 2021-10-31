import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  height: 70vh;
  background-color: ${colors.primaryBag};
  padding: 1rem 0;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  height: 45px;
  display: flex;
  align-items: center;

  p {
    padding: 0 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    align-items: stretch;
    letter-spacing: 3px;
  }

  svg {
    color: ${props => props.theme.primaryDark};
  }
`;

export const ItemsContent = styled.div`
  background-color: ${colors.secondaryBag};
  width: 95%;
  height: 100%;
  overflow-y: auto;
  margin: 0.5rem 0.5rem;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const Product = styled.div`
  display: flex;
  height: 60px;
  margin: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.primary};
  justify-content: space-around;
  align-items: center;
`;

export const Sprite = styled.div`
  height: 60px;
  display: flex;
  padding: 15px 0;
  align-items: center;
  justify-content: center;

  img {
    height: 65px;
  }
`;

export const Info = styled.div`
  flex: 1;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-align: center;
    font-size: 14px;
    margin: 0 0.3rem;
    text-align: center;
    text-transform: capitalize;
  }
`;

export const QuantityContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  #minunButton,
  #plusleButton {
    border: none;
    background-color: transparent;
    margin: 1rem 0.2rem;
    :hover {
      cursor: pointer;
    }
  }

  #minunButton {
    svg {
      color: ${colors.redButton};
    }
  }

  #plusleButton {
    svg {
      color: ${colors.greenButton};
    }
  }
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.whiteAux};
  height: 1.8rem;
  width: 2rem;
  border: none;
  border-radius: 5px;
  text-align: center;
`;

export const TotalContent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    font-size: 1.5rem;
    margin: 0.5rem 1rem;
  }
`;

export const FinishButton = styled.button`
  margin-top: 0.2rem;
  width: 70%;
  min-width: 250px;
  height: 55px;
  border: none;
  border-radius: 5px;
  transform: scale(0.9);
  transition: all ease 0.3s;
  background-color: ${props => props.theme.primary};

  :hover {
    cursor: pointer;
    transform: scale(1);
    background-color: ${colors.greenButton};
    color: ${colors.whiteAux};
  }
`;
