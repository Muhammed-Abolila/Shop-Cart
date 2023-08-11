import React from 'react'
import { Link } from 'react-router-dom'
const SubTitle = ({title,btnName,pathName}) => {
  return (
      <div className='subtitle-comp d-flex justify-content-between align-items-center mt-5'>
        <h3 className='subtitle-heade'>{title}</h3>
        {btnName?
          <Link to={`${pathName}`}>
            <span>{btnName}</span>
          </Link>
        :null}
      </div>
  )
}
export default SubTitle
