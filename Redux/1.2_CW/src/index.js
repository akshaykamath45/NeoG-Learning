import { createStore } from "redux";
import { todosReducer } from "./todosReducer";
import { addTodo, removeTodo } from "./actionCreators";
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

const addTodoHandler = () => {
    const text = todoInput.value;
    if (text) {
        store.dispatch(addTodo(text));
        todoInput.value = "";
    }
};
window.removeTodoHandler = (index) => {
    store.dispatch(removeTodo(index));
};

addButton.addEventListener("click", addTodoHandler);