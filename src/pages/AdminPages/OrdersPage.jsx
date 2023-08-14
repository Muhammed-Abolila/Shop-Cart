import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../components/AdminComp/SideBarComp/SideBar'
import OrderCard from '../../components/AdminComp/OrderCard/OrderCard'
import PaginationComp from '../../components/Utilities/Pagination/Pagination'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle'

const OrdersPage = () => {
    return(
        <section className="pageStyle pt-3">
             <Container>
                 <Row>
                     <Col sm={2}>
                         <SideBar/>
                     </Col>
                     <Col sm={10}>
                        <SubTitle title="إداره جميع الطلبات"/>
                        <div className='pt-4'>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                        </div>
                        
                     </Col>
                 </Row>
                 <PaginationComp/>
             </Container>
        </section>
)
}

export default OrdersPage
