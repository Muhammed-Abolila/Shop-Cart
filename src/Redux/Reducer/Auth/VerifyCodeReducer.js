import { GET_ERROR,VERIFY_CODE } from "../../Type/Type";
let initialValue={
    VerifyCode:[],
    Loading:true
}
export const VerifyReducer=(state=initialValue,action)=>{
    switch(action.type){
        case VERIFY_CODE:
            return{
                VerifyCode:action.payload,
                Loding:false 
            };
        case GET_ERROR:
            return{
                Loding:true,
                VerifyCode:action.payload,
            }
        default:
            return state
    }
};