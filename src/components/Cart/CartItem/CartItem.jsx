import React from 'react'
import { Col, Row } from 'react-bootstrap'
import thumb from "../../../assets/image/product/thumb-01.jpg";
import { AiOutlineDelete } from 'react-icons/ai';
const CartItem = () => {
  return (
    <div className='cart-item'>
      <Row>
        <Col  className='col-10'>
            <div className='cart-right '>
                <Row>
                    <Col className='col-3'>
                        <div className="img-container">
                            <img src={thumb} alt="" />
                        </div>
                    </Col>
                    <Col className='col-9'>
                        <div className='cart-content'>
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
            <div className='cart-left'>
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

export default CartItem
