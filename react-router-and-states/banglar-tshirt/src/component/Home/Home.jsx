import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import "./Home.css";
import Carts from "../Carts/Carts";
import { toast } from "react-hot-toast";

const Home = () => {
  const tShirts = useLoaderData();
  const [carts, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existProduct = carts.find((cart) => cart._id === product._id);

    if (existProduct) {
      toast('already added')
    } else {
      const updateCart = [...carts, product];
      setCart(updateCart);
    }
  };

  const handleRemoveItemFromCart = (id) => {
    console.log(id);

    const restProduct = carts.filter(cart => cart._id !== id);
    setCart(restProduct)
  };
  console.log(carts);
  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tShirts.map((tShirt) => (
          <TShirt
            handleAddToCart={handleAddToCart}
            key={tShirt._id}
            tShirt={tShirt}
          ></TShirt>
        ))}
      </div>
      <div>
        <Carts
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          carts={carts}
        ></Carts>
      </div>
    </div>
  );
};

export default Home;
