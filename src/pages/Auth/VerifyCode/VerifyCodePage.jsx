import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import VerifyCodePageHook from '../../../CustomHooks/Auth/VerifyCodePageHook';
const VerifyCodePage = () => {
  let [Email,resetCode,onVerifyCodeChange,onSubmit]=VerifyCodePageHook()
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
                <Link to="/forgot-password" className="text-decoration-none">
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
