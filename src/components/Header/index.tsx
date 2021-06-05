import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLeft, CgChevronDown } from 'react-icons/cg';
import flareon from '../../assets/logo/flareon.png';
import vaporeon from '../../assets/logo/vaporeon.png';
import jolteon from '../../assets/logo/jolteon.png'
import ditto from '../../assets/logo/ditto.png'
import trainer from '../../assets/trainer.png';
import { Container, Logo, Profile } from './styles';

export default function Header() {
    const userTheme = JSON.parse(localStorage.getItem('@PokeMarket:user') || '[]');
    const slugCatalog = `/catalog/${userTheme.theme}`;

    const logo = useMemo(() => {
        switch (userTheme.theme) {
            case 'fire':
                return flareon;
            case 'water':
                return vaporeon;
            case 'electric':
                return jolteon;
            default:
                return ditto;
        }
    }, [userTheme]);

    return (
        <Container>
            <Logo>
                <Link to="/">
                    <CgArrowLeft  size={30} />
                </Link>
                <Link to={slugCatalog}>
                    <img src={logo} alt='PokeMarket' />
                </Link>
            </Logo>
            <h1> PokeMarket </h1>
            <Profile>
                <Link to="/profile">
                    <div>
                        <CgChevronDown size={18} />
                        <img src={trainer} alt='Trainer' />
                    </div>
                </Link>
            </Profile>
        </Container>
    )
}