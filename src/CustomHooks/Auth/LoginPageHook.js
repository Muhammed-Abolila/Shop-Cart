import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../Notifications';
import { Userlogin } from '../../Redux/Actions/AuthActions';
const LoginPageHook = () => {
    let [display,setDisplay]=useState("none");
    let dispatch=useDispatch();
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
        notify("Insert E-mail"); 
        }else if(loginPassword==""){
        notify("Insert Password")
        }else{
        setLoading(true);
        setDisplay("flex");
        await dispatch(Userlogin({
            "email":loginEmail,
            "password":loginPassword
        }));
        setLoading(false);
        }
    }
    useEffect(() => {
        if(loading==false){
            if(response.data.errors){
                notify(response.data.errors[0].msg)
            }else if(response.data.message){
                notify(response.data.message)
            }else if(response.data.token){               
                localStorage.setItem('token', response.data.token);
                localStorage.setItem("user",JSON.stringify(response.data.data))
                setTimeout(()=>{
                setLoginEmail("");
                setLoginpassword("") 
                window.location.href="/"
                },1000);
            }
            setDisplay("none");
        }
    }, [loading]);
    return [display,loginEmail,loginPassword,onLoginEmailChange,onLoginPasswordChange,onSubmit]
};
export default LoginPageHook
