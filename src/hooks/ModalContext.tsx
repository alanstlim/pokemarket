import { createContext, useCallback, useContext, useState } from 'react';
import { PokemonData } from '../components/PokeCard';

export type ModalContextData = {
  pokeInfo?: PokemonData;
  getPokeInfo(pokemon: PokemonData): void;
  isOpenStats: boolean;
  setIsOpenStats(open: boolean): void;
  isOpenBag: boolean;
  setIsOpenBag(open: boolean): void;
};

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [pokeInfo, setPokeInfo] = useState<PokemonData>({} as PokemonData);
  const [isOpenStats, setIsOpenStats] = useState(false);
  const [isOpenBag, setIsOpenBag] = useState(false);

  const getPokeInfo = useCallback((pokemon: PokemonData) => {
    setPokeInfo(pokemon);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        pokeInfo,
        getPokeInfo,
        isOpenStats,
        setIsOpenStats,
        isOpenBag,
        setIsOpenBag,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModalContext(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an BagProvider');
  }

  return context;
}

export { ModalProvider, useModalContext };
