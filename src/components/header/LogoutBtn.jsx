import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch();
     const logouthandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
     }

  return (
    <div>LogoutBtn</div>
  )
}

export default LogoutBtn