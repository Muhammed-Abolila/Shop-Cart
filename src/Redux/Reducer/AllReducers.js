import { combineReducers } from "redux";
import { CategoryReducer } from "./CategoryReducer";
import { BrandReducer } from "./BrandReducer";
import { subCategoryReducer } from "./SubCategoryReducer";
import { ProductReducer } from "./ProductReducer";
import { RegisterReducer } from "./Auth/RegisterReducers";
import { LoginReducer } from "./Auth/LoginReducer";
import { ForgotPasswordReducer } from "./Auth/UserForgotPasswordReducer";
import { VerifyReducer } from "./Auth/VerifyCodeReducer";
import { RePasswordReducer } from "./Auth/RePasswordReducer";
export const AllReducers=combineReducers({
    CategoryReducer:CategoryReducer,
    BrandReducer:BrandReducer,
    subCategoryReducer:subCategoryReducer,
    ProductReducer:ProductReducer,
    RegisterReducer:RegisterReducer,
    LoginReducer:LoginReducer,
    ForgotPasswordReducer:ForgotPasswordReducer,
    VerifyReducer:VerifyReducer,
    RePasswordReducer:RePasswordReducer,
})