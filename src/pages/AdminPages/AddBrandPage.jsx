import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../components/AdminComp/SideBarComp/SideBar';
import AddBrand from '../../components/AdminComp/AddBrand/AddBrand';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';

const AddBrandPage = () => {
    return(
        <section className="pageStyle pt-3">
             <Container>
                 <Row>
                     <Col sm={2}>
                         <SideBar/>
                     </Col>
                     <Col sm={7}>
                         <div className='add-brand'>
                            <SubTitle title="أضف ماركه جديده"/>
                            <AddBrand/>
                         </div>
                     </Col> 
                 </Row>
             </Container>
        </section>
)
}; 
export default AddBrandPage;
