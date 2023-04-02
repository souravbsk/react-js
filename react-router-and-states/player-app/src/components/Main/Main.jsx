import React, { useState } from "react";
import Players from "../Players/Players";
import Cart from "../Cart/Cart";

const Main = () => {
    const [carts,setCarts] = useState([]);
    const [total,setTotal] = useState(0);
    const handleAddToCart =(player) => {
        const updateCart = [...carts,player];
        const updateTotal = total + player.price;
        setCarts(updateCart);
        setTotal(updateTotal)
    }
    console.log(total);
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 mx-4">
        <Players handleAddToCart={handleAddToCart}></Players>
      </div>
     <div className="bg-yellow-300 col-span-1 sticky top-0 h-screen">
     <Cart carts={carts} total={total}></Cart>
     </div>
    </div>
  );
};

export default Main;
