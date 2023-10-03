import axios from "axios";
import {BaseUrl,ADD_TO_CART,GET_PRODUCTS_CART,DELETE_ONE_PRODUCT_CART,UPDATE_PRODUCT_QTY,USER_USE_COUPON, DELETE_ALL_CART} from "../Type/Type";
// Add Product To Cart
export const AddToCart=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/cart`,data,config);
            dispatch({
                type:ADD_TO_CART,
                payload:response
            })
        }catch(e){
            dispatch({
                type:ADD_TO_CART,
                payload:e.response
            })
        }
    }
};
// Get All Products To Cart
export const GetAllProductsCart=()=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/cart`,config);
            dispatch({
                type:GET_PRODUCTS_CART,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_PRODUCTS_CART,
                payload:e.response
            })
        }
    }
};
// Update Product Quantity
export const UpdateProductQuantity=(productId,data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/cart/${productId}`,data,config);
            dispatch({
                type:UPDATE_PRODUCT_QTY,
                payload:response
            })
        }catch(e){
            dispatch({
                type:UPDATE_PRODUCT_QTY,
                payload:e.response
            })
        }
    }
};
// User Use Coupon
export const UserUseCoupon=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/cart/applyCoupon`,data,config);
            dispatch({
                type:USER_USE_COUPON,
                payload:response
            })
        }catch(e){
            dispatch({
                type:USER_USE_COUPON,
                payload:e.response
            })
        }
    }
};
// Delete One Product in Cart
export const DeleteOneProductCart=(productId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.delete(`${BaseUrl}/api/v1/cart/${productId}`,config);
            dispatch({
                type:DELETE_ONE_PRODUCT_CART,
                payload:response
            })
        }catch(e){
            dispatch({
                type:DELETE_ONE_PRODUCT_CART,
                payload:e.response
            })
        }
    }
};
// Delete All Cart
export const DeleteAllCart=()=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.delete(`${BaseUrl}/api/v1/cart`,config);
            dispatch({
                type:DELETE_ALL_CART,
                payload:response
            })
        }catch(e){
            dispatch({
                type:DELETE_ALL_CART,
                payload:e.response
            })
        }
    }
};