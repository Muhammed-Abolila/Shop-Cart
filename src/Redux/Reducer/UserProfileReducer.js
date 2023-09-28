import { UPDATE_USER_PROFILE, UPDATE_USER_PASSWORD } from "../Type/Type";
let intialValue={
    UpdateUserProfile:[],
    UpdateUserPassWord:[],
}
 export const UserProfileReducer=(state=intialValue,action)=>{
    switch(action.type){
        case UPDATE_USER_PROFILE:
            return{
                ...state,
                UpdateUserProfile:action.payload,
            };
        case UPDATE_USER_PASSWORD:
            return{
                ...state,
                UpdateUserPassWord:action.payload,
            };
            default:
                return state
        }
 }