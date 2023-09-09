import { FETCH_BRAND_API, GET_ERROR, CREATE_BRAND, GET_BRAND_API_WITH_ID } from "../Type/Type";
let intialValue={
    BrandApi:[],
    SingleBrandApi:[],
    Loading:true
}
export const BrandReducer=(state=intialValue,action)=>{
    switch(action.type){
        case CREATE_BRAND:
            return{
                BrandApi:action.payload,
                Loading:false
            }
        case FETCH_BRAND_API:
            return{
                ...state,
                BrandApi:action.payload,
                Loading:false
            };
        case GET_BRAND_API_WITH_ID:
            return{
                SingleBrandApi:action.payload,
                Loading:false
            };
        case GET_ERROR:
            return{
                Loading:true,
                BrandApi:action.payload
            };
        default:
            return state
    }
};
