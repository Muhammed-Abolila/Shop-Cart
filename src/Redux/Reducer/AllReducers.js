import { combineReducers } from "redux";
import { CategoryReducer } from "./CategoryReducer";

export const AllReducers=combineReducers({
    CategoryReducer:CategoryReducer,
})