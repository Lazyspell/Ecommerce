import { createContext, useEffect, useState } from "react";
import { allProducts, productsByCategories } from "../remote/products";

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

    useEffect(() => {
        const list = [];
        const items = ["Hats", "Sneakers", "Jackets", "Womens", "Mens"];
        for (const i of items) {
            const getItems = async () => {
                const item = await productsByCategories(i);
                const itemObject = { [i]: item.data };
                list.push(itemObject);
            };
            getItems();
            console.log(list);
        }
    }, []);

    const [products, setProducts] = useState([]);
    const value = { products };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
