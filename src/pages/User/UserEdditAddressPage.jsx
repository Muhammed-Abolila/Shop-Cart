import React from 'react'
import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import { Col, Container, Row } from 'react-bootstrap'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle'
import UserEdditAddress from '../../components/UserComp/UserEdditAddress/UserEdditAddress'
const UserEdditAddressPage = () => {
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                <Col xs={{span:8,offset:2}} md={{span:3,offset:0}}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col xs={{span:10,offset:1}} md={{span:9,offset:0}}>
                        <UserEdditAddress/>
                    </Col>
                </Row>
            </Container>
       </section>
  )
}

export default UserEdditAddressPage
