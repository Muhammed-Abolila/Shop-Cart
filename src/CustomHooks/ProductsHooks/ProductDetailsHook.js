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
   try{
    if(singleProductData.data){
        oneProduct=singleProductData.data
    }else{
        oneProduct=[]
    }
   }catch(e){}
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
    
    try{
        if(SingleCategoryData.data){
            oneCategory=SingleCategoryData.data
        }else{
            oneCategory=[]
        }
    }catch(e){}
    // Get Single Brand Data
    let SingleBrandData=useSelector((state)=>state.BrandReducer.SingleBrandApi); 
    // to be sure data is return with Out Undefined
    let oneBrand=[];
    try{
        if(SingleBrandData.data){
            oneBrand=SingleBrandData.data
        }else{
            oneBrand=[]
        };
    }catch(e){}
  // To Show Products You May Like Section
    let SameProduct=useSelector((state)=>state.ProductReducer.SameProducts);
    let SameProductData=[]
    try{
        if(SameProduct.data){
            SameProductData=SameProduct.data
        }else{
            SameProductData=[]
        };
    }catch(e){}
    return [oneProduct,oneCategory,oneBrand,SameProductData,reloadWhenChooseProduct]
}

export default ProductDetailsHook
