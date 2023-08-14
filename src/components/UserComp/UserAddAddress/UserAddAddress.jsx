import React from 'react'

const UserAddAddress = () => {
  return (
    <div className='user-eddit-address pt-3 text-start'>
      <input type="text" className='form-control input-style' placeholder='التصنيف' />
      <input type="text" className='form-control input-style mt-2' placeholder='العنوان تفصيلي' />
      <input type="number" className='form-control input-style mt-2' placeholder='رقم الهاتف' />
      <button className='btn btn-style mt-3'>حفظ العنوان </button>
    </div>
  )
}

export default UserAddAddress
