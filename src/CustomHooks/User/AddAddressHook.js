import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostAddressData } from "../../Redux/Actions/AddressActions";
import Notifications from "../../CustomHooks/Notifications";
import { useNavigate } from "react-router";
const AddAddressHook = () => {
  let Navigate=useNavigate()
  let dispatch = useDispatch();
  let [display,setDispaly]=useState("none")
  let [alias, setAlias] = useState("");
  let [addressDetails, setAddressDetails] = useState("");
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState(true);
  const onAliasChange = e => {
    setAlias(e.target.value);
  };
  const onAddressDetailsChange = e => {
    setAddressDetails(e.target.value);
  };
  const onPhoneChange = e => {
    setPhone(e.target.value);
  };
  let createAddress = useSelector(state => state.AddressReducers.CreateAddress);
  let createAddressResponse;
  try {
    createAddressResponse = createAddress;
  } catch (e) {};
  let [notify] = Notifications(createAddressResponse);
  const handleClick = async() => {
    if (alias == "") {
      notify("Insert City");
      return;
    } else if (addressDetails == "") {
      notify("Insert Detailed Address");
      return;
    } else if (phone == "") {
      notify("Insert Phone Number");
      return;
    } else {
      setLoading(true);
      setDispaly("flex");
      await dispatch(
        PostAddressData({
          details: addressDetails,
          phone: phone,
          alias: alias
        })
      );
      setAlias("");
      setAddressDetails("");
      setPhone("");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (loading === false) {
      if(createAddressResponse.status==200||createAddressResponse.status==201){
        notify(createAddressResponse.data.message);
        setTimeout(()=>{
          Navigate("/user/address")
        },1500)
      }else{
        notify(createAddressResponse.data.error.message);
      }
      setDispaly("none");
    }
  }, [loading]);
  return [
    alias,
    onAliasChange,
    addressDetails,
    onAddressDetailsChange,
    phone,
    onPhoneChange,
    handleClick,
    display
  ];
};

export default AddAddressHook;
