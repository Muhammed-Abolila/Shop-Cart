import axios from "axios";
import { BaseUrl,ADD_TO_WASH_LIST,DELETE_FROM_WISH_LIST, GET_ALL_WISH_LIST } from "../Type/Type";

// Add Product To Wish List
export const AddProductToWishlist=(productId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/wishlist`,productId,config);
            dispatch({
                type:ADD_TO_WASH_LIST,
                payload:response
            })
        }catch(e){
            dispatch({
                type:ADD_TO_WASH_LIST,
                payload:e.response
            })
        }
    }
};
// Get All Fav Product
export const GetAllFavProduct=()=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/wishlist`,config);
            dispatch({
                type:GET_ALL_WISH_LIST,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_ALL_WISH_LIST,
                payload:e.response
            })
        }
    }
}
// Remove Product From Wish List
export const RemoveProductFromWishlist=(productId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.delete(`${BaseUrl}/api/v1/wishlist/${productId}`,config);
            dispatch({
                type:DELETE_FROM_WISH_LIST,
                payload:response
            })
        }catch(e){
            dispatch({
                type:DELETE_FROM_WISH_LIST,
                payload:e.response
            })
        }
    }
};