import React,{ useState } from 'react'
import { Transition } from '@headlessui/react';

export default function EditProfile() {
  const [imgProfile, setImgProfile ] = useState();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImgProfile(URL.createObjectURL(event.target.files[0]));
    }
  }

  const submitProfile = () => {
    console.log(imgProfile)
  }

  return (
    <section>
      <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Edit Profile</h2>
      <div className="flex gap-4 items-center">
        <img src={imgProfile} alt="" className="w-20 h-20 rounded-full" />
        <input type="file" onChange={onImageChange} />
      </div>
      <button 
        onClick={submitProfile}
        class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 false ">Save</button>
    </section>
  )
}
