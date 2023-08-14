import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
import CartItem from '../../components/Cart/CartItem/CartItem';
import Coupon from '../../components/Cart/Coupon/Coupon';

const Cart = () => {
  return (
    <section className="cart-page pageStyle pt-3">
      <Container>
        <Row>
          <SubTitle title="عربه التسوق"/>
        </Row>
        <Row className='mt-3 justify-content-center'>
          <Col className='col-12 col-lg-10'>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
          </Col>
          <Col className='col-6 col-lg-2'>
            <Coupon/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cart
