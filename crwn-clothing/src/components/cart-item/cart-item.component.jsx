import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
    const { product_name, quantity, image_url, price } = cartItem;
    return (
        <div className="cart-item-container">
            <img src={image_url} alt={`${product_name}`} />
            <div className="item-details">
                <span className="name">{product_name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
