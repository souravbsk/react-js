import React from 'react';
import calculatePrice from '../../utilities/Calculate';
import DataFetch from '../../utilities/DataFetch';
import Product from '../Product/Product';

const Products = () => {

    const productStyle = {
        display:'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap : '20px'
    }
    const products = DataFetch();
    const totalPrice = calculatePrice(products);
    console.log(totalPrice);
    return (
        <div>
            <h1>Product</h1>
            <p>Product total price: {totalPrice}</p>
            <div style={productStyle}>
                {
                    products.map((product) => {
                        return<Product key={product.id} {...product}></Product>
                    })
                }
            </div>
        </div>
    );
};

export default Products;