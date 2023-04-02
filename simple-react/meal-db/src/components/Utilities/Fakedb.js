const addToCart = (name) => {
  const storeCart = checkItem();

  storeCart.push(name);
  localStorage.setItem("foodCart", JSON.stringify(storeCart));
};

// remove local storage
const removeToCart = (name) => {
  const getItem = checkItem();
  if (getItem) {
    const restProductName = getItem.filter((pName) => pName !== name);
    localStorage.setItem("foodCart", JSON.stringify(restProductName));
  }
};

//get local storage
const checkItem = () => {
  let item = [];
  const storeCart = localStorage.getItem("foodCart");
  if (storeCart) {
    item = JSON.parse(storeCart);
  }
  return item;
};

export { addToCart, checkItem, removeToCart };
