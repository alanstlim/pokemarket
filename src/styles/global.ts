import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font: 400 1rem Staatliches, sans-serif;
    }
`

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-y: hidden;
    height: 100vh;
`