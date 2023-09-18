import { CREATE_NEW_USER, GET_ERROR } from "../../Type/Type";
let initialValue={
    CreateUser:[],
    Loading:true
}
export const RegisterReducer=(state=initialValue,action)=>{
    switch(action.type){
        case CREATE_NEW_USER:
        return{
            ...state,
            CreateUser:action.payload,
            Loading:false
        };
        case GET_ERROR:
            return{
                Loading:true,
                CreateUser:action.payload,
        }
        default:
            return state;
    }
}