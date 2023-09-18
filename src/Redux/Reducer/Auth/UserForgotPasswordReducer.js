import { GET_ERROR,FORGOT_PASSWORD } from "../../Type/Type";

let initialValue={
    ForgotPassword:[],
    Loading:true
}
export const ForgotPasswordReducer=(state=initialValue,action)=>{
    switch(action.type){
        case FORGOT_PASSWORD:
            return{
                ForgotPassword:action.payload,
                Loading:false,
            };
        case GET_ERROR:
            return{
                Loading:true,
                ForgotPassword:action.payload,
            }
        default:
            return state;
    }
}