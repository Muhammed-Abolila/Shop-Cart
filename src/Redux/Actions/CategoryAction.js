import {  BaseUrl, FETCH_CATEGORY_API, GET_ERROR,CREATE_CATEGORY,GET_CATEGORY_DATA_WITH_ID } from "../Type/Type";
import axios from "axios";
// Post Category Data 
export const postCategoryDataWithImage=(formData)=>{
    return async (dispatch)=>{
        try{
            let config={headers:{"Content-Type":"multipart/form-data"},Authorization:` Bearer ${localStorage.getItem("token")}`}
            let response=await axios.post(`${BaseUrl}/api/v1/categories`,formData,config);
            dispatch({
                type:CREATE_CATEGORY,
                payload:response,
            })
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e,
            })
        }
    }
};  
// Get All Category Data 
export const getCategoryApi=()=>{
    return async(dispatch)=>{
        try{
            let config={Authorization:` Bearer ${localStorage.getItem("token")}`}
            let response=await axios.get(`${BaseUrl}/api/v1/categories`,config);            
            dispatch({
                type:FETCH_CATEGORY_API,
                payload:response.data,
            });  
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e,
        })
        }  
    }
}; 
// Get Limited Category Data Based On Page Number
export const getLimitCategoryApi=(PageNumber)=>{
    return async(dispatch)=>{
        try{ 
            let config={Authorization:` Bearer ${localStorage.getItem("token")}`}
            let response=await axios.get(`${BaseUrl}/api/v1/categories?limit=12&page=${PageNumber}`,config);
            dispatch({
                type:FETCH_CATEGORY_API,
                payload:response.data,
            });  
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e,
        })
        }  
    }
};
// get Category Data Based On ID
export const GetCategoryWithId=(CategoryId)=>{
    return async(dispatch)=>{
        try{
            let config={Authorization:` Bearer ${localStorage.getItem("token")}`}
            let response=await axios.get(`${BaseUrl}/api/v1/categories/${CategoryId}`,config);            
            dispatch({
                type:GET_CATEGORY_DATA_WITH_ID,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e
            })
        }
    }
}








