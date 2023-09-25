import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../components/AdminComp/SideBarComp/SideBar';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
import AddCoupon from '../../components/Coupon/AddCoupon/AddCoupon';
const AddCouponPage = () => {
    return(
        <section className="pageStyle pt-3">
             <Container>
                 <Row>
                     <Col sm={2}>
                         <SideBar/>
                     </Col>
                     <Col sm={7}>
                         <div className='add-coupon'>
                            <SubTitle title="أضف كوبون"/>
                            <AddCoupon/>
                         </div>
                     </Col> 
                 </Row>
             </Container>
        </section>
)
};
export default AddCouponPage;
