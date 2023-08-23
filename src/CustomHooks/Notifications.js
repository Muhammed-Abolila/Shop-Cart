import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Notifications = () => {
    let res=useSelector((state)=>state.CategoryReducer.CategoryApi);
    const notify = (msg) =>{
        if(res.status===201){
          toast.success(msg);
        }else if(res.status!==201){
          toast.error(msg);
        }
      } 
      useEffect(()=>{
        if(res.status===201){
          notify(res.statusText);
        }
      },[res])
      return notify
}

export default Notifications
