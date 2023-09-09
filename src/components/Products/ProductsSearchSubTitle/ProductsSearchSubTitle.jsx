import React from 'react';
import { Col,Dropdown,Row } from 'react-bootstrap';
import {BiSortDown} from "react-icons/bi";
import ProductsSearchPageHook from '../../../CustomHooks/ProductsHooks/ProductsSearchPageHook';
const ProductsSearchSubTitle = ({ProductData,getProduct}) => {
  const sortByType=(param)=>{
    localStorage.setItem("sortType",param);
    getProduct()
  }
  return (
    <div className='ProductsSearchSubTitle mt-4'>
      <Row>

        <Col sm={6} >
          <h6 className='mt-3'>نتائج البحث:- {ProductData.results} نتيجه</h6>
        </Col>
        <Col sm={6} >
          <Dropdown className='text-start'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <p>
                  <BiSortDown/>
                  الترتيب حسب
              </p>
            </Dropdown.Toggle>

            <Dropdown.Menu className='text-center'>
            <Dropdown.Item onClick={()=>sortByType("بدون ترتيب")}>
                <p>بدون ترتيب</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("الأعلي تقييماََ")}>
                <p>الأعلي تقييماََ</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("الأكثر مبيعاََ")}>
                <p>الأكثر مبيعاََ </p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("السعر من الأعلي للأقل")}>
                <p> السعر من الأعلي للأقل</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("السعر من الأقل للأعلي")}>
                <p>السعر من الأقل للأعلي</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>


      </Row>
    </div>
  )
}

export default ProductsSearchSubTitle
