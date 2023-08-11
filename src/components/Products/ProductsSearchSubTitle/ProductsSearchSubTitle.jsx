import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col,Dropdown,Row } from 'react-bootstrap';

const ProductsSearchSubTitle = () => {
  return (
    <div className='ProductsSearchSubTitle mt-4'>
      <Row>

        <Col sm={6} >
          <h6 className='mt-3'>نتائج البحث:- 900 نتيجه</h6>
        </Col>
        <Col sm={6} >
          <Dropdown className='text-start'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <p>
                  <FontAwesomeIcon icon={faArrowDownShortWide} />
                  الترتيب حسب
                </p>
            </Dropdown.Toggle>

            <Dropdown.Menu className='text-center'>
              <Dropdown.Item href="#/action-1">
                <p>الأعلي سعراً</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <p>الأعلي </p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <p> سعراً</p>
                <hr />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <p>الأعلي سعراً</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>


      </Row>
    </div>
  )
}

export default ProductsSearchSubTitle
