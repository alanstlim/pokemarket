import { createContext, useCallback, useContext, useState } from 'react';

type ProductData = {
    id?: number;
    name?: string;
    price: number;
    finalPrice?: string;
    sprite?: string;
    quantity: number;
}

export type BagContextData = {
    products: ProductData [],
    setProduct(product: ProductData) :void,
    setQuantity(index: number, quantity: number) : void,
    removeProduct(index: number) : void,
    cleanProdutcs() : void,
}

const BagContext = createContext<BagContextData>({} as BagContextData);

const BagProvider: React.FC = ({ children }) => {
    const [products, setProducts] = useState<ProductData[]>([]);
    
    const setProduct = useCallback (async(product: ProductData) => {
        setProducts([...products, product]);
    }, [products]);
 
    const setQuantity = useCallback(async(index: number, quantity: number) => {
        products[index].quantity = quantity;
        products[index].finalPrice = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(products[index].price * quantity);
        setProducts([...products]);
    }, [products]);

    const removeProduct = useCallback(async(index: number) => {
        products.splice(index,1);
        setProducts([...products]);
    }, [products]);

    const cleanProdutcs = useCallback(() => {
        setProducts([]);
    }, []);

    return (
        <BagContext.Provider value={{ products, setProduct, setQuantity, removeProduct, cleanProdutcs}}>
            {children}
        </BagContext.Provider>
    );
};

function useBagContext(): BagContextData {
    const context = useContext(BagContext);

    if (!context) {
        throw new Error('useBag must be used within an BagProvider');
    }

    return context;
}

export { BagProvider, useBagContext };