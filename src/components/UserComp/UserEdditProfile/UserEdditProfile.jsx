import React from 'react'

const UserEdditProfile = () => {
  return (
    <div className='user-eddit-address pt-3 text-start'>
      <input type="text" className='form-control input-style' value='محمد أبو ليله' />
      <input type="number" className='form-control input-style mt-2' value='0123456789' />
      <input type="email" className='form-control input-style mt-2' value='mabolila638@gmail.com' />

      <button className='btn btn-style mt-3'>حفظ التعديلات</button>
    </div>
  )
};

export default UserEdditProfile
