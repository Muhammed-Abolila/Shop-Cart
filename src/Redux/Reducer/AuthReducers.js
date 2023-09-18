import { USER_LOGIN, CREATE_NEW_USER, FORGOT_PASSWORD, VERIFY_CODE, REPASSWORD } from "../Type/Type";
let initialValue={
    CreateUser:[],
    userLogin:[],
    ForgotPassword:[],
    VerifyCode:[],
    RePassword:[],
    Loading:true
}
export const AuthReducers=(state=initialValue,action)=>{
    switch(action.type){
        case CREATE_NEW_USER:
            return{
                ...state,
                CreateUser:action.payload,
                Loading:false
            };
        case USER_LOGIN:
            return{
                ...state,
                userLogin:action.payload,
                Loading:false
            };
        case FORGOT_PASSWORD:
            return{
                ...state,
                ForgotPassword:action.payload,
                Loading:false,
            };
        case VERIFY_CODE:
            return{
                ...state,
                VerifyCode:action.payload,
                Loding:false 
            };
        case REPASSWORD:
            return{
                ...state,
                RePassword:action.payload,
                Loading:false
            };
        default:
            return state
    }
};