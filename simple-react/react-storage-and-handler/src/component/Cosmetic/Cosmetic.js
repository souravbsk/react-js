import React from 'react';
import { AddCart, deleteShoppingCart, removeCart } from '../../Utilites/FakeDb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {id,name,price} = props.product
   const addToCart = (id) => {
    console.log('object',id);
    AddCart(id)
   }
   const removeToCart = (id) => {
    removeCart(id)
   }
    return (
        <div className='product'>
            <h1>Buy Now : {name}</h1>
            <p>Price : {price}</p>
            <p>Id : {id}</p>
            <button className='product-btn' onClick={() => addToCart(id)}>Add to Cart</button>
            <button className='product-btn' onClick={() => removeToCart(id)}>Remove to Cart</button>
            <button className='product-btn' onClick={() => deleteShoppingCart()}>Delete Cart</button>
        </div>
    );
};

export default Cosmetic;