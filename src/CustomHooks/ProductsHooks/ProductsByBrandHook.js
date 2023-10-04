import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductsByBrand} from "../../Redux/Actions/ProductActions";
const ProductsByBrandHook = (id) => {
    let dispatch=useDispatch();
    useEffect(() => {
        const getProductsByBrand=async()=>{
            await dispatch(GetProductsByBrand(1,id))
        };
        getProductsByBrand()
    }, []);
    let productBrand=useSelector((state)=>state.ProductReducer.ProductsByBrand);
    let productBrandData=[];
    let pagination=0;
    try{
        if(productBrand.data){
            productBrandData=productBrand.data;
            pagination=productBrand.paginationResult.numberOfPages
        }
    }catch(e){};
    const getPageCount=async(pageNumber)=>{
        await dispatch(GetProductsByBrand(pageNumber,id))
    };
    return [productBrandData,pagination,getPageCount]
}

export default ProductsByBrandHook
