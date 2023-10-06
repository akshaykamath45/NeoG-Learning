import { createStore } from "redux";
import { cookiesReducer } from "./cookiesReducer";

const store = createStore(cookiesReducer);

//whenever this a change in the store,please notify me

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: "cookies/added" });
store.dispatch({ type: "cookies/added" });
store.dispatch({ type: "cookies/removed" });