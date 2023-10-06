import { createStore } from "redux";
import { todosReducer } from "./todosReducer";

const store = createStore(todosReducer);

const callMeWhenStateUpdates = () => {
    console.log(store.getState());
};
store.subscribe(callMeWhenStateUpdates);

//action is just object
//action creators are functions that return  action objects

const addButton = document.getElementById("add");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
