import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminTryoutDashboard from '../components/Sidebar'

export default function MainLayout() {
  return (
    <div className='flex'>
        <AdminTryoutDashboard/>
        <Outlet/>
    </div>
  )
}
