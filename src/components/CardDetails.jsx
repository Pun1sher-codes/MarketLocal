import { useState } from "react";
import Item from "./Item";

function CardDetails() {
  const products = [
    {
      id: 4,
      image: "/items/kangkongchips.jpg",
      title: "Kangkong Chips",
      price: 130,
    },
    {
      id: 1,
      image: "/items/paso.jpg",
      title: "Paso",
      price: 99.9,
    },
    {
      id: 2,
      image: "/items/plato.jpg",
      title: "Plato",
      price: 57.2,
    },
    {
      id: 3,
      image: "/items/balisong.jpg",
      title: "Balisong",
      price: 346.6,
    },
    {
      id: 4,
      image: "/items/kangkongchips.jpg",
      title: "Kangkong Chips",
      price: 130,
    },
    {
      id: 5,
      image: "/items/pamaypay.jpg",
      title: "Pamaypay",
      price: 36.8,
    },
    {
      id: 6,
      image: "/items/parol.jpg",
      title: "Parol",
      price: 350.4,
    },
    {
      id: 1,
      image: "/items/paso.jpg",
      title: "Paso",
      price: 99.9,
    },
    {
      id: 2,
      image: "/items/plato.jpg",
      title: "Plato",
      price: 57.2,
    },
    {
      id: 3,
      image: "/items/balisong.jpg",
      title: "Balisong",
      price: 346.6,
    },
    {
      id: 4,
      image: "/items/kangkongchips.jpg",
      title: "Kangkong Chips",
      price: 19.99,
    },
    {
      id: 5,
      image: "/items/pamaypay.jpg",
      title: "Pamaypay",
      price: 36.8,
    },
    {
      id: 6,
      image: "/items/parol.jpg",
      title: "Parol",
      price: 350.4,
    },
  ];

  const [isItemOpen, setIsItemOpen] = useState(false);

  const toggleItem = () => {
    setIsItemOpen(!isItemOpen);
  };

  const closeItem = () => {
    setIsItemOpen(false);
  };

  return (
    <>
      <div className="product-grid">
        <div className="cardC" onClick={toggleItem}>
          <img src="/items/paso.jpg" alt="Paso" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Paso</h3>
            <p className="card-price">₱99.2</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        {isItemOpen && <Item closeCart={closeItem} />}{" "}
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </>
  );
}

const Card = ({ product }) => {
  const { image, title, price } = product;

  return (
    <div className="cardC">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">₱{price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default CardDetails;
