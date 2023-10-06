import axios from "axios";
import { BaseUrl,POST_ORDER,GET_ALL_ORDERS } from "../Type/Type";

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
// get all orders for user
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
}