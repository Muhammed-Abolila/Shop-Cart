import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../components/AdminComp/SideBarComp/SideBar';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
import EdditProduct from '../../components/AdminComp/EdditProduct/EdditProduct';
const EdditProductPage = () => {
    return(
        <section className="pageStyle pt-3">
             <Container>
                 <Row>
                     <Col sm={2}>
                         <SideBar/>
                     </Col>
                     <Col sm={7}>
                         <div className='eddit-product'>
                            <SubTitle title="تعديل المنتج"/>
                            <EdditProduct/>
                         </div>
                     </Col>
                 </Row>
             </Container>
        </section>
    )
};
export default EdditProductPage