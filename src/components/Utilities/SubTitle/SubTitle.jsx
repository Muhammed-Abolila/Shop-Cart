import React from 'react'
const SubTitle = ({title,btnName}) => {
  return (
      <div className='category-head d-flex justify-content-between align-items-center mt-5'>
        <h3 className='category-head-title'>{title}</h3>
        <button className='btn category-head-btn'>{btnName}</button>
      </div>
  )
}

export default SubTitle
