import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductsByCat } from "../../Redux/Actions/ProductActions";
const ProductsByCatHook = (id) => {
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetProductsByCat(1,id))
    },[]);
    let item=useSelector((state)=>state.ProductReducer.ProductsByCategory);
    let itemData,pagination;
    try{
        if(item.data){
            itemData=item.data;
            pagination=item.paginationResult.numberOfPages
        }
    }catch(e){}
    const getPageCount=async(pageNumber)=>{
        await dispatch(GetProductsByCat(pageNumber,id))
    };
    return [itemData,pagination,getPageCount]
}

export default ProductsByCatHook
