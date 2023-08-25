import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLimitBrandsApi } from '../../Redux/Actions/BrandActions';

const AllBrandsPageHook = () => {
    let AllBrandsData=useSelector((state)=>state.BrandReducer.BrandApi.data);
    let Loading=useSelector((state)=>state.BrandReducer.Loading);
    let Pagination=useSelector((state)=>state.BrandReducer.BrandApi.paginationResult);
    let dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getLimitBrandsApi(1))
    },[]);
    function getPageCount(param){
      dispatch(getLimitBrandsApi(param))
    }
  return [AllBrandsData,Loading,Pagination,getPageCount]
}

export default AllBrandsPageHook
