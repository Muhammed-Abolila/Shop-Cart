import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBrandsApi } from '../../Redux/Actions/BrandActions';
import { getCategoryApi } from '../../Redux/Actions/CategoryAction';
import { GetProductData } from '../../Redux/Actions/ProductActions';
const HomePageHook = () => {
    let backgroundColor=["#ffd3e8","#f4dba5","#55cfdf","#0034ff","#ffd3e8","#f4dba5"];
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getCategoryApi())
        dispatch(GetProductData());
        dispatch(getBrandsApi())
    },[]);
    let CategoryData=useSelector((state)=>state.CategoryReducer.CategoryApi);
    let HomeProductData=useSelector((state)=>state.ProductReducer.AllProductApi.data);
    let BrandData=useSelector((state)=>state.BrandReducer.BrandApi);
    return [CategoryData,HomeProductData,BrandData,backgroundColor]
}
export default HomePageHook
