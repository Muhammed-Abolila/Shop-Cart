import React from "react";
import SubTitle from "../../Utilities/SubTitle/SubTitle";
import { Row, Col } from "react-bootstrap";
import Brand_Category_Card from "../../Category/Brand_Category_Card/Brand_Category_Card";
import Spinner from "../../Utilities/Spinner/Spinner";
import { Link } from "react-router-dom";
const BrandsContainer = ({ BrandData, title, btnName, pathName }) => {
  return (
    <section className="mb-5 mt-4">
      <SubTitle title={title} btnName={btnName} pathName={pathName} />
      <Row className="justify-content-between">
        {BrandData ? (
          BrandData.map((item, index) => (
            <Col xs={6} sm={6} md={4} lg={2}>
              <Link to={`/products/brand/${item._id}`}>
                <Brand_Category_Card key={index} item={item} />
              </Link>
            </Col>
          ))
        ) : (
          <Spinner />
        )}
      </Row>
    </section>
  );
};
export default BrandsContainer;
