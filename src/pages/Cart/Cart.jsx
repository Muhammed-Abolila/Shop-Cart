import { Col, Container, Row } from 'react-bootstrap';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
import CartItem from '../../components/Cart/CartItem/CartItem';
import Coupon from '../../components/Cart/Coupon/Coupon';
import CartPageHook from '../../CustomHooks/CartHooks/CartPageHook';
const Cart = () => {
  let [productsCartData,reload,setReload,lengthOfArray,productCartDataToCoupone]=CartPageHook()

  return (
    <section className="cart-page pageStyle pt-3">
      <Container>
        <Row>
          <SubTitle title="عربه التسوق"/>
        </Row>
        <Row className='mt-3 justify-content-center'>
          <Col className='col-12 col-lg-10'>
            {productsCartData?(
              productsCartData.map((data,index)=><CartItem key={index} data={data} reload={reload} setReload={setReload}/>)
            ):<div className="mt-5 d-flex flex-column align-items-center">
              <h4>لاتوجد منتجات في العربه حاليا</h4>
              <h6>قم بالتسوق وأضف منتجات...</h6>
            </div>}
          </Col>
          <Col className='col-6 col-lg-2'>
            {lengthOfArray>=1?(
              <Coupon data={productCartDataToCoupone} reload={reload} setReload={setReload}/>
            ):null}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cart
