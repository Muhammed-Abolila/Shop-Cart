import React from 'react'
import { Container } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import RegisterPageHook from '../../../CustomHooks/Auth/RegisterPageHook';
const Register = () => {
  let [userName,userEmail,userPhone,userPassword,userConfirmPassword,onUserNameChange,
      onUserEmailChange,onUserPhoneChange,onUserPasswordChange,onUserConfirmPasswordChange,
      onSubmit]=RegisterPageHook()
  return (
    <section>
      <Container>
        <div className="register">
          <div className="register-content py-5 px-4">
            <h2>Create New Account</h2>
            <div className="form my-3">
              <input 
                value={userName} 
                onChange={onUserNameChange}
                className='form-control' 
                type="text" 
                placeholder='User Name' />
              <input 
                value={userEmail} 
                onChange={onUserEmailChange}
                className='form-control mt-3' 
                type="email" 
                placeholder='E-mail' />
              <input 
                value={userPhone} 
                onChange={onUserPhoneChange}
                className='form-control mt-3' 
                type="number" 
                placeholder='Phone Number' />          
              <input 
                value={userPassword} 
                onChange={onUserPasswordChange}
                className='form-control mt-3' 
                type="password" 
                placeholder='Password' />
              <input 
                value={userConfirmPassword} 
                onChange={onUserConfirmPasswordChange}
                className='form-control my-3' 
                type="password" placeholder='Confirm Password' />
              <button className='btn' onClick={onSubmit}>Create</button>
            </div>
            <div className='register-footer'>
              <p>Do you have an account?</p>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
    </section>
  )
}

export default Register
