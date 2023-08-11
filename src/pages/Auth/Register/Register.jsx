import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section>
      <Container>
        <div className="register">
          <div className="register-content py-5 px-4">
            <h3>إنشاء حساب جديد</h3>
            <div className="form my-4">
              <input className='form-control' type="text" placeholder='اسم المستخدم'/>
              <input className='form-control mt-3' type="email" placeholder='البريد الإلكتروني' />
              <input className='form-control my-3' type="password" placeholder='كلمة المرور' />
              <button className='btn'>إنشاء حساب</button>
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
    </section>
  )
}

export default Register
