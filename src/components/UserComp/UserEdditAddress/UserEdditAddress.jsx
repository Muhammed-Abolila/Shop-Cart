import React from 'react'

const UserEdditAddress = () => {
  return (
    <div className='user-eddit-address pt-3 text-start'>
      <input type="text" className='form-control input-style' value='المنزل' />
      <input type="text" className='form-control input-style mt-2' value='15 شارع محمد محمود الدقي' />
      <input type="number" className='form-control input-style mt-2' value='0123456789' />
      <button className='btn btn-style mt-3'>حفظ التعديلات</button>
    </div>
  )
};

export default UserEdditAddress
