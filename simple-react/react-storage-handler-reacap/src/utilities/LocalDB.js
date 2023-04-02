// store to local Storage
const addToCartData = (id) => {
let shoppingCart = {};
const getProduct = localStorage.getItem('shopping-cart');
if(getProduct){
    shoppingCart = JSON.parse(getProduct);
}
else{
    shoppingCart = {}
}

const quantity = shoppingCart[id];
if(quantity){
    const updateValue = parseFloat(quantity) + 1;
    shoppingCart[id] = updateValue;
}
else{
    shoppingCart[id] = 1;
}
localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
return
}





const removeToCartData = (id) => {
    console.log(id);
    const getProduct = localStorage.getItem('shopping-cart');
    if(getProduct){
        const products = JSON.parse(getProduct);
        if(id in products){
            delete products[id]
            localStorage.setItem('shopping-cart',JSON.stringify(products))
        }
    }
}




// clear product from storage 
const ClearToCart = () => {
    localStorage.clear();
}

export  {addToCartData,removeToCartData,ClearToCart};