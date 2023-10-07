import { createStore } from "redux";
import { financeReducers } from "./financeReducers";

const store = createStore(financeReducers);
