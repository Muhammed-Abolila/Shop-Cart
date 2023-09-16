import { FETCH_CATEGORY_API, GET_ERROR,CREATE_CATEGORY, GET_CATEGORY_DATA_WITH_ID } from "../Type/Type";
let InitValue={
    PostCategoryApi:[],
    GetCategoryApi:[],
    SingleCategoryApi:[],
    loading:true
};
export const CategoryReducer=(state=InitValue,action)=>{
    switch(action.type){
        case CREATE_CATEGORY:
            return{
                ...state,
                PostCategoryApi:action.payload,
                loading:false,
            }
        case FETCH_CATEGORY_API:
            return {
                ...state,
                GetCategoryApi:action.payload,
                loading:false,
            }; 
        
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