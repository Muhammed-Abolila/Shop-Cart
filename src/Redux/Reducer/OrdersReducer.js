import { POST_ORDER, GET_ALL_ORDERS } from "../Type/Type";
let initialValue={
    postOrder:[],
    GetAllOrders:[],
}
export const OrderReducer=(state=initialValue,action)=>{
    switch(action.type){
        case POST_ORDER:
            return{
                ...state,
                postOrder:action.payload
            };
        case GET_ALL_ORDERS:
            return{
                ...state,
                GetAllOrders:action.payload
            };
        default:
            return state
    }
}