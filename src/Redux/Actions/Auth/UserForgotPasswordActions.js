import axios from "axios";
import { BaseUrl, FORGOT_PASSWORD, GET_ERROR } from "../../Type/Type";
// sSend Email To Get Verify Code
export const SendEmialToGetVerifyCode=(email)=>{
    return async(dispatch)=>{
        try{
            let response=await axios.post(`${BaseUrl}/api/v1/auth/forgotPasswords`,email);       
            dispatch({
                type:FORGOT_PASSWORD,
                payload:response
            })
        }catch(e){
            dispatch({
                type:FORGOT_PASSWORD,
                payload:e.response
            })
        }
    }
}