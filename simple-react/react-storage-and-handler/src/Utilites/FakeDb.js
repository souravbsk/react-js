// set and update local Storage item quantity 
const AddCart = (id) => {
    let shoppingCart = {};

    const product = localStorage.getItem('shooping-cart');
    if(product){
        shoppingCart = JSON.parse(product);
    }
    else{
        shoppingCart = {}
    }


    const quantity = shoppingCart[id];
    if(quantity){
        const updateQuantity = quantity + 1;
        shoppingCart[id] = updateQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shooping-cart',JSON.stringify(shoppingCart))
    
    // const checkProduct = localStorage.getItem(id);
    // if(checkProduct){
    //     const newUpdateProduct = parseFloat(checkProduct) + 1;
    //     localStorage.setItem(id,newUpdateProduct)
    //     console.log(newUpdateProduct);
    // }
    // else{
    //     console.log('nai ga');

    //     localStorage.setItem(id,1)
    // }
}



// remove product from  cart
const removeCart = (id) => {
    const products = localStorage.getItem('shooping-cart');
   if(products){
    const shoppingCart = JSON.parse(products);

    if(id  in shoppingCart){
      delete shoppingCart[id];
    localStorage.setItem('shooping-cart',JSON.stringify(shoppingCart))
       
    }
   }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}
export {AddCart,removeCart,deleteShoppingCart}