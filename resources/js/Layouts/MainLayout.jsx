import React from 'react'
import { Link } from '@inertiajs/react'
import { useState } from 'react';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GradeIcon from '@mui/icons-material/Grade';
import { menuData } from '@/services/menu/menu.services';

export default function MainLayout({ children }) {
    // console.log(menuData)
    const [showList, setShowList] = useState(false);
  return (
    <div className="bg-[#f5f4f9] flex gap-5 h-screen">
        <div className="bg-white w-[290px] max-sm:w-[0px] overflow-hidden duration-300 shadow-lg">
            <h1 className="py-6 text-2xl font-bold text-green-500 text-center">PHP ADMIN </h1>
            <div className="">
                {
                    menuData.map((menu) => (
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="flex gap-2 text-[#bcbfc1]">
                                <div className="">=</div>
                                <p className="">{menu.main_menu}</p>
                            </div>

                            { 
                                menu.sub_menu?.map((submenu) => (
                                   <>
                                    <div className="px-4">
                                        <Link href={submenu.link} className="flex items-center px-2 gap-2 h-[40px] hover:bg-[#e7e7ff] rounded-[10px] text-[#adacfb] font-bold">
                                            {submenu.icon} {submenu.name}
                                            {submenu.menu_list?.length > 0 && <KeyboardArrowRightIcon className="ml-auto" />}
                                        </Link>
                                    </div>
                                    {submenu.menu_list?.length > 0 && (
                                        <ul className="flex flex-col gap-1 pl-10">
                                            <li><GradeIcon /> Home1</li>
                                            <li><GradeIcon /> Home2</li>
                                        </ul>
                                    )}
                                   </>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="w-10/12 max-md:w-[90%] mt-2 flex flex-col gap-5">
            <div className="bg-white h-[65px] rounded-[10px] px-4 flex justify-between items-center shadow-lg">
                <div>
                    Navbar
                </div>
                <div>
                    <Link href={route('logout')} method="POST">ออกจากระบบ</Link>
                </div>
            </div>
            <div className="bg-white rounded-[10px] p-4 shadow-lg">
                {children}
            </div>
        </div>
    </div>
  )
}
