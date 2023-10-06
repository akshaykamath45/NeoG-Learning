import { createStore } from "redux"
import { cookiesReducer } from "./cookiesReducer"

const store = createStore(cookiesReducer)