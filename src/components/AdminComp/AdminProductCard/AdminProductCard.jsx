import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import DeleteBtn from '../../Utilities/DeleteBtn/DeleteBtn';
import ReactStars from 'react-rating-stars-component';
import { AiFillEye } from 'react-icons/ai';
const AdminAllProducts = ({productData,onDeleteProduct}) => {
  return ( 
    <Col xs={{ span: 9}} sm={{span:6}} md={{span:6}} xl={{span:4}}>
      <Card className='admin-product-card mb-4'>
        <div className='card-head d-flex justify-content-start align-items-center px-2 mt-1'>
            <DeleteBtn text={productData.title} data={productData} onDelete={onDeleteProduct}/>
            <Link to={`/admin/eddit-product/${productData._id}`} style={{textDecoration:"none"}}>
              <span className="eddit-icon"><FaRegEdit/></span>
            </Link>
        </div>
        <Card.Img variant="top" src={productData.imageCover} />
        <Card.Body>
          <h2>{productData.title}</h2>
          <ReactStars
              count={5}
              value={productData.ratingsAverage}
              size={24}
              edit={false}
              isHalf={true}
              color="#c1c1c1"
              activeColor="#ffd700"
            />
          <div className='price'>
            {productData.priceAfterDiscount?(
              <>
              <p>{productData.priceAfterDiscount} EGP</p>
              <p className="price-before-discount">
                {productData.price} EGP
                <span></span>
              </p>
              </>
              ):(
              <p>{productData.price} EGP</p>
              )}    
          </div>
      </Card.Body>
      <div className="layer">
          <Link to={`/details/${productData._id}`} style={{textDecoration:"none"}}>
              <AiFillEye/>
          </Link>
      </div>
      </Card>
    </Col>














  )
}
export default AdminAllProducts;
