import { combineReducers } from "redux";
import { CategoryReducer } from "./CategoryReducer";
import { BrandReducer } from "./BrandReducer";
export const AllReducers=combineReducers({
    CategoryReducer:CategoryReducer,
    BrandReducer:BrandReducer,
})