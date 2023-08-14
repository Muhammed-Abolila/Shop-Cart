import React from 'react'
import {Col } from 'react-bootstrap'
const CategoryCard = ({img,category}) => {
  return (
        <Col 
          xs={6}
          sm={6}
          md={4}
          lg={2}
          >
            <div className='category-card mt-4'>
              <div className="card-content">
                <img src={img} alt="" />
                <h4>{category}</h4>
              </div>
            </div>
          </Col>
  )
};

export default CategoryCard;
