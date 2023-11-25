import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeOrderDeliver, ChangeOrderPaid } from '../../Redux/Actions/OrdersActions';
import Notifications from '../../CustomHooks/Notifications';
const AdminAllOrdersHook = (ordersData,reloadAfterChange,setReloadAfterChange) => {
  let [isPaid,setIsPaid]=useState('');
  let [isDeliver,setIsDeliver]=useState('');
  let [paidLoading,setPaidLoading]=useState(false);
  let [deliverLoading,setDeliverLoading]=useState(false);
  let dispatch=useDispatch();
  // Change Paid Status
  const isPaidChange=(param)=>{
      setIsPaid(param);
  };
  let paidResponse=useSelector((state)=>state.OrderReducer.OrderPaid);
  let [notify]=Notifications(paidResponse)
  const onSendPaid=async()=>{
      if(isPaid===''){
          notify("Choose Status");
      }else if(isPaid==false){
          notify("Can not change status to not done")
      }else if(isPaid==true){
          setPaidLoading(true)
          await dispatch(ChangeOrderPaid(ordersData._id));
          setReloadAfterChange(!reloadAfterChange);
          setPaidLoading(false)
      }
  };
  useEffect(()=>{
    if(paidLoading===false){
      if(paidResponse.status=="Success"){
        notify("Success")
      }
    }
  },[paidLoading]);
  // Change Deliver Status
  const isDeliverChange=(param)=>{
    setIsDeliver(param)
  };
  const onSendDeliver=async()=>{
    if(isDeliver===""){
      notify("Choose Status");
    }else if(isDeliver===false){
      notify("Can not change status to not delivered")
    }else if(isDeliver===true){
      setDeliverLoading(true);
      await dispatch(ChangeOrderDeliver(ordersData._id));
      setReloadAfterChange(!reloadAfterChange);
      setDeliverLoading(false);
    }
  };
  let deliverResponse=useSelector((state)=>state.OrderReducer.OrderDeliver);
  useEffect(()=>{
    if(deliverLoading===false){
      if(deliverResponse.status=="Success"){
        notify("Success")
      }
    }
  },[deliverLoading]);
    return [isPaidChange,onSendPaid,isDeliverChange,onSendDeliver]
};
export default AdminAllOrdersHook
