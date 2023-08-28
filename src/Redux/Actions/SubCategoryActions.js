import axios from "axios";
import { BaseUrl, CREATE_SUB_CATEGORY, GET_ERROR } from "../Type/Type";

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
 }