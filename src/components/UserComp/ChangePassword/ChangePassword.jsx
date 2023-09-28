import { ToastContainer } from "react-toastify";
import UserEdditPasswordHook from "../../../CustomHooks/User/UserEdditPasswordHook";
const ChangePassword = () => {
  let [oldPass,onOldPassChange,newPass,onNewPassChange,newRePass,onNewRePassChange,handleClick]=UserEdditPasswordHook()
  return (
    <div className='w-50 text-start mt-3'>
      <input
        value={oldPass}
        onChange={onOldPassChange}
        className='form-control input-style' 
        type="password" 
        placeholder='كلمه السر القديمه'
        />
      <input
        value={newPass}
        onChange={onNewPassChange} 
        className='form-control mt-2 input-style' 
        type="password" 
        placeholder='كلمه السر الجديده'
        />
      <input
        value={newRePass}
        onChange={onNewRePassChange} 
        className='form-control mt-2 mb-3 input-style' 
        type="password" 
        placeholder='أعد إدخال كلمه السر الجديده'
        />
      <button className='btn btn-style' onClick={handleClick}>حفظ كلمه السر</button>
      <ToastContainer/>
    </div>
  )
}

export default ChangePassword
