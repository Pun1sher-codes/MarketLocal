const Item = ({ closeItem }) => {
  return (
    <div className="item-popup">
      <div className="cart-content">
        <button className="close-button" onClick={closeItem}>
          X
        </button>
        {/* Cart content goes here */}
        <h2>Item View</h2>
        <div className="itemView">
          <video
            className="vid"
            width="400"
            height="300"
            controls
            poster="/items/paso.jpg"
          >
            <source src="/Paso.mp4" type="video/mp4" />
          </video>
          <div>
            <h2>Paso</h2>

            <h3>Description/History:</h3>
            <p className="desk">
              Native Filipinos created pottery since 3500 years ago. They used
              these ceramic jars to hold the deceased. Other pottery used to
              hold remains of the deceased were decorated with anthropomorphic
              designs. These anthropomorphic earthenware pots date back to 5 BC.
            </p>
            <h4>Comment</h4>
            <input type="text" />
            <button>post</button>
          </div>
        </div>
        <button className="checkOut">Add to Cart</button>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
  );
};

export default Item;
