import React, { useState } from "react";
import Players from "../Players/Players";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [carts, setCarts] = useState([]);
  const handleAddToCart = (player) => {
    const exist = carts.find((cart) => cart.id === player.id);
    if (exist) {
      toast.error(`Sorry ${player.name} already added`);
    } else {
      const updateCart = [...carts, player];
      setCarts(updateCart);
      toast.success(`Wow ${player.name} has been added`);
    }
  };

const handleRemoveToCart = (id) => {
  const restPlayer = carts.filter(player => player.id !==  id);
  setCarts(restPlayer)
}

const total = carts.reduce((prevTotal,currentTotal) => {
return prevTotal + currentTotal.price
},0)

console.log(total);
  return (
    <div className="grid md:grid-cols-4 ">
      <div className="md:col-span-3 mx-4">
        <Players handleAddToCart={handleAddToCart}></Players>
      </div>
      <div className="bg-yellow-300 md:col-span-1 sticky top-0 h-screen">
        <Cart handleRemoveToCart={handleRemoveToCart} carts={carts} total={total}></Cart>
      </div>
      <ToastContainer
      autoClose={1000}
      ></ToastContainer>
    </div>
  );
};

export default Main;
