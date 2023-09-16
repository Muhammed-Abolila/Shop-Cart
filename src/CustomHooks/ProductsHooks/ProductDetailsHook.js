import { useDispatch, useSelector } from 'react-redux';
import { GetProductDataWithId, GetTheSameProducts } from '../../Redux/Actions/ProductActions';
import { GetCategoryWithId } from '../../Redux/Actions/CategoryAction';
import { GetBrandDataWithId } from '../../Redux/Actions/BrandActions';
import { useEffect, useState } from 'react';
const ProductDetailsHook = (id) => {
    let [itemId,setItemId]=useState(id)
    const reloadWhenChooseProduct=(param)=>{
      setItemId(param);
    };
    
    let dispatch=useDispatch();
    // Get Single Product Data
    useEffect(()=>{
         dispatch(GetProductDataWithId(itemId));
    },[itemId]);
    let singleProductData=useSelector((state)=>state.ProductReducer.SingleProductApi);
    // to be sure data is return without Undefined
    let oneProduct=[];
    if(singleProductData.data){
        oneProduct=singleProductData.data
    }else{
        oneProduct=[]
    }
    // Get Single Category Data 
    useEffect(()=>{
        if(oneProduct.category){
            dispatch(GetCategoryWithId(oneProduct.category));
        }
        if(oneProduct.brand){
            dispatch(GetBrandDataWithId(oneProduct.brand))
        }
        if(oneProduct.category){
            dispatch(GetTheSameProducts(oneProduct.category))
          } 
    },[oneProduct]);
    let SingleCategoryData=useSelector((state)=>state.CategoryReducer.SingleCategoryApi);
    // to be sure data is return with Out Undefined
    let oneCategory=[];
    if(SingleCategoryData.data){
        oneCategory=SingleCategoryData.data
    }else{
        oneCategory=[]
    }
    // Get Single Brand Data
    let SingleBrandData=useSelector((state)=>state.BrandReducer.SingleBrandApi); 
    // to be sure data is return with Out Undefined
    let oneBrand=[];
    if(SingleBrandData.data){
        oneBrand=SingleBrandData.data
    }else{
        oneBrand=[]
    };

  // To Show Products You May Like Section
    let SameProductData=useSelector((state)=>state.ProductReducer.SameProducts.data);
    return [oneProduct,oneCategory,oneBrand,SameProductData,reloadWhenChooseProduct]
}

export default ProductDetailsHook
