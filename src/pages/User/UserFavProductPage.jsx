import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import { Col, Container, Row } from 'react-bootstrap'
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer';
import GrowExample from '../../components/Utilities/Spinner/Spinner';
import UserFavProductPageHook from '../../CustomHooks/UserFavProductPage/UserFavProductPageHook';
const UserFavProductPage = () => {
    let [wishListProductData]=UserFavProductPageHook()
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                    <Col sm={2}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col sm={10}>
                    {wishListProductData?(<ProductContainer  ProductData={wishListProductData} title={""}/>):<GrowExample/>}
                    </Col>
                </Row>
            </Container>
       </section>
  )
}
export default UserFavProductPage;
