import React from 'react'
import { Link } from '@inertiajs/react'

export default function ModalProfile({modalProfile, auth}) {
  return (
    <>
    {modalProfile && (
      <div className="bg-white absolute top-[50px] right-0 w-[250px] h-auto border rounded-md p-4">
        <p>emale : {auth?.user.name}</p>
        <div className="flex gap-4 mt-2">
          <Link href={"/backoffice/profile"} className="bg-blue-500 text-white p-1 rounded-md">ตั้งค่าโปรไฟล์</Link>
          <Link href={route('logout')} method="POST" className="bg-red-500 text-white p-1 rounded-md">ออกจากระบบ</Link>
        </div>
      </div>
    )}
      
    </>
  )
}
