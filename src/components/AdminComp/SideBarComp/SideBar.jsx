import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='admin-sidebar'>
       <ul>
          <Link to="/admin/orders" style={{textDecoration:"none"}}>
              <li>إداره الطلبات</li>
          </Link>
          <Link to="/admin/allproducts" style={{textDecoration:"none"}}>
              <li>إداره المنتجات</li>
          </Link>
          <Link to="/admin/addbrand" style={{textDecoration:"none"}}>
              <li>أضف ماركه</li>
          </Link>
          <Link to="/admin/addcategory" style={{textDecoration:"none"}}>
              <li>أضف تصنيف</li>
          </Link>
          <Link to="/admin/addsubcategory" style={{textDecoration:"none"}}>
              <li>أضف تصنيف فرعي</li>
          </Link>
          <Link to="/admin/addproduct" style={{textDecoration:"none"}}>
              <li>أضف منتج</li>
          </Link>
       </ul>
    </div>
  )
}

export default SideBar
