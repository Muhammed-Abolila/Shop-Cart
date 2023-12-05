import { Col, Container, Row } from 'react-bootstrap';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
import CartItem from '../../components/Cart/CartItem/CartItem';
import Coupon from '../../components/Cart/Coupon/Coupon';
import CartPageHook from '../../CustomHooks/CartHooks/CartPageHook';
import NoProductYet from '../../components/Utilities/NoProductYet/NoProductYet';
import Spinner from '../../components/Utilities/Spinner/Spinner';
const Cart = () => {
  let [productsCartData,reload,setReload,lengthOfArray,productCartDataToCoupone]=CartPageHook()
  return (
    <>
    {productsCartData?(
      <section className="pageStyle pt-3">
      <Container>
        <Row>
          <SubTitle title="Your Cart"/>
        </Row>
        <Row className='justify-content-center'>
            <Col className='col-12 col-lg-10'>
              {productsCartData.products?(
                productsCartData.products.map((data,index)=><CartItem key={index} data={data} reload={reload} setReload={setReload}/>)
              ):(
                <NoProductYet msg="Your Cart Empty"/>
              )}
            </Col>
          <Col className='col-7 col-lg-2'>
            {lengthOfArray>=1?(
              <Coupon data={productCartDataToCoupone} reload={reload} setReload={setReload}/>
            ):null}
          </Col>
        </Row>
      </Container>
    </section>
    ):(<Spinner/>)}
    
    </>
  )
}

export default Cart
