import { GET_ERROR, CREATE_SUB_CATEGORY, GET_SUB_CATEGORY_WITH_CATEGORY_ID } from "../Type/Type";
let intialValue={
    subCategoryApi:[],
    Loading:true,
}
 export const subCategoryReducer=(state=intialValue,action)=>{
    switch(action.type){
        case CREATE_SUB_CATEGORY:
            return{
                subCategoryApi:action.payload,
                Loading:false
            }; 
        case GET_SUB_CATEGORY_WITH_CATEGORY_ID:
            return{
                subCategoryApi:action.payload,
                Loading:false
            }
        case GET_ERROR:
            return{
                subCategoryApi:action.payload,
                Loading:true
            }
            default:
                return state
        }
 }