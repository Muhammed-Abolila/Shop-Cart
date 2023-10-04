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
    let CategoryResponse=useSelector((state)=>state.CategoryReducer.GetCategoryApi);
    let HomeProductResponse=useSelector((state)=>state.ProductReducer.AllProductApi);
    let BrandResponse=useSelector((state)=>state.BrandReducer.GetAllBrandApi);
    let CategoryData,HomeProductData,BrandData;
    try{
        if(CategoryResponse.data){
            CategoryData=CategoryResponse.data.slice(0,5)
        }
        if(HomeProductResponse.data){
            HomeProductData=HomeProductResponse.data.slice(0,4)
        }
        if(BrandResponse.data){
            BrandData=BrandResponse.data.slice(0,5)
        }
    }catch(e){}
    return [CategoryData,HomeProductData,BrandData,backgroundColor]
}
export default HomePageHook
