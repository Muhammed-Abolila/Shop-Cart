import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import RePasswordPageHook from '../../../CustomHooks/Auth/RePasswordPageHook';
import FormSpinner from '../../../components/Utilities/FormSpinner/FormSpinner';
const RePasswordPage = () => {
  let [display,password,onPasswordChange,rePassword,onRePasswordChange,onSubmit]=RePasswordPageHook()
  return (
    <section>
      <Container>
        <div className="verify">
          <div className="verify-content py-5 px-4">
            <h2>Re-Password</h2>
            <div className="form my-4">
              <input
                value={password}
                onChange={onPasswordChange} 
                className='form-control mt-3' 
                type="password" 
                placeholder='New Password'/>
                <input
                value={rePassword}
                onChange={onRePasswordChange}
                className='form-control my-3' 
                type="password" 
                placeholder='Confirm New Password'/>
              <button className='btn' onClick={onSubmit}>Send</button>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
      <FormSpinner displayStyle={display}/>
    </section>
  )
}
export default RePasswordPage