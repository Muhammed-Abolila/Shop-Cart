import axios from "axios";
import { BaseUrl, USER_LOGIN, CREATE_NEW_USER, FORGOT_PASSWORD,
     VERIFY_CODE, REPASSWORD } from "../Type/Type";
// Login Action
export const Userlogin=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/auth/login`,data,config);            
            dispatch({
                type:USER_LOGIN,
                payload:response
            })
        }catch(e){
            dispatch({
                type:USER_LOGIN,
                payload:e.response
            })
        }
    }
};
// Create New User
export const PostUserData=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/auth/signup`,data,config);            
            dispatch({
                type:CREATE_NEW_USER,
                payload:response
            })
        }catch(e){
            dispatch({
                type:CREATE_NEW_USER,
                payload:e.response
            })
        }
    }
};
//Send Email To Get Verify Code
export const SendEmialToGetVerifyCode=(email)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/auth/forgotPasswords`,email,config);       
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
};
// Send Verify Code To Repassword
export const SendVerifyCodeToRepassword=(VerifyCode)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/auth/verifyResetCode`,VerifyCode,config);                       
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
// Repassword
export const SendDataToRePassword=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/auth/resetPassword`,data,config);
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