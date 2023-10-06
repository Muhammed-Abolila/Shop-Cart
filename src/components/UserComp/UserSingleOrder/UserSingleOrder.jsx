import {Row, Col } from 'react-bootstrap';
import { BaseUrl } from '../../../Redux/Type/Type';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const UserSingleOrder = ({singleOrder}) => {
  return (
    <div>
      <Row>
          <Col sm={2}>
            <div className="img-container">
              <Link to={`/details/${singleOrder.product._id}`}>
                <img src={`${BaseUrl}/products/${singleOrder.product.imageCover}`} alt={singleOrder.product.title} />
              </Link>
            </div>
            </Col>
            <Col sm={10}>
              <div className="content">
                <div className="disc">
                  <h5>{singleOrder.product.title}</h5>
                  <div className="rate-container d-flex justify-content-start align-items-center">
                    <div className="rate">
                      <BsFillStarFill/>
                      <p>{singleOrder.product.ratingsAverage||0}</p>
                    </div>
                    <div className="rate-qty m-0 me-2">({singleOrder.product.ratingsQuantity||0} تقييم )</div>
                  </div>
                  <div className="color" style={{backgroundColor:`${singleOrder.color}`}}></div>
                  <div className="price mt-2">
                    <h5>السعر :- </h5> 
                    <div>{singleOrder.price}</div>
                  </div>
                  <div className="quantaty mt-2">
                    <h5>الكميه :- </h5> 
                    <div>{singleOrder.count}</div>
                  </div>
                </div>
              </div>
            </Col>
        </Row>
        <hr className="my-4"/>
    </div>
  )
}

export default UserSingleOrder
