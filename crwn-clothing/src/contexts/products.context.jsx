import { createContext, useEffect, useState } from "react";
import { allProducts, productsByCategories } from "../remote/products";

export const ProductContext = createContext({
    products: [],
});
const items = ["Hats", "Sneakers", "Jackets", "Womens", "Mens"];

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
    console.log(value);
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
