import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/AdminComp/SideBarComp/SideBar";
import AdminAllProducts from "../../components/AdminComp/AdminProductCard/AdminProductCard";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import AdminManageProductHook from "../../CustomHooks/ProductsHooks/AdminManageProductsHook";
import NoProductYet from "../../components/Utilities/NoProductYet/NoProductYet";
import Spinner from "../../components/Utilities/Spinner/Spinner";
const AdminManageProductPage=()=>{
    let [productData,onDeleteProduct,PaginationData,getPageCount]=AdminManageProductHook()
    return(  
       <section className="pageStyle py-3 mb-5">
            <Container>
                <Row className="mb-3">
                <Col xs={{span:8,offset:2}} md={{span:3,offset:0}}>
                    <SideBar/>
                </Col>
                <Col xs={{span:10,offset:1}} md={{span:9,offset:0}}>
                    <h3 className="mb-4">Manage All Products</h3>
                    <Row className="justify-content-evenly">
                            {productData?(
                                productData.map((product,index)=>
                                 <AdminAllProducts key={index} 
                                    productData={product}
                                    onDeleteProduct={onDeleteProduct}
                                    />)
                            ):<Spinner/>}
                        </Row>
                    </Col>
                </Row>
                {PaginationData>1?(<PaginationComp PaginationData={PaginationData} getPageCount={getPageCount}/>):null}
            </Container>
       </section>
    )
};
export default AdminManageProductPage;