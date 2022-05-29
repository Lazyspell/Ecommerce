import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/products.context";

const Shop = () => {
    const { products } = useContext(ProductContext);

    return (
        <div>
            {products.map(({ id, product_name }) => (
                <div key={id}>
                    <h1>{product_name}</h1>
                </div>
            ))}
        </div>
    );
};

export default Shop;
