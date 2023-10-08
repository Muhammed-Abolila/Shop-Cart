import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../components/AdminComp/SideBarComp/SideBar';
import PaginationComp from '../../components/Utilities/Pagination/Pagination';
import UserAllOrdersPageHook from '../../CustomHooks/User/UserAllOrdersPageHook';
import AdminAllOrders from '../../components/AdminComp/AdminAllOrders/AdminAllOrders';
import SubTitle from '../../components/Utilities/SubTitle/SubTitle';
const AdminAllOrdersPage = () => {
    let [user,ordersResponse,ordersResponseData,pagination,getPageCount,reloadAfterChange,setReloadAfterChange]=UserAllOrdersPageHook()
    return(
        <section className="pageStyle pt-3">
        <Container>
            <Row className="mb-3">
                <Col sm={2}>
                    <SideBar/>
                </Col>
                <Col sm={10}>
                    <SubTitle title="إداره جميع الطلبات"/>
                    <h5>عدد الطلبات #{ordersResponse.results}</h5>
                    <div className='pt-4'> 
                    {ordersResponseData?ordersResponseData.map((data,index)=><AdminAllOrders key={index} ordersData={data} reloadAfterChange={reloadAfterChange} setReloadAfterChange={setReloadAfterChange}/>):null}
                    </div>
                </Col>
            </Row>
            {pagination>1&&<PaginationComp PaginationData={pagination} getPageCount={getPageCount}/>}
        </Container>
        </section>
)
};
export default AdminAllOrdersPage;
