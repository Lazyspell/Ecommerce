import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
    const { product_name, price, image_url } = product;

    return (
        <div className="product-card-container">
            <img src={image_url} alt={`${product_name}`} />
            <div className="footer">
                <span className="name">{product_name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted">Add to Cart</Button>
        </div>
    );
};

export default ProductCard;
