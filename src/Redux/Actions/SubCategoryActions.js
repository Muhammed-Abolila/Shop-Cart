import axios from "axios";
import { BaseUrl, CREATE_SUB_CATEGORY, GET_ERROR ,GET_SUB_CATEGORY_WITH_CATEGORY_ID} from "../Type/Type";
// Admin Add subCategory Page
export const postSubCategoryData=(data)=>{
     return async(dispatch)=>{
         try{
             let response= await axios.post(`${BaseUrl}/api/v1/subcategories`,data);             
             dispatch({
                 type:CREATE_SUB_CATEGORY,
                 payload:response
                })
         }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:"Error"+e
               })
         }
     }
 }; 

 // Fetch subCategory Api Depend On Main Category Id For Add Product Page

export const getSubCategoryDataWithMaincategoryId=(CategoryId)=>{
    return async(dispatch)=>{
        try{
            let response=await axios.get(`${BaseUrl}/api/v1/categories/${CategoryId}/subcategories`);
            dispatch({
                type:GET_SUB_CATEGORY_WITH_CATEGORY_ID,
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
















