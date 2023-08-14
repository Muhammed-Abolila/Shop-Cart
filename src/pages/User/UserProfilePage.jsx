import React from 'react'
import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import { Col, Container, Row } from 'react-bootstrap';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle'
import ChangePassword from '../../components/UserComp/ChangePassword/ChangePassword'
import UserProfileDetails from '../../components/UserComp/UserProfileDetails/UserProfileDetails'

const UserProfilePage = () => {
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                    <Col sm={2}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col sm={10}>
                        <SubTitle title="الصفحه الشخصيه"/> 
                        <Row>
                            <UserProfileDetails/>
                        </Row>
                        <SubTitle title="تغيير كلمه السر"/> 
                        <Row>
                            <ChangePassword/>
                        </Row>
                    </Col>
                </Row>
            </Container>
       </section>
  )
}


export default UserProfilePage
