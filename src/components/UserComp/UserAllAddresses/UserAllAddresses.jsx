import UserAddressCard from "../UserAddressCard/UserAddressCard";
import UserAllAddressesHook from "../../../CustomHooks/User/UserAllAddressesHook";
import NoProductYet from "../../Utilities/NoProductYet/NoProductYet";
const UserAllAddresses = () => {
  let [AllAddressesData, onDeleteAddress] = UserAllAddressesHook();
  return (
    <>
      {AllAddressesData.length >= 1 ? (
        AllAddressesData.map((AddressesData, index) => (
          <UserAddressCard
            key={index}
            AddressesData={AddressesData}
            onDeleteAddress={onDeleteAddress}
          />
        ))
      ) : (
        <NoProductYet msg="No Addresses" />
      )}
    </>
  );
};
export default UserAllAddresses;
