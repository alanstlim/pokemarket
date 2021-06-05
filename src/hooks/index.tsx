import React from 'react';
import { BagProvider } from './BagContext';
import { ModalProvider } from './ModalContext';
import { SearchProvider } from './SearchContext';
import { ThemeProvider } from './ThemeContext';

const Hooks: React.FC = ({ children }) => (
    <ThemeProvider>
        <SearchProvider>
            <BagProvider>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </BagProvider>
        </SearchProvider>
    </ThemeProvider>
);

export default Hooks;