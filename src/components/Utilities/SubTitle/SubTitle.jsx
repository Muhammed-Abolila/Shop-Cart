import React from 'react'
import { Link } from 'react-router-dom'
const SubTitle = ({title,btnName,pathName}) => {
  return (
      <div className='subtitle-comp mb-3'>
        <h2 className='subtitle-heade'>{title}</h2>
        {btnName?
          <Link to={`${pathName}`} style={{textDecoration:"none"}}>
            <button  className="btn-style">{btnName}</button>
          </Link>
        :null}
      </div>
  )
}
export default SubTitle
