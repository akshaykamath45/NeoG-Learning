import { createStore } from "redux";
import { todosReducer } from "./todosReducer";

const store = createStore(todosReducer);
