import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { SendDataToRePassword } from '../../../Redux/Actions/Auth/RePasswordAction';
import Notifications from '../../../CustomHooks/Notifications';
const RePasswordPage = () => {
    let dispatch=useDispatch()
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    let [rePassword,setRePassword]=useState('');
    const onEmailChange=(e)=>{
        setEmail(e.target.value)
    };
    const onPasswordChange=(e)=>{
        setPassword(e.target.value)
    };
    const onRePasswordChange=(e)=>{
        setRePassword(e.target.value)
    };
    let response=useSelector((state)=>state.RePasswordReducer.RePassword);
    let [notify]=Notifications(response)
    const onSubmit=()=>{
        if(email==""){
            notify("أدخل البريد الإلكتروني"); 
        }else if(password==""){
            notify("أدخل الرقم السري الجديد");
        }else if(rePassword==""){
            notify("أعد إدخال الرقم السري");
        }else if(rePassword!=password){
            notify("كلمه السر غير متطابقه"); 
        }else{
            dispatch(SendDataToRePassword({
                "email":email,
                "newPassword":password
            }))
        }
    };
    useEffect(()=>{
        if(response.data){
            if(response.data.token){
                notify("تم تغيير الرقم السري");
                setEmail("");
                setPassword("");
                setRePassword("");
                setTimeout(()=>{
                    localStorage.setItem("token",response.data.token)
                    window.location.href="/"
                },2000)
            }else{
                notify(response.data.message);
                console.log(response.data);
                
            } 
        }
    },[response])
  return (
    <section>
      <Container>
        <div className="verify">
          <div className="verify-content py-5 px-4">
            <h3>إعاده تعيين كلمه السر</h3>
            <div className="form my-4">
              <input
                value={email}
                onChange={onEmailChange}
                className='form-control my-3' 
                type="email" 
                placeholder='ادخل البريد الإلكتروني'/>
              <input
                value={password}
                onChange={onPasswordChange} 
                className='form-control mt-3' 
                type="text" 
                placeholder='أدخل الرقم السري الجديد'/>
                <input
                value={rePassword}
                onChange={onRePasswordChange}
                className='form-control my-3' 
                type="text" 
                placeholder='أعد إدخال الرقم السري الجديد'/>
              <button className='btn' onClick={onSubmit}>إرسال</button>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
    </section>
  )
}
export default RePasswordPage