import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import ForgotPasswordPageHook from '../../../CustomHooks/Auth/ForgotPasswordPageHook';
import FormSpinner from '../../../components/Utilities/FormSpinner/FormSpinner';
const ForgotPasswordPage = () => {
    let [display,email,onEmailChange,onSubmit]=ForgotPasswordPageHook()
  return (
    <section>
      <Container>
        <div className="forgot-password">
          <div className="forgot-password-content py-5 px-4">
            <h2>Forgot Password</h2>
            <div className="form my-3">
              <input 
                value={email}
                onChange={onEmailChange}
                className='form-control my-3' 
                type="email" 
                placeholder='E-mail'/>
              <button className='btn' onClick={onSubmit}>verification Code</button>
              <div className='forgot-password-footer mt-2'>
              <Link to="/login" className="text-decoration-none">
                <span>back?</span>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
      <FormSpinner displayStyle={display}/>
    </section>
  )
}

export default ForgotPasswordPage
