import axios from "axios";
import { BaseUrl, REPASSWORD } from "../../Type/Type";
export const SendDataToRePassword=(data)=>{
    return async(dispatch)=>{
        try{
            let response=await axios.put(`${BaseUrl}/api/v1/auth/resetPassword`,data);
            dispatch({
                type:REPASSWORD,
                payload:response
            })
        }catch(e){
            dispatch({
                type:REPASSWORD,
                payload:e.response
            })
        }
    }
}