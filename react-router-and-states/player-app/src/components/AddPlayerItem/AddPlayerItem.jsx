import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const AddPlayerItem = ({ cart,handleRemoveToCart }) => {
  const { id, name, price, position, picture } = cart;
  return (
    <div className="flex justify-between bg-slate-300 py-3 px-3 rounded-2xl items-center">
      <figure>
        <img
          className="w-16 h-16 rounded-full object-cover object-top"
          src={picture}
          alt=""
        />
      </figure>

      <div>
        <h3 className="font-medium">{name}</h3>
        <p>{position}</p>
        <p className="font-medium">Price: ${price}</p>
      </div>
      <button onClick={() => handleRemoveToCart(id)}>
        <TrashIcon className="w-6 h-6"></TrashIcon>
      </button>
    </div>
  );
};

export default AddPlayerItem;
