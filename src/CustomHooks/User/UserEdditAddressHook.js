import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpacificAddresse, UpdateAddress } from "../../Redux/Actions/AddressActions";
import Notifications from "../../CustomHooks/Notifications";
const UserEdditAddressHook = () => {
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
    const handleClick= async()=>{
      if(alias==""){
        notify("Insert City");
        return;
      }else if(addressDetails==''){
        notify("Insert detailed address");
        return;
      }else if(phone==''){
        notify("Insert Phone Number");
        return;
      }else{
        setLoading(true)
        await dispatch(UpdateAddress(id,{
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
    },[loading,AddressAfterUpdate]);
    return [alias,onAliasChange,addressDetails,onAddressDetailsChange,phone,onPhoneChange,handleClick]
}

export default UserEdditAddressHook;
