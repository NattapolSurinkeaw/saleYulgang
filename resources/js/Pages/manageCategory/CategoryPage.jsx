import React, { useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { menuData } from '@/services/menu/menu.services'
import Modal from '@/Components/modalGlobal/Modal';
import PrimaryButton from '@/Components/PrimaryButton';

export default function CategoryPage({auth}) {
  const [fillter, setFillter] = useState(1);
  const [handlemodal, setHandleModal] = useState(false);

  const summitData = (title) => {
    console.log(title)
  }
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
      <Modal handle={handlemodal} title="Edit Category" summitData={summitData} csscls="max-lg:w-[400px] max-lg:h-full w-[850px] h-[600px]" setHandleModal={setHandleModal} content={contentModel(summitData)}/>
    </MainLayout>
  )
}

export function contentModel(summitData) {
  const [title, setTitle] = useState("d");
  
  summitData(title)
  const submit = () => {
    console.log(title)
  }
  return(
    <>
      <div className="w-full h-[480px] overflow-auto border">
        <div className='p-3 flex max-lg:flex-col gap-4 '>
          <div className="border w-[200px] p-2 rounded-md">
            <h3 className="mb-4">all category</h3>
            <div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="checkcate" />
                <label htmlFor="checkcate">หมวดหมู่ที่ 1</label>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 p-2">
            <div className="p-4 border rounded-md flex gap-4">
              <div className="w-[150px] h-[122px] border p-1 hover:scale-[0.95] duration-300 cursor-pointer">
                <label htmlFor="imageCate">
                  <img className="w-full h-full rounded-sm" src="/image/no-image.png" alt="" />
                </label>
                <input id="imageCate" type="file" className="hidden" />
              </div>
              <div className="flex flex-col gap-2">
                <input 
                  className="w-full focus-none rounded-md" 
                  placeholder="Title" type="text" />
                <input className="w-full focus-none rounded-md" placeholder="alt" type="text" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">ลายละเอียด</label>
              <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value) }
                className="w-full focus-none rounded-md" 
                placeholder="Title" type="text" />
              <input className="w-full focus-none rounded-md" placeholder="Description" type="text" />
              <input className="w-full focus-none rounded-md" placeholder="Keyword" type="text" />
              <input className="w-full focus-none rounded-md" placeholder="Slug" type="text" />
              <input className="w-full focus-none rounded-md" placeholder="Link" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Web SEO</label>
              <input className="w-full focus-none rounded-md" placeholder="Title" type="text" />
              <input className="w-full focus-none rounded-md" placeholder="Description" type="text" />
              <input className="w-full focus-none rounded-md" placeholder="Keyword" type="text" />
              <input className="w-full focus-none rounded-md" placeholder="h1" type="text" />
              <input className="w-full focus-none rounded-md" placeholder="h2" type="text" />
            </div>

            <div>
              <p>ตั้งหมวด category</p>
              <div>
                <label htmlFor=""></label>
                <PrimaryButton onClick={() => submit()} className='bg-blue-500' children="ปุ่ม" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
