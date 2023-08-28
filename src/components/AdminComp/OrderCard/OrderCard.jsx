import React from 'react'
import thumb from "../../../assets/image/item.png";
import { AiOutlineDelete } from 'react-icons/ai';
import { Col, Row } from 'react-bootstrap'
const OrderCard = () => {
  return (
    <div className='order-card'>
      <Row>
        <Col  className='col-10'>
            <div className='card-right '>
                <Row>
                    <Col className='col-3'>
                        <div className="img-container">
                            <img src={thumb} alt="" />
                        </div>
                    </Col>
                    <Col className='col-9'>
                        <div className='card-content'> 
                            <div>
                                <h6>الالكترونيات</h6>
                                <p>Lorem  doloribus suscipit sequi accusamus totam? Ea  cumque!</p>
                            </div>
                            <div>
                                <h6 className='mb-2'>الماركه:- <span>سامسونج</span></h6>
                                <span className='color' style={{backgroundColor:'yellow'}}></span>
                            </div>
                            <div className='quantaty d-flex '>
                                <h6>الكميه</h6>
                                <p>435</p>
                            </div> 
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col className='col-2'>
            <div className='card-left'>
                <div>
                    <AiOutlineDelete />
                    <span>إزاله</span>
                </div>
                <h6>300 جنيه</h6>
            </div>
        </Col>
      </Row>
      </div>
  )
}

export default OrderCard
