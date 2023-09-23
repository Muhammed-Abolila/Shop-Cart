import axios from "axios";
import { BaseUrl, FETCH_BRAND_API, GET_ERROR, CREATE_BRAND,GET_BRAND_API_WITH_ID } from "../Type/Type";
// Post Brand Data
export const postBrandDataWithImage=(formData)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{"Content-Type":"multipart/form-data",Authorization:` Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/brands`,formData,config);
            dispatch({
                type:CREATE_BRAND,
                payload:response,
            })
        }catch(e){
            dispatch({
                type:GET_ERROR,

                payload:"Error"+e,
            })
        }
    }
}
// Get All Brands Data For Home Page
export const getBrandsApi=()=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/brands`,config);
            dispatch({
                type:FETCH_BRAND_API,
                payload:response.data
            });
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e
            });
        }
    }
};
// Get Limited Brands Data Based On Page Number
export const getLimitBrandsApi=(number)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response =await axios.get(`${BaseUrl}/api/v1/brands?limit=12&page=${number}`,config);
            dispatch({
                type:FETCH_BRAND_API,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e
            })
        }
    }
}; 
// get Category Data Based On ID
export const GetBrandDataWithId=(BrandId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/brands/${BrandId}`,config);
            dispatch({
                type:GET_BRAND_API_WITH_ID,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e
            })
        }
    }
};
