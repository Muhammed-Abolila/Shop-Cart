import React from 'react'
import UesrSideBarComp from '../../components/UserComp/SideBarComp/UserSideBarComp'
import { Col, Container, Row } from 'react-bootstrap'
import SubTitle from '../../components/Utilities/SubTitle/SubTitle'
import { Link } from 'react-router-dom'
import UserAllAddresses from '../../components/UserComp/UserAllAddresses/UserAllAddresses';
import UserAllAddressesHook from '../../CustomHooks/User/UserAllAddressesHook';
const UserAddressPage = () => {
  let [AllAddressesData,onDeleteAddress]=UserAllAddressesHook();
  return (
    <section className="pageStyle pt-3">
            <Container>
                <Row className="mb-3">
                <Col xs={{span:8,offset:2}} md={{span:3,offset:0}}>
                        <UesrSideBarComp/>
                    </Col>
                    <Col xs={{span:10,offset:1}} md={{span:9,offset:0}}>
                        <h3 className="mb-4">Addresses</h3>
                        <div className="">
                            <UserAllAddresses/>
                        </div>
                        {AllAddressesData.length>=3?null:(
                            <Link to="/user/add-address" style={{textDecoration:"none"} }>
                                <button className='btn btn-style'>Add New Address</button>
                            </Link>
                        )}
                    </Col>
                                        
                </Row>
            </Container>
       </section>
  );
};

export default UserAddressPage
