import UserAddressCard from '../UserAddressCard/UserAddressCard';
import GrowExample from '../../Utilities/Spinner/Spinner';
import UserAllAddressesHook from '../../../CustomHooks/User/UserAllAddressesHook';
const UserAllAddresses = () => {
    let [AllAddressesData,onDeleteAddress]=UserAllAddressesHook()
  return (
    <>
    {AllAddressesData?(
        AllAddressesData.map((AddressesData,index)=><UserAddressCard 
            key={index} 
            AddressesData={AddressesData}
            onDeleteAddress={onDeleteAddress}
            />)
    ):<GrowExample/>}
    </>
  )
}

export default UserAllAddresses
