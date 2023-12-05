import { Col, Row } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa';
import UserEdditProfile from '../UserEdditProfile/UserEdditProfile';
import UserProfileDetailsHook from '../../../CustomHooks/User/UserProfileDetailsHook';
const UserProfileDetails = () => {
  let [userProfile,ShowUpdateModalFun,showUpdateModal,setShowUpdateModal]=UserProfileDetailsHook()
  return (
    <div className='user-profile-details'>
      <Row>
        <Col xs={10}>
          <div className='name'>
            <h5>Name:- </h5>
            <p>{userProfile.name}</p>
          </div>
          <div className='phone'>
            <h5>Phone:- </h5>
            <p>{userProfile.phone}</p>
          </div>
          <div className='email'>
            <h5>E-mail:- </h5>
            <p>{userProfile.email}</p>
          </div>
        </Col>
        <Col xs={2} className='text-end'>
            <span onClick={ShowUpdateModalFun} className="eddit-icon"><FaRegEdit/></span>
            {showUpdateModal&&<UserEdditProfile setShowUpdateModal={setShowUpdateModal}/>}
        </Col>
      </Row>
    </div>
  )
}
export default UserProfileDetails

