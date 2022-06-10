import { Fragment, useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { products } = useContext(ProductContext);
    return (
        <Fragment className="category-preview-container">
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
        </Fragment>
    );
};

export default CategoriesPreview;
