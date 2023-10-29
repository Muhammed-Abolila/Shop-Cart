import axios from "axios";
import { BaseUrl, CREATE_PRODUCT, GET_ERROR,GET_ALL_PRODUCTS,GET_PRODUCT_WITH_ID
,GET_SAME_PRODUCTS,DELETE_PRODUCT,UPDATE_PRODUCT,GET_PRODUCT_SEARCH,
GET_PRODUCTS_BY_CATEGORY,GET_PRODUCTS_BY_BRAND} from "../Type/Type";
// Post product Data
export const PostProductApi=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{"Content-Type":"multipart/form-data",Authorization:` Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/products`,data,config);
            console.log(response);
            
            dispatch({
                type:CREATE_PRODUCT,
                payload:response
            })
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e,
            })
        }
    }
}
// Get All Products Data For Home Page
export const GetProductData=()=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/products`,config);
            dispatch({
                type:GET_ALL_PRODUCTS,
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
// Get Product Data Based On Page number
export const GetLimitProductApi=(pageNumber)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/products?limit=8&page=${pageNumber}`,config);            
            dispatch({
                type:GET_ALL_PRODUCTS,
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
// Get Product Data Based On Category
export const GetProductsByCat=(pageNumber,categoryId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/products?limit=8&page=${pageNumber}&category=${categoryId}`,config);            
            dispatch({
                type:GET_PRODUCTS_BY_CATEGORY,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_PRODUCTS_BY_CATEGORY,
                payload:e.response
            })
        }
    }
};
// Get Product Data Based On Brand
export const GetProductsByBrand=(pageNumber,BrandId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/products?limit=8&page=${pageNumber}&brand=${BrandId}`,config);            
            dispatch({
                type:GET_PRODUCTS_BY_BRAND,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_PRODUCTS_BY_BRAND,
                payload:e.response
            })
        }
    }
};

// Get Product Details Based On Id
export const GetProductDataWithId=(id)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/products/${id}`,config);
            dispatch({
                type:GET_PRODUCT_WITH_ID,
                payload:response.data,
            })
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e
            })
        }
    }
};
// Get Products for Productd You May Like Section
export const GetTheSameProducts=(categoryId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response= await axios.get(`${BaseUrl}/api/v1/products/?category=${categoryId}`,config);
            dispatch({
                type:GET_SAME_PRODUCTS,
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
// Delete Product
export const deleteProduct=(productId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.delete(`${BaseUrl}/api/v1/products/${productId}`,config);
            dispatch({
                type:DELETE_PRODUCT,
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
// Update Product
export const updateProduct=(productId,data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{"Content-Type":"multipart/form-data",Authorization:` Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/products/${productId}`,data,config);
            dispatch({
                type:UPDATE_PRODUCT,
                payload:response
            });
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e
            });
        }
    }
};
// Get Products For Search Page
export const GetProductSearch=(QueryString)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/products?limit=8&${QueryString}`,config);
            dispatch({
                type:GET_PRODUCT_SEARCH,
                payload:response.data,
            });
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:'Error'+e,
            });
        }
    }
}