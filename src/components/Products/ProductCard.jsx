import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col } from 'react-bootstrap'

const ProductCard = ({img}) => {
  return (
    <Col
    xs={6}
    lg={3}
    >
      <Card className='product-card mt-4'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <div className="product-icon">
                <FontAwesomeIcon icon={faHeart} />
            </div>
            <Card.Text>هذا المنتج من المنتجات الاكثر مبيعا هذا المنتج من المنتجات الاكثر مبيعا</Card.Text>
            <div className="card-footer">
            <h5 className='price fs-6'>880جنيه</h5>
                <h5 className='price fs-6'>880جنيه</h5>
            </div>
        </Card.Body>
        </Card>
    </Col>
  )
}

export default ProductCard;
