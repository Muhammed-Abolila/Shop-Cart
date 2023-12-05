import React, { useState } from 'react';
import {Dropdown} from 'react-bootstrap';
import {BiSortDown} from "react-icons/bi";
const ProductsSearchSubTitle = ({ProductData,getProduct}) => {
  let sortBy=localStorage.getItem("sortType")
  const [sort, setSort] = useState(sortBy);
  const sortByType=(param)=>{
    localStorage.setItem("sortType",param);
    setSort(param)
    getProduct()
  };
  return (
    <div className='ProductsSearchSubTitle pt-4 mb-4'>
      <div className="content">
        <h2 className='mt-3'>{ProductData.results} Results</h2>
        <Dropdown className='text-start'>
            <Dropdown.Toggle className="btn-style">
              <div className="sort">
                  <p>{sort}</p>
                  <BiSortDown/>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='text-center'>
            <Dropdown.Item onClick={()=>sortByType("Recommended")}>
                <p>Recommended</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Top Rated")}>
                <p>Top Rated</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Best Seller")}>
                <p>Best Seller</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Lowest price")}>
                <p>Lowest price</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item  onClick={()=>sortByType("Highest price")}>
                <p>Highest price</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </div>
    </div>
  )
};
export default ProductsSearchSubTitle
