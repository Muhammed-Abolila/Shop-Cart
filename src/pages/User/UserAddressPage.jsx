import React from 'react'
import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import { Col, Container, Row } from 'react-bootstrap'
import UserAddress from '../../components/UserComp/UserAddress/UserAddress'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle'
import { Link } from 'react-router-dom'
const UserAddressPage = () => {
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                    <Col sm={2}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col sm={10}>
                        <SubTitle title="دفتر العناوين"/>
                        <div className="pt-4">
                            <UserAddress/>
                            <UserAddress/>
                        </div>
                    </Col>
                    <Link to="/user/add-address" style={{textDecoration:"none",textAlign:"center"} }>
                       <button className='btn btn-style'>أضافه عنوان جديد</button>
                    </Link>
                </Row>
            </Container>
       </section>
  )
}

export default UserAddressPage
