import { CREATE_RATE, GET_ALL_REVIEWS, DELETE_REVIEW, UPDATE_COMMENT } from "../Type/Type";
let initialValue={
    CreateRate:[],
    AllReviews:[],
    DeleteReview:[],
    UpdateReview:[],
    Loading:true
}
export const RateAndReviewReducers=(state=initialValue,action)=>{
    switch(action.type){
        case CREATE_RATE:
            return{
                ...state,
                CreateRate:action.payload,
                Loading:false
            }
        case GET_ALL_REVIEWS:
            return{
                ...state,
                AllReviews:action.payload,
                Loading:false
            }
        case DELETE_REVIEW:
            return{
                ...state,
                DeleteReview:action.payload,
                Loading:false
            }
        case UPDATE_COMMENT:
            return{
                ...state,
                UpdateReview:action.payload,
                Loading:false
            }
        default:
            return state
    }
}