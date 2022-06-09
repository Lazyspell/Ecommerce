import { createContext, useEffect, useState } from "react";
import {
    allProducts,
    productsAsObjects,
    productsByCategories,
} from "../remote/products";

export const ProductContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    useEffect(() => {
        const getProductsObject = async () => {
            const productObject = await productsAsObjects();
            setProducts(productObject.data[0]);
        };
        getProductsObject();
    }, []);

    const [products, setProducts] = useState([]);
    const value = { products };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
