import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
const Notifications = (res) => {
    const notify = (msg) =>{
        if(res.status==201||res.status==200){
          toast.success(msg);
        }else if(res.status!=201||res.status!=200){
          toast.error(msg);
        }
      } 
      useEffect(()=>{
        if(res.status==201||res.status==200){
          notify(res.statusText);
        }
      },[res])
      return [notify]
}

export default Notifications
