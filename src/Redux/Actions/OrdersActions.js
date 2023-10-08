import axios from "axios";
import { BaseUrl,POST_ORDER,GET_ALL_ORDERS,GET_SPACIFIC_ORDER,CHANGE_ORDER_DELIVER, CHANGE_ORDER_PAID } from "../Type/Type";

// post order
export const PostOrder=(cartId,data)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.post(`${BaseUrl}/api/v1/orders/${cartId}`,data,config);
            dispatch({
                type:POST_ORDER,
                payload:response,
            })
        }catch(e){
            dispatch({
                type:POST_ORDER,
                payload:e.response,
            })
        }
    }
};
// get all orders
export const GetAllOrders=(pageNumber)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/orders?page=${pageNumber}&limit=3`,config);
            dispatch({
                type:GET_ALL_ORDERS,
                payload:response.data
            });
        }catch(e){
            dispatch({
                type:GET_ALL_ORDERS,
                payload:e.response
            });
        }
    }
};
// get spacific order for admin
export const GetSpacificOrder=(orderId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.get(`${BaseUrl}/api/v1/orders/${orderId}`,config);
            dispatch({
                type:GET_SPACIFIC_ORDER,
                payload:response.data
            });
        }catch(e){
            dispatch({
                type:GET_SPACIFIC_ORDER,
                payload:e.response
            });
        }
    }
};
// Change Order Paid
export const ChangeOrderPaid=(order_Id)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/orders/${order_Id}/pay`,config)
            dispatch({
                type:CHANGE_ORDER_PAID,
                payload:response.data
            })
        }catch(e){
            dispatch({
                type:CHANGE_ORDER_PAID,
                payload:e.response
            })
        }
    };
};
// Change Order deliver
export const ChangeOrderDeliver=(orderId)=>{
    return async(dispatch)=>{
        try{
            let config={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};
            let response=await axios.put(`${BaseUrl}/api/v1/orders/${orderId}/deliver`,config);
            dispatch({
                type:CHANGE_ORDER_DELIVER,
                payload:response.data
            });
        }catch(e){
            dispatch({
                type:CHANGE_ORDER_DELIVER,
                payload:e.response
            });
        }
    }
};