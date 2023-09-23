import axios from "axios";
import { BaseUrl, CREATE_RATE ,GET_ALL_REVIEWS,DELETE_REVIEW, UPDATE_COMMENT} from "../Type/Type";
// User Create Rate
export const UserCreateRate=(productId,data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/products/${productId}/reviews`,data,config)
            dispatch({
                type:CREATE_RATE,
                payload:response
            })
        }catch(e){
            dispatch({
                type:CREATE_RATE,
                payload:e.response
            })
        }
    }
};
// Get All Reviews
export const GetAllReviews=(productId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/products/${productId}/reviews`,config);            
            dispatch({
                type:GET_ALL_REVIEWS,
                payload:response.data
            });
        }catch(e){
            dispatch({
                type:GET_ALL_REVIEWS,
                payload:e.response
            });
        }
    }
};
// To Delete Review
export const DeleteReview=(reviewId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.delete(`${BaseUrl}/api/v1/reviews/${reviewId}`,config);         
            console.log(response);
            
            dispatch({
                type:DELETE_REVIEW,
                payload:response
            });
        }catch(e){
            dispatch({
                type:DELETE_REVIEW,
                payload:e.response
            });
        }
    }
};

// To Update Comment
export const UpdateReview=(reviewId,data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/reviews/${reviewId}`,data,config);
            console.log(response);
            
            dispatch({
                type:UPDATE_COMMENT,
                payload:response,
            })
        }catch(e){
            dispatch({
                type:UPDATE_COMMENT,
                payload:e.response,
            })
        }
    }
};