import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsHeart, BsFillStarFill } from "react-icons/bs";
const ProductCard = ({CardProductData}) => {
  return (
      <Card className='product-card mt-4'>
        <Link to={`/details/${CardProductData._id}`} style={{textDecoration:"none"}}>
          <Card.Img variant="top" src={CardProductData.imageCover} />
        </Link>
      <Card.Body>
          <div className="fav-icon">
              <BsHeart />
          </div>
          <Card.Text>{CardProductData.title}</Card.Text>
          <div className="card-footer">
            <div className="rate">
              <BsFillStarFill/>
              <p>{CardProductData.ratingsQuantity}</p>
            </div>
            <div className='price'>
              <h5>{CardProductData.price}جنيه</h5>
            </div>
          </div>
      </Card.Body>
      </Card> 
  )
};
export default ProductCard; 
