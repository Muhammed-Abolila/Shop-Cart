import { Col, Row } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa';
import UserEdditProfile from '../UserEdditProfile/UserEdditProfile';
import UserProfileDetailsHook from '../../../CustomHooks/User/UserProfileDetailsHook';
const UserProfileDetails = () => {
  let [user,ShowUpdateModalFun,showUpdateModal,setShowUpdateModal]=UserProfileDetailsHook()
  return (
    <div className='user-profile-details mt-4'>
      <Row>
        <Col sm={10}>
          <div className='name'>
            <h5>الإسم:- </h5>
            <p>{user.name}</p>
          </div>
          <div className='phone'>
            <h5>رقم الهاتف:- </h5>
            <p>{user.phone}</p>
          </div>
          <div className='email'>
            <h5>الإيميل:- </h5>
            <p>{user.email}</p>
          </div>
        </Col>
        <Col sm={2} className='text-start'>
            <span onClick={ShowUpdateModalFun} className="eddit-icon"><FaRegEdit/></span>
            {showUpdateModal&&<UserEdditProfile setShowUpdateModal={setShowUpdateModal}/>}
        </Col>
      </Row>
    </div>
  )
}
export default UserProfileDetails

