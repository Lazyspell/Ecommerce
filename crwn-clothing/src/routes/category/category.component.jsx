import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/products.context";
import "./category.styles.scss";

const Category = () => {
    const { category } = useParams();
    const { products } = useContext(ProductContext);
    const [items, setItems] = useState(products[category]);

    useEffect(() => {
        setItems(products[category]);
    }, [category, products]);

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {items &&
                    items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </>
    );
};

export default Category;
