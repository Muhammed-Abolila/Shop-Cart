import axios from "axios";
import { BaseUrl, USER_LOGIN, GET_ERROR } from "../../Type/Type";
export const Userlogin=(data)=>{
    return async(dispatch)=>{
        try{
            let response=await axios.post(`${BaseUrl}/api/v1/auth/login`,data);            
            dispatch({
                type:USER_LOGIN,
                payload:response
            })
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:e.response
            })
        }
    }
}