import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.secondary};

  @media (max-width: 660px) {
    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  flex-wrap: wrap;
  height: 88vh;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 300px;
  height: 85%;
  background-color: ${colors.whiteAux};
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
  border: 10px outset ${colors.primaryBag};
  margin-left: 0.5rem;
  img {
    height: 25%;
    margin-bottom: 1.5rem;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.primary};
`;

export const AchievementsContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0.5rem 0;
  width: 80%;
  padding: 0.5rem;
  overflow-y: auto;
  border: 1px solid ${props => props.theme.primary};

  img {
    height: 45px;
    padding: 0 0.5rem;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const ResumeContent = styled.div`
  flex: 3;
  height: 85%;
  min-width: 300px;
  background-color: ${colors.whiteAux};
  margin-right: 0.5rem;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  border: 10px outset ${props => props.theme.primary};
  overflow-y: scroll;

  h1 {
    padding: 1rem;
  }
`;

export const PurchaseContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 2px outset ${props => props.theme.primary};
  padding: 0.5rem;
  margin: 0.5rem;
  transform: scale(0.95);
  transition: all ease 0.3s;

  :hover {
    transform: scale(1);
  }
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  p:first-of-type {
    text-align: start;
  }

  p:last-of-type {
    text-align: end;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ItemContent = styled.div`
  display: flex;

  img {
    height: 60px;
  }
  small {
    font-size: 10px;
  }
`;
