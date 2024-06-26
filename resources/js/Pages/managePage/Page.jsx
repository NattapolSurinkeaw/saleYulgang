import React from 'react'
import MainLayout from '@/Layouts/MainLayout'

export default function Page({auth}) {
  console.log(auth)
  return (
    <MainLayout auth={auth}>
      Page 
    </MainLayout>
  )
}
