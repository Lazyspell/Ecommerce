import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className="shop-container">
            {Object.keys(products).map((title) => {
                const items = products[title];
                return (
                    <CategoryPreview
                        key={title}
                        title={title}
                        products={items}
                    />
                );
            })}
        </div>
    );
};

export default Shop;
