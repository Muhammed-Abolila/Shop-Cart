import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserProfileData } from "../../Redux/Actions/UserProfileActions";
import Notifications from "../../CustomHooks/Notifications";
const UserEdditProfileHook = (setShowUpdateModal) => {
    let user =JSON.parse(localStorage.getItem("user"));
    let dispatch=useDispatch()
    let [userName,setUserName]=useState(user.name);
    let [userPhone,setUserPhone]=useState(user.phone);
    let [userEmail,setUserEmail]=useState(user.email);
    let [loading,setLoading]=useState(true);
    let response=useSelector((state)=>state.UserProfileReducer.UpdateUserProfile);
    console.log(response);
    
    let [notify]=Notifications(response)
    const onUserNameChange=(e)=>{
      setUserName(e.target.value)
    }
    const onUserPhoneChange=(e)=>{
      setUserPhone(e.target.value)
    }
    const onUserEmailChange=(e)=>{
      setUserEmail(e.target.value)
    }
    const handleClick=async()=>{
      if(userName==""){
        notify("أدخل اسم المستخدم");
      }else if(userEmail==""){
        notify("أدخل البريد الإلكتروني");
      }else if(userPhone==""){
        notify("أدخل رقم الهاتف");
      }else{
        setLoading(true)
        let body=[];
  
        if(user.email==userEmail){
          body={
            "name":userName,
            "phone":userPhone
          }
        }else{
          body={
            "name":userName,
            "phone":userPhone,
            "email":userEmail
          }
        }
        await dispatch(UpdateUserProfileData(body));
        setLoading(false)
      }
    };
    useEffect(()=>{
      if(loading==false){
        if(response.status==200){
          notify(response.statusText);
          setUserName('');
          setUserPhone('');
          localStorage.setItem("user",JSON.stringify(response.data.data.user))
          setShowUpdateModal(false);
          setTimeout(()=>{
            window.location.reload();
          },1500);
        }else{
        }
      }
    },[loading]);
    return [userName,onUserNameChange,userPhone,onUserPhoneChange,userEmail,onUserEmailChange,
        handleClick]
}

export default UserEdditProfileHook