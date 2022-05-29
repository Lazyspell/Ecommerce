import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    useEffect(() => {
        fetch("http://localhost:8080/product/all")
            .then((response) => response.json())
            .then((items) => setPRoducts(items));
    }, []);

    const [products, setPRoducts] = useState([]);
    const value = { products };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
