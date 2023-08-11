import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import brandImg6 from "../../../assets/image/product/thumb-02.jpg";
const DescountComp = () => {
  return (
        <section className='descount mt-5 py-4'>
            <Row className='p-0 m-0 py-4 justify-content-center align-items-center'>
                <Col>
                 <div className='img-container'>
                    <img src={brandImg6} alt="" />
                 </div>
                </Col>
                <Col>
                 <div>
                    <h5>خصم 30% علي اللابتوب</h5>
                 </div>
                </Col>
            </Row> 
        </section>
  )
}

export default DescountComp
