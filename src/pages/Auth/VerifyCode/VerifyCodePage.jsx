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
            <h2>Enter Verfication Code...</h2>
            <div>
                <h3>
                  {Email?(<p className="mt-2 mb-0">{Email}</p>):(<p className="mt-2 mb-0">E-mail</p>)}
                </h3>
                <Link to="/forgot-password" className="text-decoration-none">
                  <span>Change E-mail?</span>
                </Link>
            </div>
            <div className="form my-4">
              <input 
                value={resetCode}
                onChange={onVerifyCodeChange}
                className='form-control my-3' 
                type="text" 
                placeholder='Verfication Code'/>
              <button className='btn' onClick={onSubmit}>Send</button>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
    </section>
  )
}
export default VerifyCodePage
