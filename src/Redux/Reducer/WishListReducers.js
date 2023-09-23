import { ADD_TO_WASH_LIST, DELETE_FROM_WISH_LIST, GET_ALL_WISH_LIST } from "../Type/Type";
let initilValue={
    AddToWishList:[],
    WishListProduct:[],
    DeleteFromWishList:[],
    Loading:true,
}
export const WishListReducers=(state=initilValue,action)=>{
    switch(action.type){
        case ADD_TO_WASH_LIST:
            return{
                ...state,
                AddToWishList:action.payload,
                Loading:false
            }
        case GET_ALL_WISH_LIST:
            return{
                ...state,
                WishListProduct:action.payload,
                Loading:false
            }
        case DELETE_FROM_WISH_LIST:
            return{
                ...state,
                DeleteFromWishList:action.payload,
                Loading:false
            }
        default:
            return state
    }
}