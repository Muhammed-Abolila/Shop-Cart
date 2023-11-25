import { Link } from 'react-router-dom';
import DeleteBtn from '../../Utilities/DeleteBtn/DeleteBtn';
import { FaRegEdit } from "react-icons/fa"
const UserAddressCard = ({AddressesData,onDeleteAddress}) => {
  return (
    <div className='user-address'>
      <div className="address-head">
          <h4>{AddressesData.alias}</h4>
          <div>
            <DeleteBtn data={AddressesData} onDelete={onDeleteAddress}/>
            <Link to={`/user/eddit-address/${AddressesData._id}`} style={{textDecoration:"none"}}>
              <span className="eddit-icon"><FaRegEdit/></span>
            </Link>
          </div>
        </div>
        <div className="address">
          <h5>Address:- </h5>
          <p>{AddressesData.details}</p>
        </div>
        <div className="phone">
          <h5>Phone:- </h5>
          <p>{AddressesData.phone}</p>
        </div>
    </div>
  )
}

export default UserAddressCard;
