import { POST_ADDRESS, GET_ALL_ADDRESSES,DELETE_ADDRESS, GET_SPACIFIC_ADDRESS, UPDATE_ADDRESS } from "../Type/Type";
let initialValue={
    CreateAddress:[],
    AllAddresses:[],
    DeleteAddress:[],
    GetSpacificAddress:[],
    UpdateAddress:[],
};
export const AddressReducers=(state=initialValue,action)=>{
    switch(action.type){
        case POST_ADDRESS:
            return{
                ...state,
                CreateAddress:action.payload
            };
        case GET_ALL_ADDRESSES:
            return{
                ...state,
                AllAddresses:action.payload
            };
        case DELETE_ADDRESS:
            return{
                ...state,
                DeleteAddress:action.payload
            };
        case GET_SPACIFIC_ADDRESS:
            return{
                ...state,
                GetSpacificAddress:action.payload
            };
        case UPDATE_ADDRESS:
            return{
                ...state,
                UpdateAddress:action.payload
            };
        default:
            return state
    }
};