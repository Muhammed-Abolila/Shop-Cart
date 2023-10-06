import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillHeartFill, BsFillStarFill } from "react-icons/bs";
import {RiShoppingCart2Fill} from "react-icons/ri"
import ProductCardHook from '../../../CustomHooks/ProductsHooks/ProductCardHook';
import { BaseUrl } from '../../../Redux/Type/Type';
const ProductCard = ({CardProductData,favProduct}) => {
  let [favStyle,handleWishlist]=ProductCardHook(CardProductData,favProduct);   
  return (
      <Card className='product-card mt-4'>
        <Link to={`/details/${CardProductData._id}`} style={{textDecoration:"none"}}>
          {window.location.pathname==="/user/favproduct"?(
            <Card.Img variant="top" src={`${BaseUrl}/products/${CardProductData.imageCover}`}/>
          ):(
            <Card.Img variant="top" src={CardProductData.imageCover}/>
          )}
          
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
              {CardProductData.priceAfterDiscount?(
                <>
                <p className="price-before-discount">
                  {CardProductData.price} جنيه
                  <span></span>
                </p>
                <p>{CardProductData.priceAfterDiscount} جنيه</p>
                </>
              ):(
                <p>{CardProductData.price} جنيه</p>
              )}
              
            </div>
          </div>
      </Card.Body>
      </Card> 
  )
};
export default ProductCard; 


