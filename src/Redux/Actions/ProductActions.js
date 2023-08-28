import axios from "axios";
import { BaseUrl, CREATE_PRODUCT, GET_ERROR } from "../Type/Type";





export const PostProductApi=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{"Content-Type":"multipart/form-data"}}
            let response=await axios.post(`${BaseUrl}/api/v1/products`,data,config)
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