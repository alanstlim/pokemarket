import { CgClose, CgPokemon } from 'react-icons/cg';
import { useCallback, useMemo } from 'react';
import {
  Container,
  ContentColumn,
  ContentRow,
  StatusContent,
  HeaderContent,
  FooterContent,
  BackgroundModal,
} from './styles';
import { useModalContext } from '../../hooks/ModalContext';
import { ProductData } from '../PokeCard';
import { useBagContext } from '../../hooks/BagContext';

export const ModalStats: React.FC = () => {
  const { isOpenStats, pokeInfo, setIsOpenStats } = useModalContext();
  const { setProduct, setQuantity, products } = useBagContext();

  const calculatePrice = useMemo(() => {
    const price =
      pokeInfo?.stats?.reduce((total, index) => {
        return total + index.base_stat;
      }, 0) || 0;

    return parseFloat((price / 6).toFixed(2)); // Average of all Stats
  }, [pokeInfo?.stats]);

  const formatedPrice = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(calculatePrice);
  }, [calculatePrice]);

  const iChooseYou = useCallback(() => {
    const product: ProductData = {
      id: +(pokeInfo?.id || 0),
      name: pokeInfo?.name,
      price: calculatePrice,
      finalPrice: formatedPrice,
      sprite: pokeInfo?.sprites.front_default,
      quantity: 1,
    };

    const inBag = products
      .map(item => {
        return item.id;
      })
      .indexOf(product.id);

    if (inBag > -1) {
      setQuantity(inBag, (products[inBag].quantity += 1));
    } else {
      setProduct(product);
    }

    setIsOpenStats(false);
  }, [
    setProduct,
    formatedPrice,
    products,
    setQuantity,
    calculatePrice,
    pokeInfo,
    setIsOpenStats,
  ]);

  return (
    <>
      {isOpenStats ? (
        <BackgroundModal>
          <Container>
            <ContentColumn>
              <HeaderContent>
                <p>
                  {pokeInfo?.name} - {formatedPrice}
                </p>
                <button type="button" onClick={() => setIsOpenStats(false)}>
                  <CgClose size={24} />
                </button>
              </HeaderContent>
              <ContentRow>
                <img src={pokeInfo?.sprites.front_default} alt="" />
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
                <button type="button" onClick={() => iChooseYou()}>
                  <CgPokemon size={24} />
                  Eu escolho você!
                </button>
              </FooterContent>
            </ContentColumn>
          </Container>
        </BackgroundModal>
      ) : null}
    </>
  );
};
