import PriceComp from '../Utilities/PriceComp/PriceComp';
import UserAllAddressesHook from '../../CustomHooks/User/UserAllAddressesHook';
import { useState, useEffect } from 'react';
import CartPageHook from '../../CustomHooks/CartHooks/CartPageHook';
import { useDispatch, useSelector } from 'react-redux';
import { PostOrder } from '../../Redux/Actions/OrdersActions';
import Notifications from '../../CustomHooks/Notifications';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';

const PaymentMethod = () => {
  let dispatch=useDispatch();
  let Navigate=useNavigate();
  // Get Cart Id
  let [productsCartData,reload,setReload,lengthOfArray,productCartDataToCoupone]=CartPageHook()
  // Get Addresses Data
  let [AllAddressesData,onDeleteAddress]=UserAllAddressesHook();
  // Choose Address And Change Text
  let [choseenAddress,setChoseenAddress]=useState();
  let [indexOfSelectedAddress,setIndexOfSelectedAddress]=useState('');
  let [text,setText]=useState("اختر عنوان للشحن")
  let choosenStyle={
    backgroundColor: "#0072bc",
    color:"#fff"
  }
  const onChooseAddress=(data,index)=>{
    setIndexOfSelectedAddress(index)
    setChoseenAddress(data);
    setText(data.alias)
  };
  // cash PaymentMethod
  const sendData=async()=>{
    if(choseenAddress==undefined){
      notify("اختر عنوان للشحن")
    }else{
      await dispatch(PostOrder(productCartDataToCoupone._id,{
          shippingAddress:{
            city: choseenAddress.details,
            phone:choseenAddress.phone,
            details: choseenAddress.alias,
            }
      }));
    }
  };
  let orderResponse=useSelector((state)=>state.OrderReducer.postOrder);
  let [notify]=Notifications(orderResponse);
  let productsCartlength=0;
  try{
    if(productsCartData){
      productsCartlength=productsCartData.length
    }
  }catch(e){}
  useEffect(()=>{
    if(productsCartlength<1||orderResponse.status===201){
      Navigate("/user/allorders")
    }
  },[orderResponse]);
  console.log();
  
  return (
    <section className='payment'>
    <div className='payment-methods'>
      <div >
        <input style={{cursor:"pointer"}} type="radio" name="payment" value="credit" id="credit"/>
        <label style={{cursor:"pointer"}} for="credit">الدفع عن طريق البطاقه الإئتمانيه</label>
      </div>
      <div>
        <input style={{cursor:"pointer"}} type="radio" name="payment" value="cash" id="cash"/>
        <label style={{cursor:"pointer"}} for="cash">الدفع عند الإستلام</label>
      </div>
      <ul >
        <p>{text}</p>
        {AllAddressesData.length>0?(AllAddressesData.map((data,index)=>
          <li key={index} value={data._id} style={{color:indexOfSelectedAddress===index&&`${choosenStyle.color}`,backgroundColor:indexOfSelectedAddress===index&&`${choosenStyle.backgroundColor}`}} onClick={()=>onChooseAddress(data,index)}>{data.alias}</li>
          )):<li value={0}>لا يوجد عناوين للشحن</li>}
      </ul>
    </div>
    <div className='payment-method-footer mt-2'>
        <button className='btn' onClick={sendData}>إتمام الشراء</button>
    </div>
    <ToastContainer/>
    </section>
  )
}
export default PaymentMethod
