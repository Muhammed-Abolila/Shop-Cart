import { FETCH_CATEGORY_API, GET_ERROR,CREATE_CATEGORY, GET_CATEGORY_DATA_WITH_ID } from "../Type/Type";
let InitValue={
    CategoryApi:[],
    SingleCategoryApi:[],
    loading:true
};
export const CategoryReducer=(state=InitValue,action)=>{
    switch(action.type){
        case FETCH_CATEGORY_API:
            return {
                ...state,
                CategoryApi:action.payload,
                loading:false,
            }; 
        case CREATE_CATEGORY:
            return{
                ...state,
                CategoryApi:action.payload,
                loading:false,
            }
        case GET_CATEGORY_DATA_WITH_ID:
            return{
                SingleCategoryApi:action.payload,
                loading:false,
                }
        case GET_ERROR:
            return{
                    loading:true,
                    CategoryApi:action.payload,
                }
         default:
            return state
    }
}; 