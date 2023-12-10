import { useState } from "react";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header className="header">
      <div className="leftHeader">
        <img className="logoHeader" src="logoMain.png" alt="" />
        <p className="logoName">Market Local</p>
      </div>
      <div className="midHeader">
        <input className="searchBar" type="text" />
        <img className="searchIcon" src="searchIcon.png" alt="" />
      </div>
      <div className="rightHeader">
        <p className="options">Home</p>
        <p className="options">Products</p>
        <p className="options" onClick={toggleCart}>
          Cart
        </p>
        {isCartOpen && <Cart closeCart={closeCart} />}{" "}
        {/* Render Cart component conditionally */}
        <button className="signUpBTN">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
