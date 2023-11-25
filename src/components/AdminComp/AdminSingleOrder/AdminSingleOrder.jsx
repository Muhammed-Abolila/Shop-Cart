import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { Col, Row } from 'react-bootstrap';
import { BaseUrl } from '../../../Redux/Type/Type';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const AdminSingleOrder = ({singleOrder}) => {
  return (
    <div>
      <Row>
          <Col sm={12} md={4}>
            <div className="img-container">
              <Link to={`/details/${singleOrder.product._id}`}>
                <img src={`${BaseUrl}/products/${singleOrder.product.imageCover}`} alt={singleOrder.product.title} />
              </Link>
            </div>
            </Col>
            <Col sm={12} md={8} className="mt-5 mt-md-0">
              <div className="content">
                <Row>
                    <Col xs={6}>
                      <div className="disc">
                          <h5>Title :-</h5>
                          <p className="mt-2">{singleOrder.product.title}</p>
                      </div>
                      {singleOrder.color?(
                      <div className="color-container">
                          <h5>Color :-</h5>
                          <div className="color" style={{backgroundColor:`${singleOrder.color}`}}></div>
                      </div>
                      ):
                      <div>
                        <h5>Color :-</h5>
                        <p className="mt-2">No Colors</p>
                      </div>
                      }
                    </Col>
                    <Col xs={6}>
                    <div className="rate-container d-flex justify-content-start align-items-center">
                      <div className="rate m-0">
                          <p>{singleOrder.product.ratingsAverage||0}</p>
                          <BsFillStarFill/>
                        </div>
                        {singleOrder.product.ratingsQuantity==1?(
                          <div className="rate-qty m-0 ms-2">({singleOrder.product.ratingsQuantity||0} rating )</div>
                        ):(
                          <div className="rate-qty m-0 ms-2">({singleOrder.product.ratingsQuantity||0} ratings )</div>
                        )}

                      </div>
                      <div className="price mt-2">
                        <h5>Price :- </h5> 
                        <p className="mt-2">{singleOrder.price} EGP</p>
                      </div>
                      <div className="quantaty mt-2">
                        <h5>Quantity :- </h5> 
                        {singleOrder.count==1?(
                          <p className="mt-2">{singleOrder.count} Item</p>
                        ):(
                          <p className="mt-2">{singleOrder.count} Items</p>
                        )}
                      </div>
                    </Col>
                </Row>
              </div>
            </Col>
        </Row>
        <hr className="my-4"/>
    </div>
    
  )
}

export default AdminSingleOrder
