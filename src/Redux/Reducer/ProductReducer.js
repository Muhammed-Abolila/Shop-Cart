import { GET_ERROR, CREATE_PRODUCT } from "../Type/Type";
let intialValue={
    ProductApi:[],
    Loading:true
}
export const ProductReducer=(state=intialValue,action)=>{
    switch(action.type){
        case CREATE_PRODUCT:
            return{
                ...state,
                ProductApi:action.payload,
                Loading:false
            };
        case GET_ERROR:
            return{
                ProductApi:action.payload,
                Loading:true
            }
            default:
                return state
    }
}