import React from 'react'
import {Col } from 'react-bootstrap'
const CategoryCard = ({img,category,background}) => {
  return (
          <Col 
            xs={6}
            sm={6}
            md={4}
            lg={2}
            >
              <div className="category-card my-4">
                  <div className="img-container" style={{backgroundColor:`${background}`}}>
                    <img src={img} alt=""/>
                  </div>
                  <div className="card-content">
                    <h4>{category}</h4>
                  </div>
              </div>
            </Col>

  )
};



export default CategoryCard;
