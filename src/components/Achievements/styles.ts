import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  img {
    height: 45px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0.2rem;
  }
`;
