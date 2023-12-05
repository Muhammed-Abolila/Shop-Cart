import { useDispatch, useSelector } from 'react-redux';
import { GetProductDataWithId, GetTheSameProducts } from '../../Redux/Actions/ProductActions';
import { GetCategoryWithId } from '../../Redux/Actions/CategoryAction';
import { GetBrandDataWithId } from '../../Redux/Actions/BrandActions';
import { useEffect} from 'react';
const ProductDetailsHook = (id) => {
    let dispatch=useDispatch();
    // Get Single Product Data
    useEffect(()=>{
         dispatch(GetProductDataWithId(id));
    },[id]);
     // Get Single Product and Brand and Category Data
     let singleProductData=useSelector((state)=>state.ProductReducer.SingleProductApi);
     let SingleBrandData=useSelector((state)=>state.BrandReducer.SingleBrandApi); 
     let SingleCategoryData=useSelector((state)=>state.CategoryReducer.SingleCategoryApi);
     // To Show Products You May Like Section
     let SameProduct=useSelector((state)=>state.ProductReducer.SameProducts);
    // to be sure data is return without Undefined
    let oneProduct,oneCategory,oneBrand,SameProductData;
   try{
    if(singleProductData.data){
        oneProduct=singleProductData.data
    }
    if(SingleCategoryData.data){
        oneCategory=SingleCategoryData.data
    }
    if(SingleBrandData.data){
        oneBrand=SingleBrandData.data
    }
    if(SameProduct.data){
        SameProductData=SameProduct.data.slice(0,4)
    }
   }catch(e){}
    // Get Single Category Data 
    useEffect(()=>{
        if(oneProduct){
        if(oneProduct.category){
            dispatch(GetCategoryWithId(oneProduct.category));
            dispatch(GetTheSameProducts(oneProduct.category))
        }
        if(oneProduct.brand){
            dispatch(GetBrandDataWithId(oneProduct.brand))
        }
    }
    },[oneProduct]);
    return [oneProduct,oneCategory,oneBrand,SameProductData]
}

export default ProductDetailsHook
