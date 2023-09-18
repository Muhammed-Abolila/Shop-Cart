import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../Notifications';
import { Userlogin } from '../../Redux/Actions/AuthActions';
const LoginPageHook = () => {
    // console.log("props",this.props);
    
    let dispatch=useDispatch();
    let Navigate=useNavigate()
    let [loginEmail,setLoginEmail]=useState("");
    let [loginPassword,setLoginpassword]=useState("");
    let [loading,setLoading]=useState(true)
    const onLoginEmailChange=(e)=>{
        setLoginEmail(e.target.value)
    };
    const onLoginPasswordChange=(e)=>{
        setLoginpassword(e.target.value)
    };
    let response=useSelector((state)=>state.AuthReducers.userLogin);    
    let [notify]=Notifications(response);
    const onSubmit = async() =>{
        if(loginEmail==''){
        notify("ادخل البريد الإلكتروني"); 
        }else if(loginPassword==""){
        notify("أدخل الرقم السري")
        }else{
        setLoading(true)
        await dispatch(Userlogin({
            "email":loginEmail,
            "password":loginPassword
        }));
        setLoading(false)
        }
    }
    useEffect(() => {
        if(loading==false){
            if(response.data.token){               
                localStorage.setItem('token', response.data.token);
                localStorage.setItem("user",JSON.stringify(response.data.data))
                setTimeout(()=>{
                // Navigate("/cart")
                setLoginEmail("");
                setLoginpassword("") 
                window.location.href="/"
                },2000)
            }else{
                notify(response.data.message)
            }
        }
    }, [loading]);
    console.log();
    
    return [loginEmail,loginPassword,onLoginEmailChange,onLoginPasswordChange,onSubmit]
}

export default LoginPageHook
