import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import { Col, Container, Row } from 'react-bootstrap'
import ProductContainer from '../../components/Home/ProductContainer/ProductContainer';
import GrowExample from '../../components/Utilities/Spinner/Spinner';
import UserFavProductPageHook from '../../CustomHooks/UserFavProductPage/UserFavProductPageHook';
import NoProductYet from '../../components/Utilities/NoProductYet/NoProductYet';
import Spinner from '../../components/Utilities/Spinner/Spinner';
const UserFavProductPage = () => {
    let [wishListProductData,lengthOfWishlistArray,reload,setReload]=UserFavProductPageHook();
    console.log(wishListProductData);
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                <Col xs={{span:8,offset:2}} md={{span:3,offset:0}}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col xs={{span:10,offset:1}} md={{span:9,offset:0}}>
                        <h3>Favorite Products</h3>
                        {wishListProductData.length>=1?(
                            <div> 
                                {wishListProductData?(<ProductContainer ProductData={wishListProductData}/>):<Spinner/>}
                            </div>
                        ):(
                            <NoProductYet msg="No Products Yet"/>
                        )}
                        
                    </Col>
                </Row>
            </Container>
       </section>
  )
}
export default UserFavProductPage;
