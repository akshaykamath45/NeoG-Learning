import { createStore, applyMiddleware } from "redux";
import { loggerMiddleware } from "./loggerMiddleware";
let defaultState = {
  counter: 0
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "minus":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export const store = createStore(
  counterReducer,
  applyMiddleware(loggerMiddleware)
);
