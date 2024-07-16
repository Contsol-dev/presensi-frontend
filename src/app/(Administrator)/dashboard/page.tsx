'use client'
import AdminProfile from '@/app/component/adminProfile'
import NavbarAdmin from '@/app/component/nav'
import React from 'react'
import Dashboard from './Dashboard'
import Aktifitas from './Aktifitas'

export default function Administrator() {

    return (
        <div className="container w-full h-full flex m-auto md:p-0">
                <NavbarAdmin />
                <div className=" bg-gray-200 w-full p-4 flex-col">
                    <AdminProfile />
                <div className='flex flex-col md:flex-row gap-10'>
                    <Dashboard />
                    <Aktifitas />
                </div>

            </div>
        </div>

    )
}
