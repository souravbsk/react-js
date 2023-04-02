import React, { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import Foods from "../Foods/Foods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart, checkItem, removeToCart } from "../Utilities/Fakedb";

const Main = () => {
  const [productName, setProductName] = useState([]);

  const handleProductId = (foodName) => {
    if (productName.includes(foodName)) {
      toast(`Opps !!! ${foodName} Already Added`);
    } else {
      const newNameArray = [...productName, foodName];
      setProductName(newNameArray);
      toast(`Congratulate !!! ${foodName} Added in Cart`);
      addToCart(foodName);
    }
  };

  useEffect(() => {
    const storeProductItem = checkItem();
    setProductName(storeProductItem);
  }, []);

  const removeItem = (name) => {

    if (name) {
      const restName = productName.filter((nam) => nam !== name);
      setProductName(restName);
      removeToCart(name)
      toast(`${name} remove from Cart`);
    }
  };
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <div className="md:col-span-3 px-12">
        <Foods handleProductId={handleProductId}></Foods>
      </div>
      <div className="md:col-span-1">
        <Carts removeItem={removeItem} productName={productName}></Carts>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Main;
