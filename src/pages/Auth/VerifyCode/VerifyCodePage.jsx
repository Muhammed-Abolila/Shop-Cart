import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import VerifyCodePageHook from '../../../CustomHooks/Auth/VerifyCodePageHook';
import FormSpinner from '../../../components/Utilities/FormSpinner/FormSpinner';
const VerifyCodePage = () => {
  let [display,Email,resetCode,onVerifyCodeChange,onSubmit]=VerifyCodePageHook();
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
            </div>
            <div className="form my-3">
              <input 
                value={resetCode}
                onChange={onVerifyCodeChange}
                className='form-control my-3' 
                type="text" 
                placeholder='Verfication Code'/>
              <button className='btn' onClick={onSubmit}>Send</button>
            </div>
            <Link to="/forgot-password" className="text-decoration-none">
                <span>Change E-mail?</span>
            </Link>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
      <FormSpinner displayStyle={display}/>
    </section>
  )
}
export default VerifyCodePage
