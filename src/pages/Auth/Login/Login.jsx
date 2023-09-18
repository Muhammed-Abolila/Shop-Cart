import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import LoginPageHook from '../../../CustomHooks/Auth/LoginPageHook';
const Login = () => {
let [loginEmail,loginPassword,onLoginEmailChange,onLoginPasswordChange,onSubmit]=LoginPageHook()
  return (
    <section>
      <Container>
        <div className="login">
          <div className="login-content py-5 px-4">
            <h3>تسجيل الدخول</h3>
            <div className="form my-4">
              <input 
                value={loginEmail}
                onChange={onLoginEmailChange}
                className='form-control' 
                type="email" 
                placeholder='البريد الإلكتروني'/>
              <input
                value={loginPassword}
                onChange={onLoginPasswordChange} 
                className='form-control my-3' 
                type="password" 
                placeholder='كلمة المرور' />
              <button className='btn' onClick={onSubmit}>الدخول</button>
            </div>
            <div className='login-footer'>
              <p>ليس لديك حساب؟</p>
              <Link to="/register">
                <span>إضغط هنا</span>
              </Link>
            </div>
            <div className='login-footer'>
              <Link to="/forgot-password">
                <span>هل نسيت كلمه السر؟</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
    </section>
  )
}

export default Login
