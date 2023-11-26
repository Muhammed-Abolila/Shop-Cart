import UserAddressCard from "../UserAddressCard/UserAddressCard";
import UserAllAddressesHook from "../../../CustomHooks/User/UserAllAddressesHook";
import Spinner from "../../Utilities/Spinner/Spinner";
const UserAllAddresses = () => {
  let [AllAddressesData, onDeleteAddress] = UserAllAddressesHook();
  return (
    <>
      {AllAddressesData ? (
        AllAddressesData.map((AddressesData, index) => (
          <UserAddressCard
            key={index}
            AddressesData={AddressesData}
            onDeleteAddress={onDeleteAddress}
          />
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UserAllAddresses;
