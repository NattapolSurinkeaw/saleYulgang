import React from 'react'
import '../../../css/modal.css';

export default function Modal({content, handle, csscls, setHandleModal}) {
  return (
    <div className={`popup ${handle ? 'active':''}`} id="popup-1">
      <div className="overlay" onClick={()=>setHandleModal(!handle)}></div>
      <div className={`content ${csscls}`} id="contentM">
        <div className="flex justify-between mb-2">
          <h1>Edit Category</h1>
          <div className="close-btn" id="closeM" onClick={()=>setHandleModal(!handle)}>&times;</div>
        </div>
        {content}
        <div className="flex gap-4 justify-end mt-4">
          <button className="w-14 p-1 bg-blue-500 text-white rounded-md">บันทึก</button>
          <button className="w-14 p-1 bg-red-500 text-white rounded-md">ยกเลิก</button>
        </div>
      </div>
    </div>
  )
}
