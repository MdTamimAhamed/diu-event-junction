import React from 'react'
import { useNavigate, Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
    const isAuthenticated = localStorage.getItem('admin-token')
    const navigate = useNavigate();
    
  return isAuthenticated? children : <Navigate to="/" replace/>
}

export default ProtectedRoutes