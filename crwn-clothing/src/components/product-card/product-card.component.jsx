import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
    const { product_name, price, image_url } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="product-card-container">
            <img src={image_url} alt={`${product_name}`} />
            <div className="footer">
                <span className="name">{product_name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductCard;
