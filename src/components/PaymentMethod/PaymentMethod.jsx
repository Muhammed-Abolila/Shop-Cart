import UserAllAddressesHook from '../../CustomHooks/User/UserAllAddressesHook';
import { useState, useEffect } from 'react';
import CartPageHook from '../../CustomHooks/CartHooks/CartPageHook';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCashOrder, CreateCreditOrder } from '../../Redux/Actions/OrdersActions';
import Notifications from '../../CustomHooks/Notifications';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import Dropdown from 'react-bootstrap/Dropdown';
import { BiSortDown } from 'react-icons/bi';
const PaymentMethod = () => {
  let dispatch=useDispatch();
  let [loading,setLoading]=useState(true)
  let Navigate=useNavigate();
  let [paymentMethod,setPaymentMethod]=useState("");
  // When User Choose Payment Method
  const ChoosePaymentMethod=(e)=>{
    setPaymentMethod(e.target.value);
  }
  // Get Cart Id
  let [productsCartData,reload,setReload,lengthOfArray,productCartDataToCoupone]=CartPageHook()
  // Get Addresses Data
  let [AllAddressesData,onDeleteAddress]=UserAllAddressesHook();
  // Choose Address And Change Text
  let [choseenAddress,setChoseenAddress]=useState();
  let [indexOfSelectedAddress,setIndexOfSelectedAddress]=useState('');
  let [text,setText]=useState("Choose Address")
  let choosenStyle={
    backgroundColor: "#0072bc",
    color:"#fff"
  }
  const onChooseAddress=(data,index)=>{
    setIndexOfSelectedAddress(index)
    setChoseenAddress(data);
    setText(data.alias)
  };
   // Credit PaymentMethod
   const sendCreditOrder=async()=>{
     if(choseenAddress==undefined){
      notify("Choose Address");
     }else{
      setLoading(true)
      await dispatch(CreateCreditOrder(productCartDataToCoupone._id,{
        shippingAddress:{
          city: choseenAddress.details,
          phone:choseenAddress.phone,
          details: choseenAddress.alias,
          }
    }));
      setLoading(false)
     }  
  }
  // cash PaymentMethod
  const sendCashOrder=async()=>{
    if(choseenAddress==undefined){
     notify("Choose Address");
    }else{
      setLoading(true)
     await dispatch(CreateCashOrder(productCartDataToCoupone._id,{
       shippingAddress:{
         city: choseenAddress.details,
         phone:choseenAddress.phone,
         details: choseenAddress.alias,
         }
   }));
   setLoading(false)
    }  
 }
  
  const sendData=async()=>{
    if(paymentMethod=="credit"){
      sendCreditOrder()
    }else if(paymentMethod=="cash"){
      sendCashOrder()
    }else{
      notify("Choose Payment Method")
    }
  };
  let cashOrderResponse=useSelector((state)=>state.OrderReducer.CashOrder);
  let creditOrderResponse=useSelector((state)=>state.OrderReducer.CreditOrder);

  let CreditData;
  try{
    if(creditOrderResponse){
      CreditData=creditOrderResponse.data;
    }
  }catch(e){}
  useEffect(()=>{
    if(CreditData){
      window.open(creditOrderResponse.data.session.url)
    }
  },[CreditData])
  let [notify]=Notifications(cashOrderResponse);
  let productsCartlength=0;
  try{
    if(productsCartData){
      productsCartlength=productsCartData.length
    }
  }catch(e){}
  
  useEffect(()=>{
    if(productsCartlength<1||cashOrderResponse.status===201){
      Navigate("/user/allorders");
      window.location.reload()
    }
  },[cashOrderResponse]);
  return (
    <section className='payment'>
      <div className='payment-methods'>
        <div >
          <input onChange={ChoosePaymentMethod} style={{cursor:"pointer"}} type="radio" name="payment" value="credit" id="credit"/>
          <label style={{cursor:"pointer"}} for="credit">Credit Card</label>
        </div>
        <div>
          <input onChange={ChoosePaymentMethod} style={{cursor:"pointer"}} type="radio" name="payment" value="cash" id="cash"/>
          <label style={{cursor:"pointer"}} for="cash">Cash</label>
        </div>
      <div>
        <Dropdown className='text-start'>
            <Dropdown.Toggle className="btn-style">
              <div className="sort">
                  <p>{text}</p>
                  <BiSortDown/>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='text-center'>
             {AllAddressesData.length>0?(AllAddressesData.map((data,index)=>
                <Dropdown.Item>
                  <p key={index} value={data._id} 
                    onClick={()=>onChooseAddress(data,index)}>{data.alias}
                  </p>
                  <hr/>
                  </Dropdown.Item>
                )):
                <Dropdown.Item>
                  <p value={0}>No Addresses</p>
                </Dropdown.Item>
                }
            </Dropdown.Menu>
        </Dropdown>
      </div>
      </div>
      <div className='payment-method-footer mt-2'>
          <button className='btn btn-style' onClick={sendData}>Complete Purchase</button>
      </div>
    <ToastContainer/>
    </section>
  )
}
export default PaymentMethod
