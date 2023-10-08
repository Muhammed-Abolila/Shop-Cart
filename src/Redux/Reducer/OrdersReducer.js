import { POST_ORDER, GET_ALL_ORDERS, GET_SPACIFIC_ORDER, CHANGE_ORDER_DELIVER, CHANGE_ORDER_PAID } from "../Type/Type";
let initialValue={
    postOrder:[],
    GetAllOrders:[],
    GetSpacificOrder:[],
    OrderPaid:[],
    OrderDeliver:[],
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
        case GET_SPACIFIC_ORDER:
            return{
                ...state,
                GetSpacificOrder:action.payload
            };
        case CHANGE_ORDER_PAID:
            return{
                ...state,
                OrderPaid:action.payload
            };
        case CHANGE_ORDER_DELIVER:
            return{
                ...state,
                OrderDeliver:action.payload
            };
        default:
            return state
    }
}