import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../../components/AdminComp/SideBarComp/SideBar';
import PaginationComp from '../../components/Utilities/Pagination/Pagination';
import UserAllOrdersPageHook from '../../CustomHooks/User/UserAllOrdersPageHook';
import AdminAllOrders from '../../components/AdminComp/AdminAllOrders/AdminAllOrders';
import Spinner from '../../components/Utilities/Spinner/Spinner';
import NoProductYet from '../../components/Utilities/NoProductYet/NoProductYet';
const AdminAllOrdersPage = () => {
    let [user,ordersResponse,ordersResponseData,pagination,getPageCount,reloadAfterChange,setReloadAfterChange]=UserAllOrdersPageHook()
    return(
        <section className="pageStyle py-3 mb-5">
        <Container>
            <Row className="mb-3">
            <Col xs={{span:8,offset:2}} md={{span:3,offset:0}}>
                    <SideBar/>
                </Col>
                <Col xs={{span:10,offset:1}} md={{span:9,offset:0}}>
                    <h3 className="mb-4">Manage All Orders</h3>
                    {ordersResponseData.length>=1?(
                        <div> 
                            {ordersResponseData?ordersResponseData.map((data,index)=>
                                <AdminAllOrders 
                                    key={index} 
                                    ordersData={data} 
                                    reloadAfterChange={reloadAfterChange} 
                                    setReloadAfterChange={setReloadAfterChange}
                                />):(
                                    <Spinner/>
                                )}
                        </div>
                    ):(<NoProductYet msg="No Orders Yet"/>)}
                    
                </Col>
            </Row>
            {pagination>1&&<PaginationComp PaginationData={pagination} getPageCount={getPageCount}/>}
        </Container>
        </section>
)
};
export default AdminAllOrdersPage;
