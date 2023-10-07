import { createStore } from "redux";
import { cartReducer } from "./cartReducer";
const store = createStore(cartReducer);

const callMeWhenStateUpdates = () => {
    console.log(store.getState());
};
store.subscribe(callMeWhenStateUpdates);