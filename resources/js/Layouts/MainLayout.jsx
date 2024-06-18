import React from 'react'
import { Link } from '@inertiajs/react'
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';

export default function MainLayout({ children }) {
  return (
    <div className="bg-[#f5f4f9] flex gap-5 h-screen">
        <div className="bg-white w-[290px] shadow-lg">
            <h1 className="py-4 text-center">PHP ADMIN </h1>
            <div className="px-4">
                <div className="flex items-center gap-2 px-4 h-[40px] bg-[#e7e7ff] rounded-[10px] text-[#adacfb] font-bold mb-4">
                    <DashboardIcon /> Dashboard
                </div>
                <div className="flex items-center gap-2 px-4 h-[40px] bg-[#e7e7ff] rounded-[10px] text-[#adacfb] font-bold">
                    <DashboardIcon /> Dashboard
                </div>
            </div>
        </div>
        <div className="w-10/12 mt-2 flex flex-col gap-5">
            <div className="bg-white h-[65px] rounded-[10px] px-4 flex items-center shadow-lg">
                <div>
                    Navbar
                </div>
                <div>
                    <Link href={route('logout')} method="post">ออกจากระบบ</Link>
                </div>
            </div>
            <div className="bg-white rounded-[10px] p-4 shadow-lg">
                {children}
            </div>
        </div>
    </div>
  )
}
