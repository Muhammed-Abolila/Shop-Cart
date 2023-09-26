import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillHeartFill, BsFillStarFill } from "react-icons/bs";
import {RiShoppingCart2Fill} from "react-icons/ri"
import ProductCardHook from '../../../CustomHooks/ProductsHooks/ProductCardHook';
const ProductCard = ({CardProductData,favProduct,reloadWhenChooseSameProduct}) => {
  let [favStyle,handleWishlist,getId]=ProductCardHook(CardProductData,favProduct,reloadWhenChooseSameProduct);
  return (
      <Card className='product-card mt-4'>
        <Link to={`/details/${CardProductData._id}`} style={{textDecoration:"none"}}>
          <Card.Img variant="top" src={CardProductData.imageCover} onClick={()=>getId(CardProductData._id)}/>
        </Link>
      <Card.Body>
          <div className="fav-icon d-flex justify-content-between mb-2 mx-2">
              <BsFillHeartFill style={{color: favStyle}} onClick={handleWishlist}/>
              <RiShoppingCart2Fill style={{color: "gray"}}/>
          </div>
          <Card.Text>{CardProductData.title}</Card.Text>
          <div className="card-footer">
            <div className="rate">
              <BsFillStarFill/>
              <p>{CardProductData.ratingsAverage||0}</p>
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


