import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../Notifications';
import { PostUserData } from '../../Redux/Actions/AuthActions';
const RegisterPageHook = () => {
  
    let dispatch=useDispatch();
    let Navigate=useNavigate();
    let [userName,setUserName]=useState("");
    let [userEmail,setUserEmail]=useState("");
    let [userPhone,setUserPhone]=useState("");
    let [userPassword,setUserPassword]=useState("");
    let [userConfirmPassword,setUserConfirmPassword]=useState("");
    let [loading,setLoading]=useState(true); 
    const onUserNameChange=(e)=>{
      setUserName(e.target.value);
    }
    const onUserEmailChange=(e)=>{
      setUserEmail(e.target.value);
    }
    const onUserPhoneChange=(e)=>{
      setUserPhone(e.target.value);
    }
    const onUserPasswordChange=(e)=>{
      setUserPassword(e.target.value);
    }
    const onUserConfirmPasswordChange=(e)=>{
      setUserConfirmPassword(e.target.value);
    }
    let response=useSelector((state)=>state.AuthReducers.CreateUser);      
    let [notify]=Notifications(response);
    const onSubmit=async()=>{
      if(userName==""){
        notify("أدخل إسم المستخدم")
      }else if(userEmail==""){
        notify("أدخل بريد إلكتروني")
      }else if(userPhone==""){
        notify("أدخل رقم هاتف صالح")
      }else if(userPassword==""){
        notify("أدخل كلمه السر")
      }else if(userConfirmPassword==""){
        notify("اعد إدخال كلمه السر")
      }else if(userPassword !=userConfirmPassword){
        notify("كلمه السر غير متطابقه")
      }else{
        setLoading(true)
        await dispatch(PostUserData({
          "name": userName,
          "email":userEmail,
          "password":userPassword,
          "passwordConfirm":userConfirmPassword,
          "phone":userPhone
        }));
        setLoading(false)
      } 
    }
    useEffect(()=>{
      if(loading===false){
        if(response){
          if(response.data.token){
            setUserName('');
            setUserEmail('');
            setUserPhone('');
            setUserPassword('');
            setUserConfirmPassword('');
            setTimeout(()=>{
              Navigate("/login")
            },2000)
          }else{
            notify(response.data.errors[0].msg)
          }
        }
      }
    },[loading])
    
  return  [userName,userEmail,userPhone,userPassword,userConfirmPassword,onUserNameChange,
    onUserEmailChange,onUserPhoneChange,onUserPasswordChange,onUserConfirmPasswordChange,
    onSubmit]
}

export default RegisterPageHook
