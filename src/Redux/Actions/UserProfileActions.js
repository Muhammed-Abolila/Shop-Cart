import axios from "axios";
import { BaseUrl,UPDATE_USER_PROFILE,UPDATE_USER_PASSWORD} from "../Type/Type";
// Update User Profile Data
export const UpdateUserProfileData=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/users/updateMe`,data,config);            
            dispatch({
                type:UPDATE_USER_PROFILE,
                payload:response
            })
        }catch(e){
            dispatch({
                type:UPDATE_USER_PROFILE,
                payload:e.response
            })
        }
    }
};
// User Update Password
export const UpdateUserPassword=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/users/changeMyPassword`,data,config);                        
            dispatch({
                type:UPDATE_USER_PASSWORD,
                payload:response
            })
        }catch(e){
            dispatch({
                type:UPDATE_USER_PASSWORD,
                payload:e.response
            })
        }
    }
};