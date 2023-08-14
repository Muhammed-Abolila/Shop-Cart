import React from 'react'
import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import { Col, Container, Row } from 'react-bootstrap'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
import UserAddAddress from '../../components/UserComp/UserAddAddress/UserAddAddress';
const UserAddAddressPage = () => {
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                    <Col sm={2}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col sm={7}>
                        <SubTitle title="إضافه عنوان جديد"/>
                        <UserAddAddress/>
                    </Col>
                </Row>
            </Container>
       </section>
  )
}

export default UserAddAddressPage
