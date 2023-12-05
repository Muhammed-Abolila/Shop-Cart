import  { useState, useEffect } from 'react'
import Notifications from '../../CustomHooks/Notifications';
import { SendDataToRePassword } from '../../Redux/Actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const RePasswordPageHook = () => {
    let [display,setDisplay]=useState("none");
    let dispatch=useDispatch();
    let Navigate=useNavigate();
    let [password,setPassword]=useState('');
    let [rePassword,setRePassword]=useState('');
    const onPasswordChange=(e)=>{
        setPassword(e.target.value)
    };
    const onRePasswordChange=(e)=>{
        setRePassword(e.target.value)
    };
    let response=useSelector((state)=>state.AuthReducers.RePassword);
    let [notify]=Notifications(response)
    const onSubmit=()=>{
        if(password==""){
            notify("Insert New Password");
        }else if(rePassword==""){
            notify("Re-Password");
        }else if(rePassword!=password){
            notify("Password Doesn't Match"); 
        }else{
            setDisplay("flex")
            dispatch(SendDataToRePassword({
                "email":localStorage.getItem("Email"),
                "newPassword":password
            }))
        }
    };
    useEffect(()=>{
        if(response.data){
            if(response.data.token){
                setPassword("");
                setRePassword("");
                setTimeout(()=>{;
                    Navigate("/login");
                },2000)
            }else{
                notify(response.data.message);
            }
            setDisplay("none")
        }
    },[response]);
    return [display,password,onPasswordChange,rePassword,onRePasswordChange,onSubmit];
};
export default RePasswordPageHook;
