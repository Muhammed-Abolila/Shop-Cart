import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import RePasswordPageHook from '../../../CustomHooks/Auth/RePasswordPageHook';
const RePasswordPage = () => {
    let [password,onPasswordChange,rePassword,onRePasswordChange,onSubmit]=RePasswordPageHook()
  return (
    <section>
      <Container>
        <div className="verify">
          <div className="verify-content py-5 px-4">
            <h3>إعاده تعيين كلمه السر</h3>
            <div className="form my-4">
              <input
                value={password}
                onChange={onPasswordChange} 
                className='form-control mt-3' 
                type="password" 
                placeholder='أدخل الرقم السري الجديد'/>
                <input
                value={rePassword}
                onChange={onRePasswordChange}
                className='form-control my-3' 
                type="password" 
                placeholder='أعد إدخال الرقم السري الجديد'/>
              <button className='btn' onClick={onSubmit}>إرسال</button>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={2000}/>
    </section>
  )
}
export default RePasswordPage