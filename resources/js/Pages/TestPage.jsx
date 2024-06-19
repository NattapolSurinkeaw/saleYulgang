import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

export default function TestPage() {
  return (
    <>
      <Head title="Dashboard" />
      
      <MainLayout>
        <div>Test</div>

      </MainLayout>
    </>
  )
}
