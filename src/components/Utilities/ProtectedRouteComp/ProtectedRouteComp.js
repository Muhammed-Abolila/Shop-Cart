import React from 'react'
import { Navigate, Outlet } from 'react-router';

const ProtectedRouteComp = ({auth,children}) => {
  if(auth===false){
    return <Navigate to="/" replace/>
  }else{
    return children?children:<Outlet/>
  }
}

export default ProtectedRouteComp
