import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { SendEmialToGetVerifyCode } from '../../../Redux/Actions/Auth/UserForgotPasswordActions';
import Notifications from '../../../CustomHooks/Notifications';
const ForgotPasswordPage = () => {
    let navigate=useNavigate();
    let dispatch=useDispatch()
    let [email,setEmail]=useState('');
    let response=useSelector((state)=>state.ForgotPasswordReducer.ForgotPassword);
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
            navigate("/user/verify")
          },2000)
        }else{
          notify(response.data.message);
        }
      } 
    },[response])
  return (
    <section>
      <Container>
        <div className="forgot-password">
          <div className="forgot-password-content py-5 px-4">
            <h3>نسيت كلمه السر</h3>
            <div className="form my-4">
              <input 
                value={email}
                onChange={onEmailChange}
                className='form-control my-3' 
                type="email" 
                placeholder='البريد الإلكتروني'/>
              <button className='btn' onClick={onSubmit}>إرسال رمز التفعيل</button>
              <div className='forgot-password-footer mt-2'>
              <Link to="/login" className="text-decoration-none">
                <span>رجوع؟</span>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
    </section>
  )
}

export default ForgotPasswordPage
