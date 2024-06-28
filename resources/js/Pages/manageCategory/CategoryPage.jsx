import React, { useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { menuData } from '@/services/menu/menu.services'
import Modal from '@/Components/modalGlobal/Modal';

export default function CategoryPage({auth}) {
  const [fillter, setFillter] = useState(1);
  const [handlemodal, setHandleModal] = useState(false);
  return (
    <MainLayout auth={auth}>
      <h1 className="mb-4">Category {fillter}</h1>
      <div className="border-b-2 flex justify-between">
        <ul className="flex gap-4">
          <li onClick={() => setFillter(1)}>menu</li>
          <li onClick={() => setFillter(2)}>menu</li>
        </ul>
        <button className="" onClick={() => setHandleModal(!handlemodal)}>create</button>
      </div>
      <div className="p-4 bg-red-200 h-[90%] overflow-auto flex flex-col gap-4">
        {menuData.map((menu) => (
          <div className="p-4 border bg-[#f8f9fa] rounded-sm flex justify-between">
            <div className="flex gap-4">
              <div className="w-[150px] h-[122px] border p-1 hover:scale-[0.95] duration-300 cursor-pointer">
                <img className="w-full h-full rounded-sm" src="/image/no-image.png" alt="" />
              </div>
              <div>
                <p className="text-red-500">[{menu.id}]</p>
                {menu.id} {menu.main_menu}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-orange-500 text-white p-2 rounded-lg">แก้ไข</button>
              <button className="bg-orange-500 text-white p-2 rounded-lg">แก้ไข</button>
            </div>
          </div>
        ))}
      </div>
      <Modal handle={handlemodal} csscls="w-[470px] h-[220px]" setHandleModal={setHandleModal} content={contentModel()}/>
    </MainLayout>
  )
}

export function contentModel() {
  return(
    <>
      <div className="w-full flex">
        <input type="text" />
        <input type="text" />
      </div>
    </>
  )
}
