import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpacificAddresse, UpdateAddress } from "../../../Redux/Actions/AddressActions";
import { ToastContainer } from "react-toastify";
import Notifications from "../../../CustomHooks/Notifications";
const UserEdditAddress = () => {
  let {id}=useParams();
  let Navigate=useNavigate()
  let dispatch=useDispatch();
  let [alias,setAlias]=useState('');
  let [addressDetails,setAddressDetails]=useState('');
  let [phone,setPhone]=useState('');
  let [loading,setLoading]=useState(true);
  const onAliasChange=(e)=>{
    setAlias(e.target.value);
  };
  const onAddressDetailsChange=(e)=>{
    setAddressDetails(e.target.value);
  };
  const onPhoneChange=(e)=>{
    setPhone(e.target.value);
  };
  // get Spacific address
  useEffect(()=>{
    const GetOneAddress=async()=>{
      await dispatch(GetSpacificAddresse(id))
    };
    GetOneAddress()
  },[]);
  let spacificAddress=useSelector((state)=>state.AddressReducers.GetSpacificAddress);
  let spacificAddressData=[];
  try{
    if(spacificAddress.data){
      spacificAddressData=spacificAddress.data
    }
  }catch(e){};
  useEffect(()=>{
    setAlias(spacificAddressData.alias);
    setAddressDetails(spacificAddressData.details);
    setPhone(spacificAddressData.phone)
  },[spacificAddressData]);
  let AddressAfterUpdate=useSelector((state)=>state.AddressReducers.UpdateAddress);
  let [notify]=Notifications(AddressAfterUpdate)
  // Send Address Data
  const handleClick=()=>{
    if(alias==""){
      notify("أدخل المدينه");
      return;
    }else if(addressDetails==''){
      notify("أدخل العنوان تفصيلي");
      return;
    }else if(phone==''){
      notify("أدخل رقم الهاتف");
      return;
    }else{
      setLoading(true)
      dispatch(UpdateAddress(id,{
        alias: alias,
        details: addressDetails,
        phone: phone,
      }));
      setLoading(false)
    } 
  };
  
  useEffect(()=>{
    if(loading===false){
        if(AddressAfterUpdate.status==200){
            setAlias('');
            setAddressDetails('');
            setPhone('');
            setTimeout(()=>{
              Navigate("/user/address")
            },2000)
        }
    }
  },[loading,AddressAfterUpdate])
  
  return (
    <div className='user-eddit-address pt-3 text-start'>
      <input 
        value={alias}
        onChange={onAliasChange}
        type="text" 
        className='form-control input-style' 
        placeholder='أدخل نوع العنوان مثال (المنزل)' 
        />
      <input
        value={addressDetails}
        onChange={onAddressDetailsChange} 
        type="text" 
        className='form-control input-style mt-2' 
        placeholder='العنوان تفصيلي' 
        />
      <input
        value={phone}
        onChange={onPhoneChange} 
        type="number" 
        className='form-control input-style mt-2 mb-3' 
        placeholder='رقم الهاتف' 
        />
      <button className='btn btn-style' onClick={handleClick}>حفظ العنوان </button>
      <ToastContainer/>
    </div>
  )
};

export default UserEdditAddress
