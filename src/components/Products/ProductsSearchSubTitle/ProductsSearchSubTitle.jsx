import React from 'react';
import { Col,Dropdown,Row } from 'react-bootstrap';
import {BiSortDown} from "react-icons/bi";
const ProductsSearchSubTitle = ({ProductData,getProduct}) => {
  const sortByType=(param)=>{
    localStorage.setItem("sortType",param);
    getProduct()
  }
  return (
    <div className='ProductsSearchSubTitle pt-4 mb-4'>
      <div className="content">
        <h2 className='mt-3'>{ProductData.results} Results</h2>
        <Dropdown className='text-start'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <div className="sort">
                  <p>Sort By</p>
                  <BiSortDown/>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='text-center'>
            <Dropdown.Item onClick={()=>sortByType("Recommended")}>
                <p>Recommended</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Top Ratedََ")}>
                <p>Top Rated</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Best Seller")}>
                <p>Best Seller</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Low To High")}>
                <p>Price: Low To High</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("High To Low")}>
                <p>Price: High To Low</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </div>
      {/* <Row>

        <Col sm={9} >
          <h6 className='mt-3'>{ProductData.results} Results</h6>
        </Col>
        <Col sm={2} >
          <Dropdown className='text-start'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <p>
                  <BiSortDown/>
                   Sort By
              </p>
            </Dropdown.Toggle>
            <Dropdown.Menu className='text-center'>
            <Dropdown.Item onClick={()=>sortByType("Recommended")}>
                <p>Recommended</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Top Ratedََ")}>
                <p>Top Rated</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Best Seller")}>
                <p>Best Seller</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Low To High")}>
                <p>Price: Low To High</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("High To Low")}>
                <p>Price: High To Low</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>


      </Row> */}
    </div>
  )
}

export default ProductsSearchSubTitle
