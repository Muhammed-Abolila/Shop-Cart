import React from 'react'
import {Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Brand_Category_Card = ({item}) => {  
  return (
          <Col 
            xs={6}
            sm={6}
            md={4}
            lg={2}
            >
              <Link to={`/products/category/${item._id}`}>
                <div className="category-card mb-3">
                    <div className="img-container">
                        <img src={item.image} alt={item.name}/>
                    </div>
                    <div className="card-content">
                      <div className="right"></div>
                      <div className="left"></div>
                      <h2>{item.name}</h2>
                    </div>
                </div>
              </Link>
            </Col>
  )
};



export default Brand_Category_Card;
