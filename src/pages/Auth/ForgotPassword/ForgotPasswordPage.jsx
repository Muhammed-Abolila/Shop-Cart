import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import ForgotPasswordPageHook from '../../../CustomHooks/Auth/ForgotPasswordPageHook';

const ForgotPasswordPage = () => {
    let [email,onEmailChange,onSubmit]=ForgotPasswordPageHook()
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
