import { createContext, useEffect, useState } from "react";
import { allProducts } from "../remote/products";

export const ProductContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    useEffect(() => {
        const getProducts = async () => {
            const items = await allProducts();
            setProducts(items.data);
        };
        getProducts();
    }, []);

    const [products, setProducts] = useState([]);
    const value = { products };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
