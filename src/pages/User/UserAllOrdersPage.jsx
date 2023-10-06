import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import UserAllOrders from '../../components/UserComp/UserAllOrders/UserAllOrders'
import { Col, Container, Row } from 'react-bootstrap'
import PaginationComp from '../../components/Utilities/Pagination/Pagination'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle'
import UserAllOrdersPageHook from '../../CustomHooks/User/UserAllOrdersPageHook';
const UserAllOrdersPage = () => {
    let [user,ordersResponse,ordersResponseData,pagination,getPageCount]=UserAllOrdersPageHook()
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                    <Col sm={2}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col sm={10}>
                        <SubTitle title={`مرحبا ${user.name}`}/>
                        <h5>عدد الطلبات #{ordersResponse.results}</h5>
                        <div className='pt-4'> 
                        {ordersResponseData?ordersResponseData.map((data,index)=><UserAllOrders key={index} ordersData={data}/>):null}
                        </div>
                    </Col>
                </Row>
                {pagination>1&&<PaginationComp PaginationData={pagination} getPageCount={getPageCount}/>}
            </Container>
       </section>
  )
}

export default UserAllOrdersPage
