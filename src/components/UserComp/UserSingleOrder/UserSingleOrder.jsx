import {Row, Col } from 'react-bootstrap';
const UserSingleOrder = ({img}) => {
  return (
    <div>
      <Row>
          <Col sm={2}>
            <div className="img-container">
              <img src={img} alt="" />
            </div>
            </Col>
            <Col sm={10}>
              <div className="content">
                <div className="disc">
                  <h5>
                  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج 
                    <span>Starts</span>
                    <span>(160تقييم)</span>
                  </h5>
                </div>
                <div className="quantaty">
                  <h5>الكميه</h5> 
                  <div>7</div>
                </div>
              </div>
            </Col>
        </Row>
    </div>
  )
}

export default UserSingleOrder
