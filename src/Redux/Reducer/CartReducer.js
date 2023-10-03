import { ADD_TO_CART, GET_PRODUCTS_CART, DELETE_ONE_PRODUCT_CART, UPDATE_PRODUCT_QTY, USER_USE_COUPON, DELETE_ALL_CART } from "../Type/Type";
let initialValue={
    AddToCart:[],
    ProductsCart:[],
    UpdateProductQty:[],
    UseCoupon:[],
    DeleteOneProduct:[],
    DeleteAllCart:[],
}
export const CartReducer=(state=initialValue,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                AddToCart:action.payload,
            }
        case GET_PRODUCTS_CART:
            return{
                ...state,
                ProductsCart:action.payload,
            };
        case UPDATE_PRODUCT_QTY:
            return{
                ...state,
                UpdateProductQty:action.payload,
            };
        case USER_USE_COUPON:
            return{
                ...state,
                UseCoupon:action.payload,
            };
        case DELETE_ONE_PRODUCT_CART:
            return{
                ...state,
                DeleteOneProduct:action.payload,
            };
        case DELETE_ALL_CART:
            return{
                ...state,
                DeleteAllCart:action.payload,
            }
            default:
                return state
    }
}