import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCoffee, faTrash } from "@fortawesome/free-solid-svg-icons";

const Carts = ({ productName, removeItem }) => {
  return (
    <div className="bg-orange-300 fixed right-0 h-screen px-12 py-14">
      <h1 className="text-center font-medium text-slate-900 text-3xl">
        Product Added
      </h1>
      <div className="mt-8">
        <h5 className="text-2xl text-slate-600 font-medium">Product List:</h5>
        <ul className="list-decimal font-semibold text-xl text-slate-800 space-y-2 mt-6">
          {productName.map((name, i) => (
            <li key={i} className="flex items-center justify-between gap-3 ">
              <span>{name}</span>{" "}
              <button
                onClick={() => removeItem(name)}
              
              >
                
              <FontAwesomeIcon className="text-red-500 text-3xl" icon={faTrash} />
              </button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carts;
