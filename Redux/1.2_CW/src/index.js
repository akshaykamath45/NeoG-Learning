import { createStore } from "redux";
import { todosReducer } from "./todosReducer";

const store = createStore(todosReducer);

const callMeWhenStateUpdates = () => {
    console.log(store.getState());
};
store.subscribe(callMeWhenStateUpdates);
