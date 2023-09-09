import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetProductData } from '../../Redux/Actions/ProductActions';
const ProductContainerHook = () => {
    let dispatch=useDispatch()
    useEffect(()=>{
      dispatch(GetProductData())
    },[]);
    let HomeProductData=useSelector((state)=>state.ProductReducer.AllProductApi);
    return [HomeProductData]
}
export default ProductContainerHook
