import React from 'react'
import '../../../css/modal.css';

export default function Modal({content, handle, csscls, setHandleModal}) {
  return (
    <div className={`popup ${handle ? 'active':''}`} id="popup-1">
      <div className="overlay" onClick={()=>setHandleModal(!handle)}></div>
      <div className={`content ${csscls}`} id="contentM">
        <div className="close-btn" id="closeM" onClick={()=>setHandleModal(!handle)}>&times;</div>
        {content}
      </div>
    </div>
  )
}
