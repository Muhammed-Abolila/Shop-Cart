import { REPASSWORD, GET_ERROR } from "../../Type/Type";

let initialValue={
    RePassword:[],
    Loading:true
}
export const RePasswordReducer=(state=initialValue,action)=>{
    switch(action.type){
        case REPASSWORD:
            return{
                RePassword:action.payload,
                Loading:false
            };
        case GET_ERROR:
            return{
                Loading:true,
                RePassword:action.payload
            }
        default:
            return state
    }
}