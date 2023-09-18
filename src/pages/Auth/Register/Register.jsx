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
            <h3>إنشاء حساب جديد</h3>
            <div className="form my-4">
              <input 
                value={userName} 
                onChange={onUserNameChange}
                className='form-control' 
                type="text" 
                placeholder='اسم المستخدم' />
              <input 
                value={userEmail} 
                onChange={onUserEmailChange}
                className='form-control mt-3' 
                type="email" 
                placeholder='البريد الإلكتروني' />
              <input 
                value={userPhone} 
                onChange={onUserPhoneChange}
                className='form-control mt-3' 
                type="number" 
                placeholder='رقم الهاتف' />          
              <input 
                value={userPassword} 
                onChange={onUserPasswordChange}
                className='form-control mt-3' 
                type="password" 
                placeholder='كلمه المرور' />
              <input 
                value={userConfirmPassword} 
                onChange={onUserConfirmPasswordChange}
                className='form-control my-3' 
                type="password" placeholder='تأكيد كلمة المرور ' />
              <button className='btn' onClick={onSubmit}>إنشاء حساب</button>
            </div>
            <div className='register-footer'>
              <p>لديك حساب بالفعل؟</p>
              <Link to="/login">
                <span>إضغط هنا</span>
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
