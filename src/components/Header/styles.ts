import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    flex: 1;
    display: flex;
    height: 80px;
    padding: 0 0.5rem;
    background-color: ${props => props.theme.primary};
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.5);

    h1{
        font-size: 2rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 80px;
    }

    svg {
        margin-right: 0.2rem;
        margin-top: 1rem;
        color: ${props => props.theme.secondary};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        
        svg {
            z-index: 999;
            border: 1px solid ${colors.whiteAux};
            border-radius: 50px;
            background-color: ${colors.whiteAux};
        }
    }

    img {
        height: 70px;
        background-color: ${colors.whiteAux};
        border-radius: 35px;
        margin-left: -1rem;
    }

    p {
        margin: 0 0.5rem;
    }
`;