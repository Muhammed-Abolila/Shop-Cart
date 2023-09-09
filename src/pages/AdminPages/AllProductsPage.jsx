import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/AdminComp/SideBarComp/SideBar";
import AdminAllProducts from "../../components/AdminComp/AdminProductCard/AdminProductCard";
import thumb from "../../assets/image/item.png";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import SubTitle from "../../components/Utilities/SubTitle/SubTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLimitProductApi, deleteProduct} from "../../Redux/Actions/ProductActions";
import GrowExample from "../../components/Utilities/Spinner/Spinner"
const AllProducts=()=>{
    let [reloadafterDelete,setreloadAfterDelete]=useState(false)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetLimitProductApi())
    },[reloadafterDelete])
    let productData=useSelector((state)=>state.ProductReducer.AllProductApi);
    let PaginationData=useSelector((state)=>state.ProductReducer.AllProductApi.paginationResult);
    const getPageCount=(param)=>{
         dispatch(GetLimitProductApi(param))
    }
    const handleDeleteBtn=(productId)=>{
        dispatch(deleteProduct(productId));
        setreloadAfterDelete(!reloadafterDelete)
    };
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
                            {productData.data?(
                                productData.data.map((product,index)=>
                                 <AdminAllProducts key={index} 
                                    productData={product}
                                    handleDeleteBtn={handleDeleteBtn}
                                    />)
                            ):<GrowExample/>}
                        </Row>
                    </Col>
                </Row>
                {PaginationData?(<PaginationComp PaginationData={PaginationData} getPageCount={getPageCount}/>):null}
            </Container>
       </section>
    )
}
export default AllProducts;