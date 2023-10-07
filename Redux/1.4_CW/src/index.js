import { createStore } from "redux";
import { cartReducer } from "./cartReducer";
import {
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal
} from "./actionCreator";
const store = createStore(cartReducer);

const callMeWhenStateUpdates = () => {
    console.log(store.getState());
    updateCart();
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

const updateCart = () => {
    const state = store.getState();
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    cartList.innerHTML = state.cartItems
        .map((item) => {
            return `<li>${item.name} - ${item.price} - ${item.quantity}</li>`;
        })
        .join("");
    cartTotal.innerHTML = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
};
store.dispatch(addToCart({ id: 1, name: "Product A", price: 10 }));
store.dispatch(addToCart({ id: 2, name: "Product A", price: 10 }));
store.dispatch(addToCart({ id: 3, name: "Product B", price: 20 }));
store.dispatch(addToCart({ id: 4, name: "Product C", price: 30 }));
store.dispatch(updateQuantity(2, Number(2)));
store.dispatch(updateQuantity(1, Number(2)));
store.dispatch(removeFromCart(1));
store.dispatch(removeFromCart(4));

//CODESANDBOX : https://codesandbox.io/s/rx1-4-cw-9ysrkp