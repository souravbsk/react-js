const calculatePrice = (productArr) => {
   const subTotal = (previous,current,i,arr) =>{
    return previous + current.price;
   } 
   const total = productArr.reduce(subTotal,0)
   return(total);
}

export default calculatePrice;