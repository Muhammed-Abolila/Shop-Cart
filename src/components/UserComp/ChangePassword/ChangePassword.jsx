import React from 'react'

const ChangePassword = () => {
  return (
    <div className='w-50 text-start mt-1'>
      <input className='form-control input-style' type="password" placeholder='كلمه السر القديمه'/>
      <input className='form-control mt-2 input-style' type="password" placeholder='كلمه السر الجديده'/>
      <button className='btn btn-style mt-3'>حفظ كلمه السر</button>
    </div>
  )
}

export default ChangePassword
