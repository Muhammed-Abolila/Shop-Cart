import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLimitProductApi, deleteProduct} from "../../Redux/Actions/ProductActions";
const AdminManageProductHook=()=>{
    let dispatch=useDispatch();
    let [reloadAfterDelete,setReloadAfterDelete]=useState(false)
    useEffect(()=>{
        dispatch(GetLimitProductApi())
    },[reloadAfterDelete]); 
    let product=useSelector((state)=>state.ProductReducer.AllProductApi);
    let productData,PaginationData;
    try{
    if(product.data){
        productData=product.data;
        PaginationData=product.paginationResult.numberOfPages;
    }else{
        productData=[];
        PaginationData={}
    };
    }catch(e){}
    const getPageCount=(param)=>{
         dispatch(GetLimitProductApi(param))
    };
    // Delete Product
    const onDeleteProduct=async(productId)=>{
        await dispatch(deleteProduct(productId));
        setReloadAfterDelete(!reloadAfterDelete)
    }
    return [productData,onDeleteProduct,PaginationData,getPageCount]
};
export default AdminManageProductHook;