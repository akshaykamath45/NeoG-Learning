import { createStore } from "redux";
import { cookiesReducer } from "./cookiesReducer";

const store = createStore(cookiesReducer);

//whenever this a change in the store,please notify me
//internally ,there is a inbuilt api,which will update the UI
store.subscribe(() => {
    console.log(store.getState());
    updateCookieCount();
});

const addCookie = document.getElementById("add");
const removeCookie = document.getElementById("remove");
const cookieCount = document.getElementById("cookie-count");

const addCookieHandler = () => {
    store.dispatch({ type: "cookies/added" });
};

const removeCookieHandler = () => {
    store.dispatch({ type: "cookies/removed" });
};

addCookie.addEventListener("click", addCookieHandler);
removeCookie.addEventListener("click", removeCookieHandler);
