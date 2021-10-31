import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { CgPokemon } from 'react-icons/cg';
import { apiFullUrl } from '../../services/api';
import uknownPoke from '../../assets/uknownPoke.png';
import { useBagContext } from '../../hooks/BagContext';
import { useModalContext } from '../../hooks/ModalContext';
import {
  ButtonContent,
  Container,
  InfoContent,
  PokeName,
  Price,
  Type,
  TypesContent,
} from './styles';

type Card = {
  url: string;
};

export type PokemonData = {
  id: string;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };

  types: [
    index: {
      type: {
        name: string;
        url: string;
      };
    },
  ];

  stats: [
    index: {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
};

export type ProductData = {
  id?: number;
  name?: string;
  price: number;
  finalPrice?: string;
  sprite?: string;
  quantity: number;
};

export const PokeCard: React.FC<Card> = ({ url }) => {
  const [pokemonData, setPokemonData] = useState<PokemonData>(
    {} as PokemonData,
  );
  const { products, setProduct, setQuantity } = useBagContext();
  const { getIsOpen, getPokeInfo } = useModalContext();

  const handleApi = useCallback(async () => {
    if (url) {
      await apiFullUrl.get(url).then(result => setPokemonData(result.data));
    }
  }, [url]);

  const calculatePrice = useMemo(() => {
    const price =
      pokemonData?.stats?.reduce((total, index) => {
        return total + index.base_stat;
      }, 0) || 0;

    return parseFloat((price / 6).toFixed(2));
  }, [pokemonData]);

  const formatedPrice = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(calculatePrice);
  }, [calculatePrice]);

  const handleColorType = useCallback((type: string) => {
    switch (type) {
      case 'normal':
        return '#bcbbad';
      case 'fire':
        return '#fa5644';
      case 'water':
        return '#56aeff';
      case 'electric':
        return '#fee63d';
      case 'dark':
        return '#8b6754';
      case 'psychic':
        return '#fa64b3';
      case 'ice':
        return '#97f1ff';
      case 'grass':
        return '#8dd851';
      case 'flying':
        return '#78a3ff';
      case 'bug':
        return '#c3d220';
      case 'dragon':
        return '#8974ff';
      case 'fairy':
        return '#faaeff';
      case 'fighting':
        return '#aa584b';
      case 'ghost':
        return '#7975d6';
      case 'ground':
        return '#eac958';
      case 'rock':
        return '#cdbd72';
      case 'poison':
        return '#a75b9e';
      case 'steel':
        return '#c5c3da';
      default:
        return '#f7f7f7';
    }
  }, []);

  const iChooseYou = useCallback(
    (pokemon: PokemonData, price: number, pokeName: string) => {
      const product: ProductData = {
        id: +pokemon.id,
        name: pokeName,
        price,
        finalPrice: formatedPrice,
        sprite: pokemon.sprites.front_default,
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
    },
    [setProduct, formatedPrice, products, setQuantity],
  );

  useEffect(() => {
    handleApi();
  }, [handleApi]);

  const showModal = useCallback(() => {
    getIsOpen(true);
    getPokeInfo(pokemonData);
  }, [pokemonData, getPokeInfo, getIsOpen]);

  return (
    <Container>
      <InfoContent onClick={() => showModal()}>
        <img
          src={pokemonData?.sprites?.front_default ?? uknownPoke}
          alt={pokemonData?.name}
        />
        <PokeName> {pokemonData?.name} </PokeName>
        <TypesContent>
          {pokemonData?.types?.map((types, index) => (
            <Type
              key={index}
              style={{ backgroundColor: handleColorType(types.type.name) }}
            >
              <p> {types.type.name}</p>
            </Type>
          ))}
        </TypesContent>
        <Price> {formatedPrice} </Price>
      </InfoContent>
      <ButtonContent
        onClick={() =>
          iChooseYou(pokemonData, calculatePrice, pokemonData?.name)
        }
      >
        <CgPokemon size={24} />
        <p> Eu escolho você! </p>
      </ButtonContent>
    </Container>
  );
};
