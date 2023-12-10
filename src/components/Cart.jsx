const Cart = ({ closeCart }) => {
  return (
    <div className="cart-popup">
      <div className="cart-content">
        {/* Close button */}
        <button className="close-button" onClick={closeCart}>
          X
        </button>
        {/* Cart content goes here */}
        <h2>Your Cart</h2>
        <ul className="cart-items">
          <li>Plato - ₱57.2</li>
          <li>Kangkong Chips - ₱130</li>
          <li>Paso - ₱99.9</li>
        </ul>
        <button className="checkOut">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
