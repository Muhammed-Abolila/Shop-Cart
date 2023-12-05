import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../Notifications';
import { PostUserData } from '../../Redux/Actions/AuthActions';
const RegisterPageHook = () => {
    let [display,setDisplay]=useState("none");
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
        notify("Insert User Name")
      }else if(userEmail==""){
        notify("Insert E-mail")
      }else if(userPhone==""){
        notify("Insert Phone Number")
      }else if(userPassword==""){
        notify("Insert Password")
      }else if(userConfirmPassword==""){
        notify("Re-password")
      }else if(userPassword !=userConfirmPassword){
        notify("Password Dosn't Match")
      }else{
        setLoading(true);
        setDisplay("flex");
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
        setDisplay("none");
      }
    },[loading])
    
  return  [display,userName,userEmail,userPhone,userPassword,userConfirmPassword,onUserNameChange,
    onUserEmailChange,onUserPhoneChange,onUserPasswordChange,onUserConfirmPasswordChange,
    onSubmit]
}

export default RegisterPageHook
