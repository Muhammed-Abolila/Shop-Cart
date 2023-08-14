import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../components/AdminComp/SideBarComp/SideBar';
import AddProduct from '../../components/AdminComp/AddProduct/AddProduct';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';

const AddProductPage = () => {
    return(
        <section className="pageStyle pt-3">
             <Container>
                 <Row>
                     <Col sm={2}>
                         <SideBar/>
                     </Col>
                     <Col sm={7}>
                         <div className='add-product'>
                            <SubTitle title="أضف منتج جديد"/>
                            <AddProduct/>
                         </div>
                     </Col>
                 </Row>
             </Container>
        </section>
)
};
export default AddProductPage;
