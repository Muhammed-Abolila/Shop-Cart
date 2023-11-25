import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostAddressData } from "../../Redux/Actions/AddressActions";
import Notifications from "../../CustomHooks/Notifications";
const AddAddressHook = () => {
    let dispatch=useDispatch()
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
    let response=useSelector((state)=>state.AddressReducers.CreateAddress);
    let [notify]=Notifications(response)
    const handleClick=()=>{
      if(alias==""){
        notify("Insert City");
        return;
      }else if(addressDetails==''){
        notify("Insert Detailed Address");
        return;
      }else if(phone==''){
        notify("Insert Phone Number");
        return;
      }else{
        setLoading(true)
        dispatch(PostAddressData({
          details: addressDetails,
          phone: phone,
          alias:alias
        }));
        setAlias('');
        setAddressDetails('');
        setPhone('');
        setLoading(false)
      } 
    };
    useEffect(()=>{
      if(loading===false){
        if(response.data){
          notify(response.data.error.message)
        }
      }
    },[loading]);
    return [alias,onAliasChange,addressDetails,onAddressDetailsChange,phone,onPhoneChange,handleClick]
}

export default AddAddressHook
