import React from 'react'
import {Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const CategoryCard = ({item}) => {  
  return (
          <Col 
            xs={6}
            sm={6}
            md={4}
            lg={2}
            >
              <div className="category-card my-4">
                  <div className="img-container">
                    <Link to={`/products/category/${item._id}`}>
                      <img src={item.image} alt={item.name}/>
                    </Link>
                  </div>
                  <div className="card-content">
                    <h4>{item.name}</h4>
                  </div>
              </div>
            </Col>
  )
};



export default CategoryCard;
