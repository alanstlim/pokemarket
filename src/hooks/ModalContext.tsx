import { createContext, useCallback, useContext, useState } from 'react';
import { PokemonData } from '../components/PokeCard';

export type ModalContextData = {
    pokeInfo?: PokemonData,
    getPokeInfo(pokemon: PokemonData) : void,
    isOpen: boolean,
    getIsOpen(open: boolean) : void,
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
    const [pokeInfo, setPokeInfo] = useState<PokemonData>({} as PokemonData);
    const [isOpen, setIsOpen] = useState(false);

    const getPokeInfo = useCallback ((pokemon: PokemonData) => {
        setPokeInfo(pokemon);
    }, []);

    const getIsOpen = useCallback ((open: boolean) => {
        setIsOpen(open);
    }, []);
 
    return (
        <ModalContext.Provider value={{ pokeInfo, getPokeInfo, isOpen, getIsOpen }}>
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

