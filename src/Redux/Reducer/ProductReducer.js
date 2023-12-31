import { GET_ERROR, CREATE_PRODUCT, GET_ALL_PRODUCTS,GET_PRODUCT_WITH_ID, 
     GET_SAME_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT,GET_PRODUCT_SEARCH,
     GET_PRODUCTS_BY_CATEGORY,GET_PRODUCTS_BY_BRAND } from "../Type/Type";
let intialValue={
    CreateProductApi:[],
    AllProductApi:[],
    SingleProductApi:[],
    ProductsByCategory:[],
    ProductsByBrand:[],
    SameProducts:[],
    DeleteProduct:[],
    UpdateProductApi:[],
    SearchProductApi:[],
    Loading:true,
}
export const ProductReducer=(state=intialValue,action)=>{
    switch(action.type){
        case CREATE_PRODUCT:
            return{
                CreateProductApi:action.payload,
                Loading:false
            };
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                AllProductApi:action.payload,
                Loading:false,
            }
        case GET_PRODUCT_WITH_ID:
            return{
                ...state,
                SingleProductApi:action.payload,
                Loading:false
            }
        case GET_PRODUCTS_BY_CATEGORY:
            return{
                ...state,
                ProductsByCategory:action.payload,
                Loading:false
            }
        case GET_PRODUCTS_BY_BRAND:
            return{
                ...state,
                ProductsByBrand:action.payload,
                Loading:false
            }
        case GET_SAME_PRODUCTS:
            return{
                ...state,
                SameProducts:action.payload,
                Loading:false,
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                DeleteProduct:action.payload,
                Loading:false,
            }
        case UPDATE_PRODUCT:
            return{
                UpdateProductApi:action.payload,
                Loading:false
            }
        case GET_ERROR:
            return{
                ProductApi:action.payload,
                Loading:true
            }
        case GET_PRODUCT_SEARCH:
            return{
                ...state,
                SearchProductApi:action.payload,
                Loading:false,
            }
            default:
                return state
    }
};