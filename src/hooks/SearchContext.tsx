import { createContext, useContext, useState } from 'react';

export type SearchContextData = {
    filterText: string;
    setFilterText(text: string): void;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

const SearchProvider: React.FC = ({ children }) => {
    const [filterText, setFilterText] = useState('');

    return (
        <SearchContext.Provider value={{ filterText, setFilterText }}>
            {children}
        </SearchContext.Provider>
    );
};

function useSearchContext(): SearchContextData {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error('useSearch must be used within an SearchProvider');
    }

    return context;
}

export { SearchProvider, useSearchContext };