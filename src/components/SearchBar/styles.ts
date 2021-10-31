import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  margin: 1rem 3rem;

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
