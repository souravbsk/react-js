import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const [products,setProducts] = useState([])
      useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
      },[])
    return (
        <div>
            <h1>Hello world</h1>
        {
            products.map(product => <Cosmetic key={product.id} product={product}></Cosmetic>)
        }
        </div>
    );
};

export default Cosmetics;