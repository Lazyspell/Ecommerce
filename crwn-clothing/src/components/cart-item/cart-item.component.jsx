import "./cart-item.styles.jsx";
import {
    CartItemContainer,
    CartImage,
    ItemDetails,
    ItemName,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
    const { product_name, quantity, image_url, price } = cartItem;
    return (
        <CartItemContainer>
            <CartImage src={image_url} alt={`${product_name}`} />
            <ItemDetails>
                <ItemName>{product_name}</ItemName>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
