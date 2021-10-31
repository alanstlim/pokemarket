import { Container } from './styles';
import first from '../../assets/achievements/1st.png';
import second from '../../assets/achievements/2nd.png';
import third from '../../assets/achievements/3rd.png';
import fourth from '../../assets/achievements/4th.png';
import fifth from '../../assets/achievements/5th.png';
import sixth from '../../assets/achievements/6th.png';
import seventh from '../../assets/achievements/7th.png';
import eighth from '../../assets/achievements/8th.png';

type AchievementsProps = {
  length: number;
};

export const Achievements: React.FC<AchievementsProps> = ({ length }) => {
  const achievementsImg = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
  ];
  const achievementsTxt = [
    'Primeira Compra',
    'Segunda Compra',
    'Terceira Compra',
    'Quarta Compra',
    'Quinta Compra',
    'Sexta Compra',
    'Sétima Compra',
    'Oitava Compra',
  ];

  return (
    <Container>
      {achievementsImg.map((item, index) =>
        length > index ? (
          <div key={index}>
            <img src={item} alt={achievementsTxt[index]} />
            <p> {achievementsTxt[index]} </p>
          </div>
        ) : null,
      )}
    </Container>
  );
};
