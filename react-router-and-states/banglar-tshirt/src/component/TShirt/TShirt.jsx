import React from "react";
import "./TShirt.css"
const TShirt = ({ tShirt,handleAddToCart }) => {
    const {name,_id,price,picture} = tShirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <div>
        <h4>Name:{name}</h4>
        <p>Price: {price}</p>
        <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default TShirt;
