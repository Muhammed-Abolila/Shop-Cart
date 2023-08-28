import { combineReducers } from "redux";
import { CategoryReducer } from "./CategoryReducer";
import { BrandReducer } from "./BrandReducer";
import { subCategoryReducer } from "./SubCategoryReducer";
import { ProductReducer } from "./ProductReducer";
export const AllReducers=combineReducers({
    CategoryReducer:CategoryReducer,
    BrandReducer:BrandReducer,
    subCategoryReducer:subCategoryReducer,
    ProductReducer:ProductReducer,
})