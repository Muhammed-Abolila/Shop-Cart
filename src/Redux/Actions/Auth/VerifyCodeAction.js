import axios from "axios";
import { VERIFY_CODE, GET_ERROR, BaseUrl } from "../../Type/Type";
// Send Verify Code To Repassword
export const SendVerifyCodeToRepassword=(VerifyCode)=>{
    return async(dispatch)=>{
        try{
            let response=await axios.post(`${BaseUrl}/api/v1/auth/verifyResetCode`,VerifyCode);                       
            dispatch({
                type:VERIFY_CODE,
                payload:response
            })
        }catch(e){
            dispatch({
                type:VERIFY_CODE,
                payload:e.response
            })
        }
    }
};