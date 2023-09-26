import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllAddresses, DeleteAddresse } from '../../Redux/Actions/AddressActions';
const UserAllAddressesHook = () => {
    let dispatch=useDispatch();
    let [reloadAfterDelete,setReloadAfterDelete]=useState(false)
    useEffect(()=>{
        const GetAddressess=async()=>{
            await dispatch(GetAllAddresses());
        };
        GetAddressess()
    },[reloadAfterDelete]);
    let AllAddresses=useSelector((state)=>state.AddressReducers.AllAddresses);
    let AllAddressesData=[];
    try{
        if(AllAddresses.data){
            AllAddressesData=AllAddresses.data
        };
    }catch(e){};
    // User Delete Address
    const onDeleteAddress=async(addressId)=>{
        await dispatch(DeleteAddresse(addressId));
        setReloadAfterDelete(!reloadAfterDelete)
      };
      return [AllAddressesData,onDeleteAddress]
}

export default UserAllAddressesHook
