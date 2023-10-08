import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllOrders } from '../../Redux/Actions/OrdersActions';
const UserAllOrdersPageHook = () => {
    let [reloadAfterChange,setReloadAfterChange]=useState(false)
    let user;
    if(localStorage.getItem("user")!=null){
        user=JSON.parse(localStorage.getItem("user"));
    };
    let dispatch=useDispatch();
    useEffect(()=>{
        const GetOrders=async()=>{
            await dispatch(GetAllOrders(''))
        };
        GetOrders();
    },[reloadAfterChange]);
    let ordersResponse=useSelector((state)=>state.OrderReducer.GetAllOrders);
    let ordersResponseData=[];

    let pagination=0;
    try{
        if(ordersResponse.data){
            ordersResponseData=ordersResponse.data;
            pagination=ordersResponse.paginationResult.numberOfPages
        }
    }catch(e){};
    const getPageCount=async(pageNumber)=>{
        await dispatch(GetAllOrders(pageNumber))
    };
    return [user,ordersResponse,ordersResponseData,pagination,getPageCount,reloadAfterChange,setReloadAfterChange]
}

export default UserAllOrdersPageHook
