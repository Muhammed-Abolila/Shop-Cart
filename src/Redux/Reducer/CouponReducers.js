import { CREATE_COUPON,GET_ALL_COUPONS,DELETE_COUPON,UPDATE_COUPON} from "../Type/Type";
let initialValue={
    CreateCoupon:[],
    AllCoupons:[],
    DeleteCoupon:[],
    UpdateCoupon:[],
    Loading:true
}
export const CouponReducers=(state=initialValue,action)=>{
    switch(action.type){
        case CREATE_COUPON:
            return{
                ...state,
                CreateCoupon:action.payload,
                Loading:false
            }
        case GET_ALL_COUPONS:
            return{
                ...state,
                AllCoupons:action.payload,
                Loading:false
            }
        case DELETE_COUPON:
            return{
                ...state,
                DeleteCoupon:action.payload,
                Loading:false
            }
        case UPDATE_COUPON:
            return{
                ...state,
                UpdateCoupon:action.payload,
                Loading:false
            }
        default:
            return state
    }
}