import  { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../../CustomHooks/Notifications';
import { SendVerifyCodeToRepassword } from '../../Redux/Actions/AuthActions';
const VerifyCodePageHook = () => {
    let navigate=useNavigate();
    let dispatch=useDispatch()
    let Email=localStorage.getItem("Email");
    let [resetCode,setResetCode]=useState('');
    const onVerifyCodeChange=(e)=>{
      setResetCode(e.target.value)
    };
    let response=useSelector((state)=>state.AuthReducers.VerifyCode);
    let [notify]=Notifications(response)
    const onSubmit=()=>{
      if(resetCode==''){
        notify("Insert Verify Code");
      }else{
        dispatch(SendVerifyCodeToRepassword({
          "resetCode":resetCode
        }))
      }
    };
    useEffect(()=>{
      if(response.data){
        if(response.data.status=="Success"){
          notify(response.data.status);
          setResetCode('')
          setTimeout(()=>{
            navigate("/re-password")
          },2000)
        }else{
          notify(response.data.message);
        }
      }
    },[response]);
    return [Email,resetCode,onVerifyCodeChange,onSubmit]
}

export default VerifyCodePageHook
