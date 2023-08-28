import axios from "axios";
import { BaseUrl, FETCH_BRAND_API, GET_ERROR, CREATE_BRAND } from "../Type/Type";
// Get All Brands Data For Home Page
export const getBrandsApi=()=>{
    return async(dispatch)=>{
        try{
            let response=await axios.get(`${BaseUrl}/api/v1/brands`);
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
            let response =await axios.get(`${BaseUrl}/api/v1/brands?limit=9&page=${number}`);
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

// Post Brand Data
export const postBrandDataWithImage=(formData)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{"Content-Type":"multipart/form-data"}}
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