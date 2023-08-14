import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminAllProducts = ({img}) => {
  return (
    <Col  sm={6} lg={4}>
      <Card className='product-card mt-4'>
        <div className='card-head d-flex justify-content-between align-items-center px-2 mt-1'>
            <button className='btn'>إزاله</button>
            <button className='btn'>تعديل</button>
        </div>
        <Link to="#" style={{textDecoration:"none"}}>
          <Card.Img variant="top" src={img} />
        </Link>
      <Card.Body>
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

export default AdminAllProducts;
