import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeOrderDeliver, ChangeOrderPaid } from '../../Redux/Actions/OrdersActions';
import Notifications from '../../CustomHooks/Notifications';
const AdminAllOrdersHook = (ordersData,reloadAfterChange,setReloadAfterChange) => {
  let [isPaid,setIsPaid]=useState('0');
  let [isDeliver,setIsDeliver]=useState('0');
  let [paidLoading,setPaidLoading]=useState(false);
  let [deliverLoading,setDeliverLoading]=useState(false);
  let dispatch=useDispatch();
  // Change Paid Status
  const isPaidChange=(e)=>{
      setIsPaid(e.target.value);
  };
  let paidResponse=useSelector((state)=>state.OrderReducer.OrderPaid);
  let [notify]=Notifications(paidResponse)
  const onSendPaid=async()=>{
      if(isPaid=="0"){
          notify("اختر قيمه");
      }else if(isPaid=="false"){
          notify("لايمكن تغيير الحاله الي لم يتم الدفع")
      }else if(isPaid=="true"){
          setPaidLoading(true)
          await dispatch(ChangeOrderPaid(ordersData._id));
          setReloadAfterChange(!reloadAfterChange);
          setPaidLoading(false)
      }
  };
  useEffect(()=>{
    if(paidLoading===false){
      if(paidResponse.status=="Success"){
        notify("تمت التغيير بنجاح")
      }
    }
  },[paidLoading]);
  // Change Deliver Status
  const isDeliverChange=(e)=>{
    setIsDeliver(e.target.value)
  };
  const onSendDeliver=async()=>{
    if(isDeliver=="0"){
      notify("اختر قيمه");
    }else if(isDeliver=="false"){
      notify("لايمكن تغيير الحاله الي لم يتم التوصيل")
    }else if(isDeliver=="true"){
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
        notify("تمت التغيير بنجاح")
      }
    }
  },[deliverLoading]);
    return [isPaidChange,onSendPaid,isDeliverChange,onSendDeliver]
};
export default AdminAllOrdersHook
