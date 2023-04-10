import React from "react";
import "./Cart.css";

const Carts = ({ carts, handleRemoveItemFromCart }) => {
  let message;
  if (carts.length === 0) {
    message = (
      <div>
        <p>your cart is empty</p>
      </div>
    );
  } else {
    message = <p>thank for buy product</p>;
  }

  return (
    <div>
      <h2>Product Summary</h2>
      <p>Total Product {carts.length}</p>
      {message}
      {carts.length > 2 ? <p>buy more product</p>: <p>please buy one item</p>}
      {
        carts.length === 0 && <p>buy one to get one free </p>
      }
      {

        carts.length > 1 || <p>added another product</p>
      }
      <ul>
        {carts.map((cart) => (
          <li key={cart._id}>
            {cart.name}{" "}
            <button onClick={() => handleRemoveItemFromCart(cart._id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carts;
