import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import AddPlayerItem from "../AddPlayerItem/AddPlayerItem";

const Cart = ({ carts, total,handleRemoveToCart }) => {
  return (
    <div className="px-5 py-16 space-y-2">
      <h3 className="text-3xl font-semibold text-center mb-3">Player Cart</h3>
      <div>
        <div className="text-center relative">
          <ShoppingBagIcon className="w-10 mx-auto h-10 text-gray-600"></ShoppingBagIcon>
          <span className="absolute top-0 ms-1 -mt-1 bg-slate-800 text-white py-1 w-8 h-8 rounded-full font-medium">
            {carts.length}
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-xl mt-6 font-medium text-center">
          Total Price: ${total}
        </h2>
      </div>
      <div>
        <div className="mt-8 flex bg-purple-400 h-96 p-4 rounded-lg overflow-auto flex-col gap-5">
          {carts.map((cart) => (
            <AddPlayerItem handleRemoveToCart={handleRemoveToCart} key={cart.id} cart={cart}></AddPlayerItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
