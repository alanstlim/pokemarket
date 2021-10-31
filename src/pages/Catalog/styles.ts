import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const BodyContent = styled.div`
  flex: 3;
`;

export const CatalogContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 3;
  height: 80vh;
  padding: 0.5rem;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
