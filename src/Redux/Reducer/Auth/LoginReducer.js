import { USER_LOGIN, GET_ERROR } from "../../Type/Type";
let initialValue={
    userLogin:[],
    Loading:true
}
export const LoginReducer=(state=initialValue,action)=>{
    switch(action.type){
        case USER_LOGIN:
            return{
                userLogin:action.payload,
                Loading:false
            };
        case GET_ERROR:
            return{
                userLogin:action.payload,
                Loading:true
            }
        default:
            return state
    }
};