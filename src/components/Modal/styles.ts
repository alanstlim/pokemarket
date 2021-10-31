import styled from 'styled-components';
import colors from '../../styles/colors';

export const BackgroundModal = styled.div`
  z-index: 999;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  height: auto;
  width: 500px;
  display: flex;
  text-transform: capitalize;
  justify-content: center;
  background-color: ${colors.whiteAux};
  border: 5px outset ${props => props.theme.primary};
  border-radius: 1rem;
  img {
    height: 80%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${colors.whiteAux};
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;
  }

  p {
    font-size: 30px;
  }

  svg {
    transition: all ease 0.3s;
  }

  svg:hover {
    transform: scale(1.2);
    color: ${props => props.theme.primary};
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  button {
    display: flex;
    height: 3rem;
    flex: 1;
    margin: 0.8rem 0.5rem;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primary};
    border: none;
    border-radius: 5px;
    transition: all ease 0.3s;
    transform: scale(0.9);
  }

  button:hover {
    color: ${colors.whiteAux};
    transform: scale(1);
  }
`;

export const ContentRow = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${colors.whiteAux};
  justify-content: space-between;
  align-items: center;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex: 1;
  padding: 0.5rem;
  flex-direction: column;

  small {
    font-size: 24px;
    margin-left: auto;
    padding-right: 2rem;
  }
`;

export const StatusContent = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
`;
