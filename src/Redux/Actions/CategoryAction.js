import {  BaseUrl, FETCH_CATEGORY_API, GET_ERROR,CREATE_CATEGORY } from "../Type/Type";
import axios from "axios";
// Get All Category Data
export const getCategoryApi=()=>{
    return async(dispatch)=>{
        try{
            let response=await axios.get(`${BaseUrl}/api/v1/categories`);
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
            let response=await axios.get(`${BaseUrl}/api/v1/categories?limit=18&page=${PageNumber}`);
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
// Post Category Data 
export const postCategoryDataWithImage=(formData)=>{
    return async (dispatch)=>{
        try{
            let config={headers:{"Content-Type":"multipart/form-data"}}
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







