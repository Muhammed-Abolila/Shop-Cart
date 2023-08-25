import { FETCH_BRAND_API, GET_ERROR, CREATE_BRAND } from "../Type/Type";
let intialValue={
    BrandApi:[],
    Loading:true
}
export const BrandReducer=(state=intialValue,action)=>{
    switch(action.type){
        case FETCH_BRAND_API:
            return{
                ...state,
                BrandApi:action.payload,
                Loading:false
            };
        case CREATE_BRAND:
            return{
                BrandApi:action.payload,
                Loading:false
            }
        case GET_ERROR:
            return{
                Loading:true,
                BrandApi:action.payload
            };
        default:
            return state
    }
};
