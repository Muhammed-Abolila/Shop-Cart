import React from 'react'
import { Col, Row } from 'react-bootstrap'
import thumb from "../../../assets/image/labtop.png";
const DescountComp = () => {
  return (
        <section className='descount mt-5 py-4'>
            <Row className='p-0 m-0 py-4 justify-content-center align-items-center'>
                <Col>
                 <div className='img-container'>
                    <img src={thumb} alt="" />
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
