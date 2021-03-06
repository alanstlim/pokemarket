import React, { useCallback, useMemo } from 'react';
import swal from 'sweetalert';
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from 'react-icons/io';
import { GiSchoolBag } from 'react-icons/gi';
import { ProductData } from '../PokeCard';
import { useThemeContext } from '../../hooks/ThemeContext';
import { useBagContext } from '../../hooks/BagContext';
import uknownPoke from '../../assets/uknownPoke.png';
import {
  Container,
  HeaderContent,
  FinishButton,
  Info,
  ItemsContent,
  Product,
  QuantityBox,
  QuantityContent,
  Sprite,
  TotalContent,
} from './styles';

type PokeBagProps = {
  inCatalog?: boolean;
};

export const PokeBag: React.FC<PokeBagProps> = ({ inCatalog = false }) => {
  const { products, setQuantity, removeProduct, cleanProdutcs } =
    useBagContext();
  const { currentTheme } = useThemeContext();

  const onChangeQuantity = useCallback(
    (product: ProductData, index: number, isAdd: boolean) => {
      let count = product.quantity;

      if (!isAdd && products[index].quantity === 1) {
        removeProduct(index);
      } else if (isAdd) {
        count += 1;
        setQuantity(index, count);
      } else {
        count -= 1;
        setQuantity(index, count);
      }
    },
    [products, setQuantity, removeProduct],
  );

  const totalPrice = useMemo(() => {
    const sumPrice = products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(sumPrice);
  }, [products]);

  const handlePopUp = useCallback(() => {
    swal(
      'Compra realizada com sucesso!',
      'Boa sorte e tenha uma boa jornada.',
      'success',
    );
  }, []);

  const handlePurchase = useCallback(() => {
    const resumePurchased = JSON.parse(
      localStorage.getItem(`@PokeMarket:purchased${currentTheme}`) || '[]',
    );
    if (products.length !== 0) {
      const now = new Date();
      const today = `${now.getDate()}/${
        now.getMonth() + 1
      }/${now.getFullYear()}`;
      const newPurchase = [
        ...resumePurchased,
        {
          datePurchased: today,
          totalPrice,
          products,
        },
      ];
      localStorage.setItem(
        `@PokeMarket:purchased${currentTheme}`,
        JSON.stringify(newPurchase),
      );
      handlePopUp();
      cleanProdutcs();
    }
  }, [products, cleanProdutcs, totalPrice, currentTheme, handlePopUp]);

  return (
    <Container inCatalog={inCatalog}>
      <HeaderContent>
        <GiSchoolBag size={32} />
        <p> PokeBag </p>
      </HeaderContent>
      <ItemsContent>
        {products &&
          products.map((product, index) => (
            <Product key={index}>
              <Sprite>
                <img src={product.sprite ?? uknownPoke} alt={product.name} />
              </Sprite>
              <Info>
                <p> {product.name} </p>
                <p> {product.finalPrice} </p>
              </Info>
              <QuantityContent>
                <button
                  type="button"
                  id="minunButton"
                  onClick={() => onChangeQuantity(product, index, false)}
                >
                  <IoIosRemoveCircleOutline size={18} />
                </button>
                <QuantityBox>
                  <p>{product.quantity}</p>
                </QuantityBox>
                <button
                  type="button"
                  id="plusleButton"
                  onClick={() => onChangeQuantity(product, index, true)}
                >
                  <IoIosAddCircleOutline size={18} />
                </button>
              </QuantityContent>
            </Product>
          ))}
      </ItemsContent>
      <TotalContent>
        <p> Total: {totalPrice}</p>
      </TotalContent>
      <FinishButton onClick={() => handlePurchase()}>
        <p>Finalizar Compra</p>
      </FinishButton>
    </Container>
  );
};
