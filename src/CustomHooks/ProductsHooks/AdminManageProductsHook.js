import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLimitProductApi, deleteProduct} from "../../Redux/Actions/ProductActions";
const AdminManageProductHook=()=>{
    let dispatch=useDispatch()
    let [showModal,setShowModal]=useState(false);
    let [productIdToDelete,setProductIdToDelete]=useState('');
    let [productName,setProductName]=useState("")
    const showModalFunc=(productData)=>{
        setShowModal(!showModal);
        setProductIdToDelete(productData._id);
        setProductName(productData.title)
    }
    useEffect(()=>{
        dispatch(GetLimitProductApi())
    },[]); 
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
    return [productData,showModalFunc,PaginationData,getPageCount,
        showModal,productName,productIdToDelete]
};
export default AdminManageProductHook;