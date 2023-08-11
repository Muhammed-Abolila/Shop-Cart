import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({img}) => {
  return (
      <Card className='product-card mt-4'>
        <Link to="/details/:id" style={{textDecoration:"none"}}>
          <Card.Img variant="top" src={img} />
        </Link>
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
  )
}

export default ProductCard;
