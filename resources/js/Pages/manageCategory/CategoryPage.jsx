import React, { useState, useEffect } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { menuData } from '@/services/menu/menu.services'
// import Modal from '@/Components/modalGlobal/Modal';
import ModalAddCate from './ModalAddCate';
import { svGetCate, svDeleteCate } from '@/services/menu/menu.services';

export default function CategoryPage({auth}) {
  const [fillter, setFillter] = useState(1);
  const [handlemodal, setHandleModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cateData, setCateData] = useState([]);

  useEffect(() => {
    svGetCate().then((res) => {
      setCateData(res.data.data)
    })
  }, []);

  const handleDeleteCate = (id) => {
    svDeleteCate(id).then((res) => {
      console.log(res)
      setCateData(prevCateData => prevCateData.filter(cate => cate.id !== id));
    })
  }

  return (
    <MainLayout auth={auth}>
      <h1 className="mb-4">Category {fillter}</h1>
      <div className="border-b-2 flex justify-between">
        <ul className="flex gap-4">
          <li onClick={() => setFillter(1)}>menu</li>
          <li onClick={() => setFillter(2)}>menu</li>
        </ul>
        <button className="" onClick={() => setOpen(!open)}>create</button>
      </div>
      <div className="p-4 border h-[90%] overflow-auto flex flex-col gap-4">
        {cateData.map((cate) => (
          <div key={cate.id} className="p-4 border bg-[#f8f9fa] rounded-sm flex justify-between">
            <div className="flex gap-4">
              <div className="w-[150px] h-[122px] border p-1 hover:scale-[0.95] duration-300 cursor-pointer">
                <img className="w-full h-full rounded-sm" src={`/${cate.image}`} alt="" />
              </div>
              <div>
                <p className="text-red-500">[{cate.id}]</p>
                {cate.id} {cate.title}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-yellow-500 text-white p-2 rounded-lg">แก้ไข</button>
              <button 
                className="bg-red-500 text-white p-2 rounded-lg"
                onClick={() => handleDeleteCate(cate.id)}
              >ลบ</button>
            </div>
          </div>
        ))}
      </div>
      {/* <Modal handle={handlemodal} title="Edit Category" summitData={summitData} csscls="max-lg:w-[400px] max-lg:h-full w-[850px] h-[600px]" setHandleModal={setHandleModal}/> */}
      <ModalAddCate 
        open={open} 
        handleOpen={handleOpen}
        handleClose={handleClose}
        cateData={cateData}
        setCateData={setCateData}
       />
    </MainLayout>
  )
}

