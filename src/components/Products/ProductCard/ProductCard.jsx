import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillHeartFill} from "react-icons/bs";
import { AiFillEye} from "react-icons/ai";
import ProductCardHook from '../../../CustomHooks/ProductsHooks/ProductCardHook';
import { BaseUrl } from '../../../Redux/Type/Type';
import ReactStars from 'react-rating-stars-component';
import UserFavProductPageHook from '../../../CustomHooks/UserFavProductPage/UserFavProductPageHook';
const ProductCard = ({CardProductData,favProduct}) => {
  let [wishListProductData,lengthOfWishlistArray,reload,setReload]=UserFavProductPageHook();
  let [favStyle,handleWishlist,scrollToTop]=ProductCardHook(CardProductData,favProduct,reload,setReload);
  return (
      <Card className='product-card mb-3'>
            {window.location.pathname==="/user/favproduct"?(
              <div className="image-container">
                <Card.Img variant="top" src={`${BaseUrl}/products/${CardProductData.imageCover}`}/>
              </div>
              ):(
              <div className="image-container">
                <Card.Img variant="top" src={CardProductData.imageCover}/>
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
          <BsFillHeartFill style={{color: favStyle}} onClick={handleWishlist}/>
          <Link to={`/details/${CardProductData._id}`}  onClick={scrollToTop} style={{textDecoration:"none"}}>
              <AiFillEye/>
          </Link>
      </div>
    </Card> 
  )
};
export default ProductCard;