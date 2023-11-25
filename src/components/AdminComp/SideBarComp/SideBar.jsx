import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='admin-sidebar'>
       <ul>
          <Link to="/admin/orders" style={{textDecoration:"none"}}>
              <li>Orders Managment</li>
          </Link>
          <Link to="/admin/manageproduct" style={{textDecoration:"none"}}>
              <li>Products Managment</li>
          </Link>
          <Link to="/admin/addbrand" style={{textDecoration:"none"}}>
              <li>Add Brand</li>
          </Link>
          <Link to="/admin/addcategory" style={{textDecoration:"none"}}>
              <li>Add Category</li>
          </Link>
          <Link to="/admin/addsubcategory" style={{textDecoration:"none"}}>
              <li>Add Sub-Category</li>
          </Link>
          <Link to="/admin/addproduct" style={{textDecoration:"none"}}>
              <li>Add Product</li>
          </Link>
          <Link to="/admin/addcoupon" style={{textDecoration:"none"}}>
              <li>Add Coupon</li>
          </Link>
       </ul>
    </div>
  )
}

export default SideBar
