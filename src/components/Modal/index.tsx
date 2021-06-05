import { Container, ContentColumn, ContentRow, StatusContent, HeaderContent, FooterContent, Teste } from './styles';
import { CgClose, CgPokemon} from 'react-icons/cg';
import { useCallback, useMemo } from 'react';
import { useModalContext } from '../../hooks/ModalContext';
import { ProductData } from '../PokeCard';
import { useBagContext } from '../../hooks/BagContext';

export default function Modal() {

    const {isOpen, pokeInfo, getIsOpen} = useModalContext()
    const { setProduct, setQuantity, products } = useBagContext();


    const calculatePrice = useMemo(() => {
        let price: number = 0;
        pokeInfo?.stats?.map((stats) => (
            price += stats.base_stat
        ))

        return parseFloat((price / 6).toFixed(2)) // Average of all Stats
    }, [pokeInfo?.stats]);

    const formatedPrice = useMemo(() => {
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
            .format(calculatePrice);
    }, [calculatePrice]);

    const iChooseYou = useCallback(() => {
        const product:ProductData = {id: parseInt(pokeInfo?.id || '0'), name: pokeInfo?.name, price: calculatePrice, finalPrice: formatedPrice, sprite: pokeInfo?.sprites.front_default, quantity: 1 };
        
        const inBag = products.map((item) => {
            return item.id;
        }).indexOf(product.id);

        if(inBag > -1) {
            setQuantity(inBag, products[inBag].quantity += 1);
        } else {
            setProduct(product); 
        }  

        getIsOpen(false)
    }, [setProduct, formatedPrice, products, setQuantity, calculatePrice, pokeInfo, getIsOpen]);

    return (
        <>
            {isOpen ?
                <Teste>
                    <Container>
                        <ContentColumn>
                            <HeaderContent>
                                <p> {pokeInfo?.name} - {formatedPrice} </p>
                                <button onClick={() => getIsOpen(false)}>
                                    <CgClose size={24} />
                                </button>
                            </HeaderContent>
                            <ContentRow>
                                <img src={pokeInfo?.sprites.front_default} alt={''} />
                                <ContentColumn>
                                    {pokeInfo?.stats.map((stats, index) => (
                                        <StatusContent key={index}>
                                            <p> {stats.stat.name} </p>
                                            <p> {stats.base_stat} </p>
                                        </StatusContent>
                                    ))}
                                </ContentColumn>
                            </ContentRow>
                                <small> {pokeInfo?.weight}Kg </small>
                            <FooterContent>
                                <button onClick={() => iChooseYou()}>
                                    <CgPokemon size={24} />
                                    Eu escolho você!
                                </button>
                            </FooterContent>
                        </ContentColumn>
                    </Container>
                    </Teste>
                : null}
        </>
    );
};