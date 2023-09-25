import { combineReducers } from "redux";
import { CategoryReducer } from "./CategoryReducer";
import { BrandReducer } from "./BrandReducer";
import { subCategoryReducer } from "./SubCategoryReducer";
import { ProductReducer } from "./ProductReducer";
import { AuthReducers } from "./AuthReducers";
import { RateAndReviewReducers } from "./Rate&ReviewReducers";
import { WishListReducers } from "./WishListReducers";
import { CouponReducers } from "./CouponReducers";
export const AllReducers=combineReducers({
    CategoryReducer:CategoryReducer,
    BrandReducer:BrandReducer,
    subCategoryReducer:subCategoryReducer,
    ProductReducer:ProductReducer,
    AuthReducers:AuthReducers,
    RateAndReviewReducers:RateAndReviewReducers,
    WishListReducers:WishListReducers,
    CouponReducers:CouponReducers,
})