import axios from "axios";
import { BaseUrl,POST_ADDRESS,GET_ALL_ADDRESSES,DELETE_ADDRESS,GET_SPACIFIC_ADDRESS,UPDATE_ADDRESS} from "../Type/Type";
//  Post New Address
export const PostAddressData=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/addresses`,data,config);
            dispatch({
                type:POST_ADDRESS,
                payload:response
            })
        }catch(e){
            dispatch({
                type:POST_ADDRESS,
                payload:e.response
            })
        }
    }
};
// Get All Addresses
export const GetAllAddresses=()=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/addresses`,config);
            dispatch({
                type:GET_ALL_ADDRESSES,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_ALL_ADDRESSES,
                payload:e.response
            })
        }
    }
};
// delete Addresse
export const DeleteAddresse=(addressId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.delete(`${BaseUrl}/api/v1/addresses/${addressId}`,config);
            dispatch({
                type:DELETE_ADDRESS,
                payload:response
            })
        }catch(e){
            dispatch({
                type:DELETE_ADDRESS,
                payload:e.response
            })
        }
    }
};
// Get Spacific Addresse
export const GetSpacificAddresse=(addressId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/addresses/${addressId}`,config);
            dispatch({
                type:GET_SPACIFIC_ADDRESS,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_SPACIFIC_ADDRESS,
                payload:e.response
            })
        }
}};
//  Update Address
export const UpdateAddress=(addressId,data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/addresses/${addressId}`,data,config);
            dispatch({
                type:UPDATE_ADDRESS,
                payload:response
            })
        }catch(e){
            dispatch({
                type:UPDATE_ADDRESS,
                payload:e.response
            })
        }
    }
};