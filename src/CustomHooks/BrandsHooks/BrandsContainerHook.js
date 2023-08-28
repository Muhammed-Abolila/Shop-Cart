import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getBrandsApi } from '../../Redux/Actions/BrandActions';
const BrandsContainerHook = () => {
    let BrandData=useSelector((state)=>state.BrandReducer.BrandApi.data);
    let dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getBrandsApi())
    },[])
    return [BrandData]
}

export default BrandsContainerHook
