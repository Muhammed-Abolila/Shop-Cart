import React from 'react'
import { Link } from 'react-router-dom'

const UesrSideBarComp = () => {
  return (
    <div className='user-sidebar'>
       <ul>
          <Link to="/user/allorders" style={{textDecoration:"none"}}>
              <li>Manage Orders</li>
          </Link>
          <Link to="/user/favproduct" style={{textDecoration:"none"}}>
              <li>Favorite products</li>
          </Link>
          <Link to="/user/address" style={{textDecoration:"none"}}>
              <li>Personal Addresses</li>
          </Link>
          <Link to="/user/profile" style={{textDecoration:"none"}}>
              <li>Profile</li>
          </Link>
       </ul>
    </div>
  )
}

export default UesrSideBarComp
