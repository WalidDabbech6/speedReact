import React, { useEffect } from 'react'
import { useAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'
import rootRoutes from './../../routes'
const Logout = () => {
  const {logout,isAuthenticated} = useAuth()
  useEffect(()=>{
    logout();
  },[])
  return  isAuthenticated?  <div>"Logout"</div> : <Navigate to={rootRoutes.auth.path}/> 
}

export default Logout