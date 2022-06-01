import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
    const { product_name, quantity } = cartItem;
    return (
        <div>
            <h2>{product_name}</h2>
            <span>{quantity}</span>
        </div>
    );
};

export default CartItem;
