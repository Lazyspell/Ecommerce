import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/products.context";

import "./shop.styles.scss";

const Shop = () => {
    const { products } = useContext(ProductContext);
    console.log(products);
    return (
        <Fragment>
            {Object.keys(products).map((title) => (
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className="products-container">
                        {products[title].map((items) => (
                            <ProductCard key={items.id} product={items} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </Fragment>
    );
};

export default Shop;
