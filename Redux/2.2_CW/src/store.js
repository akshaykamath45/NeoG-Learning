import { createStore } from "redux";
import { financeReducers } from "./financeReducers";

export const store = createStore(financeReducers);
