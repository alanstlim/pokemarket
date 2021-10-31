import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${colors.secondaryBag};

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    padding: 1rem 1.5rem;
    cursor: pointer;
    transform: scale(0.9);
    transition: all ease 0.4s;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
