import { BaseUrl, GET_ERROR ,CREATE_NEW_USER} from "../../Type/Type";
import axios from "axios";

// Create New User
export const PostUserData=(data)=>{
    return async(dispatch)=>{
        try{
            let response=await axios.post(`${BaseUrl}/api/v1/auth/signup`,data);            
            dispatch({
                type:CREATE_NEW_USER,
                payload:response
            })
        }catch(e){
            dispatch({
                type:GET_ERROR,
                payload:e.response
            })
        }
    }
};