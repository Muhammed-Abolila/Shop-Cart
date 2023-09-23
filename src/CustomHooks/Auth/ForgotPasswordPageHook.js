import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../../CustomHooks/Notifications';
import { SendEmialToGetVerifyCode } from '../../Redux/Actions/AuthActions';

const ForgotPasswordPageHook = () => {
    
    let navigate=useNavigate();
    let dispatch=useDispatch()
    let [email,setEmail]=useState('');
    let response=useSelector((state)=>state.AuthReducers.ForgotPassword);
    let [notify]=Notifications(response)
    const onEmailChange=(e)=>{
      setEmail(e.target.value)
    }
    const onSubmit=()=>{
      if(email==''){
        notify("أدخل البريد الإلكتروني")
      }else{
        dispatch(SendEmialToGetVerifyCode({
          "email":email
        }));
      }   
    };
    // To Notify db Errors
    useEffect(()=>{
      if(response.data){
        if(response.data.status=='Success'){
          notify(response.data.message);
          localStorage.setItem("Email",email)
          setEmail("")
          setTimeout(()=>{
            navigate("/verify")
          },2000)
        }else{
          notify(response.data.message);
        }
      } 
    },[response]);
    return [email,onEmailChange,onSubmit]
}

export default ForgotPasswordPageHook