import { combineReducers } from "redux";
import { modalReducer } from "./common/redux/ modal-reducer";

export const reducers = combineReducers({ modal: modalReducer });

export type AppState = ReturnType<typeof reducers>;
