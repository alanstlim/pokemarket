import { useMemo } from 'react';
import trainer from '../../assets/trainer.png';
import { Achievements } from '../../components/Achievements';
import { Header } from '../../components/Header';
import { ProductData } from '../../components/PokeCard';
import { useThemeContext } from '../../hooks/ThemeContext';
import {
  Container,
  Content,
  InfoContent,
  ProfileContent,
  AchievementsContent,
  ResumeContent,
  PurchaseContent,
  TopContent,
  ProductContent,
  ItemContent,
} from './styles';

type PurchaseData = {
  datePurchased: Date;
  totalPrice: string;
  products: ProductData[];
};

export const TrainerProfile: React.FC = () => {
  const { currentTheme } = useThemeContext();
  const resumePurchased = JSON.parse(
    localStorage.getItem(`@PokeMarket:purchased${currentTheme}`) || '[]',
  );

  const countAchievements = useMemo(() => {
    return resumePurchased.length;
  }, [resumePurchased]);

  const userData = {
    name: 'Oak',
    age: 25,
    hometown: 'Pallet',
    achievements: countAchievements,
  };

  return (
    <Container>
      <Header />
      <Content>
        <ProfileContent>
          <img src={trainer} alt="Avatar" />
          <InfoContent>
            <p> Nome </p>
            <p> {userData.name} </p>
          </InfoContent>
          <InfoContent>
            <p> Idade </p>
            <p> {userData.age} </p>
          </InfoContent>
          <InfoContent>
            <p> Cidade Natal </p>
            <p> {userData.hometown} </p>
          </InfoContent>
          <InfoContent>
            <p> Compras Efetuadas </p>
            <p> {userData.achievements} </p>
          </InfoContent>
          <AchievementsContent>
            {countAchievements > 0 ? (
              <Achievements length={countAchievements} />
            ) : (
              <p> Realize compras para obter conquistas.</p>
            )}
          </AchievementsContent>
        </ProfileContent>
        <ResumeContent>
          <h1> Histórico de Compras </h1>
          {resumePurchased &&
            resumePurchased.map((sales: PurchaseData, index: number) => (
              <PurchaseContent key={index}>
                <TopContent>
                  <p> Valor da compra: {sales.totalPrice} </p>
                  <p> Data do pedido: {sales.datePurchased} </p>
                </TopContent>
                <ProductContent>
                  {sales.products.map((product: ProductData, index: number) => (
                    <ItemContent key={index}>
                      <img src={product.sprite} alt={product.name} />
                      <p>
                        <small> x </small> {product.quantity}
                      </p>
                    </ItemContent>
                  ))}
                </ProductContent>
              </PurchaseContent>
            ))}
        </ResumeContent>
      </Content>
    </Container>
  );
};
