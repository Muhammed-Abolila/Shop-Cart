import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../components/AdminComp/SideBarComp/SideBar'
import AddSubCategory from '../../components/AdminComp/AddSubCategory/AddSubCategory';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';

const AddSubCategoryPage = () => {
    return(
        <section className="pageStyle pt-3">
             <Container>
                 <Row>
                     <Col sm={2}>
                         <SideBar/>
                     </Col>
                     <Col sm={7}>
                         <div className='add-sub-category'>
                            <SubTitle title="أضف تصنيف فرعي جديده"/>
                            <AddSubCategory/>
                         </div>
                     </Col>
                 </Row>
             </Container>
        </section>
)
};
export default AddSubCategoryPage;
