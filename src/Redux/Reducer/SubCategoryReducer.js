import { GET_ERROR, CREATE_SUB_CATEGORY } from "../Type/Type";
let intialValue={
    subCategoryApi:[],
    Loading:true,
}
 export const subCategoryReducer=(state=intialValue,action)=>{
    switch(action.type){
        case CREATE_SUB_CATEGORY:
            return{
                ...state,
                subCategoryApi:action.payload,
                Loading:false
            };
        case GET_ERROR:
            return{
                subCategoryApi:action.payload,
                Loading:true
            }
            default:
                return state
        }
 }