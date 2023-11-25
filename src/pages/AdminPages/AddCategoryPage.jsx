import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../components/AdminComp/SideBarComp/SideBar'
import AddCategory from '../../components/AdminComp/AddCategory/AddCategory';
const AddCategoryPage = () => {
    return(
        <section className="pageStyle pt-3">
             <Container>
                <Row className="mb-3">
                <Col xs={{span:8,offset:2}} md={{span:3,offset:0}}>
                    <SideBar/>
                </Col>
                <Col xs={{span:10,offset:1}} md={{span:9,offset:0}}>
                    <h3>Add New Category</h3>
                        <div className='add-category'>
                            <AddCategory/>
                        </div>
                    </Col>
                 </Row>
             </Container>
        </section> 
)
};
export default AddCategoryPage; 
