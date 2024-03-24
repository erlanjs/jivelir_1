import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers } from "redux";
import { Reducer } from "./Reducer/MainReducer";

export const store = createStore(Reducer, composeWithDevTools());
