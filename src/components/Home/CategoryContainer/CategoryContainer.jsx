import React from "react";
import SubTitle from "../../Utilities/SubTitle/SubTitle";
import { Row, Col } from "react-bootstrap";
import Brand_Category_Card from "../../Category/Brand_Category_Card/Brand_Category_Card";
import { Link } from "react-router-dom";
import NoProductYet from "../../Utilities/NoProductYet/NoProductYet";
const CategoryContainer = ({ CategoryData, title, btnName, pathName }) => {
  return (
    <section className="mt-5 mb-4">
      <SubTitle title={title} btnName={btnName} pathName={pathName} />
      <Row className="justify-content-between">
        {CategoryData.length>=1? (
          CategoryData.map((item, index) => (
            <Col xs={6} sm={6} md={4} lg={2}>
              <Link to={`/products/category/${item._id}`}>
                <Brand_Category_Card key={index} item={item} />
              </Link>
            </Col>
          ))
        ) : (
        <NoProductYet msg="No Categories Now..."/>
        )}
      </Row>
    </section>
  );
};
export default CategoryContainer;
