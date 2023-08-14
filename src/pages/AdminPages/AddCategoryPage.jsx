import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../components/AdminComp/SideBarComp/SideBar'
import AddCategory from '../../components/AdminComp/AddCategory/AddCategory';
import SubTitle from "../../components/Utilities/SubTitle/SubTitle";

const AddCategoryPage = () => {
    return(
        <section className="pageStyle pt-3">
             <Container>
                 <Row>
                     <Col sm={2}>
                         <SideBar/>
                     </Col>
                     <Col sm={7}>
                        <div className='add-category'>
                            <SubTitle title="أضف تصنيف جديده"/>
                            <AddCategory/>
                        </div>
                     </Col>
                 </Row>
             </Container>
        </section> 
)
};
export default AddCategoryPage;
