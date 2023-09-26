import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import { FaRegEdit } from 'react-icons/fa';
import DeleteBtn from '../../Utilities/DeleteBtn/DeleteBtn';
const AdminAllProducts = ({productData,onDeleteProduct}) => {
  return ( 
    <Col  sm={6} lg={4}>
      <Card className='admin-product-card mt-4'>
        <div className='card-head d-flex justify-content-between align-items-center px-2 mt-1'>
            <DeleteBtn data={productData} onDelete={onDeleteProduct}/>
            <Link to={`/admin/eddit-product/${productData._id}`} style={{textDecoration:"none"}}>
              <span className="eddit-icon"><FaRegEdit/></span>
            </Link>
        </div>
        <Link to={`/details/${productData._id}`} style={{textDecoration:"none"}}>
          <Card.Img variant="top" src={productData.imageCover} />
        </Link>
      <Card.Body>
          <Card.Text>{productData.title}</Card.Text> 
          <div className="card-footer">
            <div className="rate">
              <BsFillStarFill/>
              <p>{productData.ratingsQuantity}</p>
            </div>
            <div className='price'>
              <h5>{productData.price} جنيه</h5>
            </div>
          </div>
      </Card.Body>
      </Card>
    </Col>
  )
}
export default AdminAllProducts;
