import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
      <Container>
        <div className="login">
          <div className="login-content py-5 px-4">
            <h3>تسجيل الدخول</h3>
            <div className="form my-4">
              <input className='form-control' type="text" placeholder='اسم المستخدم'/>
              <input className='form-control my-3' type="password" placeholder='كلمة المرور' />
              <button className='btn'>الدخول</button>
            </div>
            <div className='login-footer'>
              <p>ليس لديك حساب؟</p>
              <Link to="/register">
                <span>إضغط هنا</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Login
