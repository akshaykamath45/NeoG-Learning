import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { financeReducers } from "./financeReducers";

export const store = createStore(financeReducers, applyMiddleware(thunk));
