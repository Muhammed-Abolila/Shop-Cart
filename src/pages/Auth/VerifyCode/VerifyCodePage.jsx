import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { SendVerifyCodeToRepassword } from '../../../Redux/Actions/Auth/VerifyCodeAction';
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../../../CustomHooks/Notifications';
import { ToastContainer } from 'react-toastify';
const VerifyCodePage = () => {
    let navigate=useNavigate();
    let dispatch=useDispatch()
    let Email=localStorage.getItem("Email");
    let [resetCode,setResetCode]=useState('');
    const onVerifyCodeChange=(e)=>{
      setResetCode(e.target.value)
    };
    let response=useSelector((state)=>state.VerifyReducer.VerifyCode);
    let [notify]=Notifications(response)
    const onSubmit=()=>{
      if(resetCode==''){
        notify("أدخل كود التفعيل");
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
            navigate("/user/re-password")
          },2000)
        }else{
          notify(response.data.message);
        }
      }
    },[response])
  return (
    <section>
      <Container>
        <div className="verify">
          <div className="verify-content py-5 px-4">
            <h3>أدخل الرمز المرسل...</h3>
            <div>
                <h6>تحقق من 
                  {Email?(<p className="mt-2 mb-0">{Email}</p>):(<p className="mt-2 mb-0">البريد الإلكتروني</p>)}
                </h6>
                <Link to="/user/forgot-password" className="text-decoration-none">
                <p> تغيير البريد الإلكتروني</p>
                </Link>
            </div>
            <div className="form my-4">
              <input 
                value={resetCode}
                onChange={onVerifyCodeChange}
                className='form-control my-3' 
                type="text" 
                placeholder='رمز التفعيل'/>
              <button className='btn' onClick={onSubmit}>إرسال</button>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
    </section>
  )
}
export default VerifyCodePage
