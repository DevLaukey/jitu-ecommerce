import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'

const AdminWrapper = () => {

    return (
        <div>
            <div className="flex ">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminWrapper