import React from 'react';
import {addToCartData, ClearToCart, removeToCartData} from '../../utilities/LocalDB';

const Product = (props) => {
    const { name, price,id } = props;
    const addToCart = (id) => {
        addToCartData(id)
    }
    const removeToCart = (id) => {
        removeToCartData(id)
    }
    return (
        <div className="card border-zinc-100 border  w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                  Name: {name}
                </h2>
                <p>Price: {price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(id)}>Add to cart</button>
                <button className="btn btn-secondary" onClick={() => removeToCart(id)}>Remove</button>
                <button className="btn btn-secondary" onClick={() => ClearToCart()}>Clear</button>
            </div>
        </div>
    );
};

export default Product;