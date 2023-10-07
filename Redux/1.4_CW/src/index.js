import { createStore } from "redux";
import { cartReducer } from "./cartReducer";
const store = createStore(cartReducer);

const callMeWhenStateUpdates = () => {
    console.log(store.getState());
};
store.subscribe(callMeWhenStateUpdates);

const products = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 15 }
];

const renderProducts = () => {
    const productList = document.getElementById("product-list");
    productList.innerHTML = products
        .map((product) => {
            return `<li>${product.name} - ${product.price}</li>`;
        })
        .join("");
};
renderProducts();
