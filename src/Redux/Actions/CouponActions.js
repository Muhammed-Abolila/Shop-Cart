import axios from "axios";
import { BaseUrl,CREATE_COUPON,GET_ALL_COUPONS,DELETE_COUPON,UPDATE_COUPON} from "../Type/Type";
// Admin Create Coupon
export const AdminCreateCoupon=(data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/coupons`,data,config);
            dispatch({
                type:CREATE_COUPON,
                payload:response
            })
        }catch(e){
            dispatch({
                type:CREATE_COUPON,
                payload:e.response
            })
        }
    }
};
// Get All Coupons
export const GetAllCoupons=()=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/coupons`,config);
            dispatch({
                type:GET_ALL_COUPONS,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:GET_ALL_COUPONS,
                payload:e.response
            })
        }
    }
};
// Delete Coupon
export const DeleteCoupon=(couponId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.delete(`${BaseUrl}/api/v1/coupons/${couponId}`,config);
            dispatch({
                type:DELETE_COUPON,
                payload:response
            })
        }catch(e){
            dispatch({
                type:DELETE_COUPON,
                payload:e.response
            })
        }
    }
};
// Admin Update Coupon
export const AdminUpdateCoupon=(couponId,data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/coupons/${couponId}`,data,config);
            dispatch({
                type:UPDATE_COUPON,
                payload:response
            })
        }catch(e){
            dispatch({
                type:UPDATE_COUPON,
                payload:e.response
            })
        }
    }
};