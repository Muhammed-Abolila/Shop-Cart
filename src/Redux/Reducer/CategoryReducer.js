import { FETCH_CATEGORY_API, GET_ERROR,CREATE_CATEGORY } from "../Type/Type";
let InitValue={
    CategoryApi:[],
    Pages:0,
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
        case GET_ERROR:
            return{
                    loading:true,
                    CategoryApi:action.payload,
                }
         default:
            return state
    }
}; 