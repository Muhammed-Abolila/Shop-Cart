import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import { Col, Container, Row } from 'react-bootstrap';
import UserProfileDetails from '../../components/UserComp/UserProfileDetails/UserProfileDetails';
import ChangePassword from '../../components/UserComp/ChangePassword/ChangePassword';
const UserProfilePage = () => {
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                <Col xs={{span:8,offset:2}} md={{span:3,offset:0}}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col xs={{span:10,offset:1}} md={{span:9,offset:0}}>
                        <h3 className="mb-4">Personal Profile</h3>
                        <UserProfileDetails/>
                        <h3 className="mb-2 mt-3">Change Password</h3>
                        <ChangePassword/>
                    </Col>
                </Row>
            </Container>
       </section>
  )
}


export default UserProfilePage
