import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeOrderDeliver, ChangeOrderPaid } from '../../Redux/Actions/OrdersActions';
import Notifications from '../../CustomHooks/Notifications';
const AdminAllOrdersHook = (ordersData) => {
    let [isPaid,setIsPaid]=useState('0');
    let [isDeliver,setIsDeliver]=useState('0');
    let dispatch=useDispatch();
    const isPaidChange=(e)=>{
        setIsPaid(e.target.value);
    };
    console.log(localStorage.getItem("token"));
    const onSendPaid=async()=>{
        if(isPaid=="0"){
            console.log("0");
        }else if(isPaid=="false"){
            console.log("false");
        }else if(isPaid=="true"){
            await dispatch(ChangeOrderPaid(ordersData._id))
        }
     
    };
    const isDeliverChange=(e)=>{
      setIsDeliver(e.target.value)
    };
    const onSendDeliver=async()=>{
      if(isDeliver=="0"){
        console.log("اختر قيمه");
      }else if(isDeliver=="false"){
        console.log("لايمكن تغيير الحاله الي لم يتم التوصيل")
      }else if(isDeliver=="true"){
        await dispatch(ChangeOrderDeliver(ordersData._id))
      }
    };
    return [isPaidChange,onSendPaid,isDeliverChange,onSendDeliver]
};
export default AdminAllOrdersHook
