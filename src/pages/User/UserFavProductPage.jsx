import UesrSideBarComp from "../../components/UserComp/SideBarComp/UserSideBarComp";
import { Col, Container, Row } from "react-bootstrap";
import ProductContainer from "../../components/Home/ProductContainer/ProductContainer";
import UserFavProductPageHook from "../../CustomHooks/UserFavProductPage/UserFavProductPageHook";
import Spinner from "../../components/Utilities/Spinner/Spinner";
const UserFavProductPage = () => {
  let [
    wishListProductData,
    lengthOfWishlistArray,
    reload,
    setReload
  ] = UserFavProductPageHook();
  return (
    <>
      {wishListProductData ? (
        <section className="pageStyle pt-3">
          <Container>
            <Row className="mb-3">
              <Col xs={{ span: 8, offset: 2 }} md={{ span: 3, offset: 0 }}>
                <UesrSideBarComp />
              </Col>
              <Col xs={{ span: 10, offset: 1 }} md={{ span: 9, offset: 0 }}>
                <h3>Favorite Products</h3>
                <ProductContainer ProductData={wishListProductData} />
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default UserFavProductPage;
