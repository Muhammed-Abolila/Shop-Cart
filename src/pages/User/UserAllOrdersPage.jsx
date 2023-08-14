import React from 'react'
import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import UserAllOrders from '../../components/UserComp/UserAllOrders/UserAllOrders'
import { Col, Container, Row } from 'react-bootstrap'
import PaginationComp from '../../components/Utilities/Pagination/Pagination'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle'

const UserAllOrdersPage = () => {
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                    <Col sm={2}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col sm={10}>
                        <SubTitle title="أهلا محمد أبو ليله"/>
                        <div className='pt-4'> 
                            <UserAllOrders/>
                            <UserAllOrders/>
                            <UserAllOrders/>
                            <UserAllOrders/>
                        </div>
                    </Col>
                </Row>
                <PaginationComp/>
            </Container>
       </section>
  )
}

export default UserAllOrdersPage
