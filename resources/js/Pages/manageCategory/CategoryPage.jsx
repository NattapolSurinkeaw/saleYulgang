import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { menuData } from '@/services/menu/menu.services'

export default function CategoryPage({auth}) {
  console.log(menuData)
  return (
    <MainLayout auth={auth}>
      <h1>Category</h1>
      <div className="border">
        {menuData.map((menu) => (
          <div>
            {menu.id} {menu.main_menu}
          </div>
        ))}
      </div>
    </MainLayout>
  )
}
