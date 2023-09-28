import SubTitle from "../../Utilities/SubTitle/SubTitle";
import { ToastContainer } from "react-toastify";
import UserEdditProfileHook from "../../../CustomHooks/User/UserEdditProfileHook";
const UserEdditProfile = ({setShowUpdateModal}) => {
 let [userName,onUserNameChange,userPhone,onUserPhoneChange,userEmail,onUserEmailChange,
  handleClick]=UserEdditProfileHook(setShowUpdateModal)
 return (
    <div className='user-eddit-profile'>
      <div className="user-eddit-content">
        <SubTitle title="تعديل الصفحه الشخصيه"/>
        <div className="mt-4">
          <input 
            value={userName}
            onChange={onUserNameChange}
            type="text" 
            className='form-control input-style'
            placeholder="أدخل اسم المستخدم"/>
          <input 
            value={userPhone}
            onChange={onUserPhoneChange}
            type="number" 
            className='form-control input-style mt-2 mb-3'
            placeholder="أدخل رقم الهاتف"/>
          <input 
            value={userEmail}
            onChange={onUserEmailChange}
            type="email" 
            className='form-control input-style mt-2 mb-3'/>
          <button className='btn btn-style' onClick={handleClick}>حفظ التعديلات</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
};

export default UserEdditProfile
