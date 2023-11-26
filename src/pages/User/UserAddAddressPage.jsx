import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp';
import { Col, Container, Row } from 'react-bootstrap';
import UserAddAddress from '../../components/UserComp/UserAddAddress/UserAddAddress';
const UserAddAddressPage = () => {
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                <Col xs={{span:8,offset:2}} md={{span:3,offset:0}}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col xs={{span:10,offset:1}} md={{span:9,offset:0}}>
                        <UserAddAddress/>
                    </Col>
                </Row>
            </Container>
       </section>
  )
}

export default UserAddAddressPage
