import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Login from '../components/logins/Login'
const useAuth = () => {
    const user = { loggedIn: useSelector((state) => state.user.loggedIn) }
   
    return user && user.loggedIn
}
const ProtectedRoutes = () => {

    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Login />

}

export default ProtectedRoutes