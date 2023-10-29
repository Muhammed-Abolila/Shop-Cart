import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillHeartFill, BsFillStarFill } from "react-icons/bs";
import { AiFillEye} from "react-icons/ai";
import { ImCart} from "react-icons/im";
import ProductCardHook from '../../../CustomHooks/ProductsHooks/ProductCardHook';
import { BaseUrl } from '../../../Redux/Type/Type';
import ReactStars from 'react-rating-stars-component';
const ProductCard = ({CardProductData,favProduct}) => {
  let [favStyle,handleWishlist]=ProductCardHook(CardProductData,favProduct);   
  return (
      <Card className='product-card mb-3'>
            {window.location.pathname==="/user/favproduct"?(
              <div className="image-container">
                <Card.Img variant="top" src={`${BaseUrl}/products/${CardProductData.imageCover}`}/>
              </div>
              ):(
              <div className="image-container">
                <Card.Img variant="top" src={CardProductData.imageCover}/>
                <div className="layer">
                  <ImCart/>
                  <BsFillHeartFill style={{color: favStyle}} onClick={handleWishlist}/>
                  <Link to={`/details/${CardProductData._id}`} style={{textDecoration:"none"}}>
                    <AiFillEye/>
                  </Link>
                </div>
              </div>
            )}
      <Card.Body>
          <h2>{CardProductData.title}</h2>
          <ReactStars
              count={5}
              value={CardProductData.ratingsAverage}
              size={24}
              edit={false}
              isHalf={true}
              color="#c1c1c1"
              activeColor="#ffd700"
            />
          <div className='price'>
            {CardProductData.priceAfterDiscount?(
              <>
              <p>{CardProductData.priceAfterDiscount} EGP</p>
              <p className="price-before-discount">
                {CardProductData.price} EGP
                <span></span>
              </p>
              </>
              ):(
              <p>{CardProductData.price} EGP</p>
              )}    
          </div>
      </Card.Body>
      <div className="layer">
            <ImCart/>
            <BsFillHeartFill style={{color: favStyle}} onClick={handleWishlist}/>
            <Link to={`/details/${CardProductData._id}`} style={{textDecoration:"none"}}>
                <AiFillEye/>
            </Link>
      </div>
    </Card> 
  )
};
export default ProductCard;