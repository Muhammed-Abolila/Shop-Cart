import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../../CustomHooks/Notifications';
import { SendEmialToGetVerifyCode } from '../../Redux/Actions/AuthActions';
const ForgotPasswordPageHook = () => {
    let [display,setDisplay]=useState("none");
    let navigate=useNavigate();
    let dispatch=useDispatch()
    let [email,setEmail]=useState('');
    let response=useSelector((state)=>state.AuthReducers.ForgotPassword);
    let [notify]=Notifications(response)
    const onEmailChange=(e)=>{
      setEmail(e.target.value);
    }
    const onSubmit=()=>{
      if(email==''){
        notify("Insert E-mail")
      }else{
        setDisplay("flex");
        dispatch(SendEmialToGetVerifyCode({
          "email":email
        }));
        localStorage.setItem("Email",email)
      }   
    };
    // To Notify db Errors
    useEffect(()=>{
      if(response.data){
        if(response.data.status=='Success'){
          notify(response.data.message);
          setEmail("")
          setTimeout(()=>{
            navigate("/verify")
          },2000)
        }else{
          notify(response.data.message);
        }
      } 
      setDisplay("none");
    },[response]);
    return [display,email,onEmailChange,onSubmit]
}

export default ForgotPasswordPageHook
