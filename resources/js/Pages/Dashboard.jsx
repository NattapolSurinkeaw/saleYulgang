import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

export default function HomePage({auth}) {
  console.log(auth)
  return (
    <>
      <Head title="Dashboard" />
      
      <MainLayout auth={auth}>
        <div>HomePage</div>

      </MainLayout>
    </>
  )
}
