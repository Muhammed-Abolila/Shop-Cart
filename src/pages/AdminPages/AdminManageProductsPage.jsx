import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/AdminComp/SideBarComp/SideBar";
import AdminAllProducts from "../../components/AdminComp/AdminProductCard/AdminProductCard";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import SubTitle from "../../components/Utilities/SubTitle/SubTitle";
import GrowExample from "../../components/Utilities/Spinner/Spinner"
import DeleteModal from "../../components/Utilities/DeleteModal/DeleteModal";
import AdminManageProductHook from "../../CustomHooks/ProductsHooks/AdminManageProductsHook";
const AdminManageProductPage=()=>{
    let [productData,showModalFunc,PaginationData,
        getPageCount,showModal,productName,productIdToDelete]=AdminManageProductHook()
    return( 
       <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                    <Col sm={2}>
                        <SideBar/>
                    </Col>   
                    <Col sm={10}>
                        <SubTitle title="إداره جميع المنتجات"/>
                        <Row className="justify-content-center">
                            {productData?(
                                productData.map((product,index)=>
                                 <AdminAllProducts key={index} 
                                    productData={product}
                                    showModalFunc={showModalFunc}
                                    />)
                            ):<GrowExample/>}
                        </Row>
                    </Col>
                </Row>
                {PaginationData>1?(<PaginationComp PaginationData={PaginationData} getPageCount={getPageCount}/>):null}
            </Container>
            {showModal===true?(<DeleteModal showModalFunc={showModalFunc} showModal={showModal} productName={productName} productIdToDelete={productIdToDelete}/>):null}
       </section>
    )
};
export default AdminManageProductPage;