import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa';

const UserProfileDetails = () => {
  return (
    <div className='user-profile-details mt-4'>
      <Row>
        <Col sm={10}>
          <div className='name'>
            <h5>الإسم:- </h5>
            <p>محمد أبو ليله</p>
          </div>
          <div className='phone'>
            <h5>رقم الهاتف:- </h5>
            <p>0123456789</p>
          </div>
          <div className='email'>
            <h5>الأيميل:- </h5>
            <p>mabolila638@gmail.com</p>
          </div>
        </Col>
        <Col sm={2} className='text-start'>
            <Link to="/user/eddit-profile" style={{textDecoration:"none"}}>
                <span className="eddit-icon"><FaRegEdit/></span>
            </Link>
        </Col>
      </Row>
    </div>
  )
}
export default UserProfileDetails

