import React from 'react'
import { Link } from 'react-router-dom'

const UesrSideBarComp = () => {
  return (
    <div className='user-sidebar'>
       <ul>
          <Link to="/user/allorders" style={{textDecoration:"none"}}>
              <li>إداره الطلبات</li>
          </Link>
          <Link to="/user/favproduct" style={{textDecoration:"none"}}>
              <li> المنتجات المفضله</li>
          </Link>
          <Link to="/user/address" style={{textDecoration:"none"}}>
              <li>العناوين الشخصيه</li>
          </Link>
          <Link to="/user/profile" style={{textDecoration:"none"}}>
              <li>الملف الشخصي</li>
          </Link>
       </ul>
    </div>
  )
}

export default UesrSideBarComp
