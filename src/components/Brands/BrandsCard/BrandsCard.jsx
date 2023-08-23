import React from 'react'
import { Col } from 'react-bootstrap'

const BrandsCard = ({img}) => {
  return (
    <Col 
    sm={4}
    xl={2}
    >
      <div className='brand-img my-4'>
        <img className='w-100' src={img} alt="" />
      </div>
    </Col>
  )
}
export default BrandsCard;
