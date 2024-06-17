import React from 'react'
import { Link } from '@inertiajs/react'

export default function MainLayout({ children }) {
  return (
    <div className="flex bg-gray-200">
        <header className="header">
            <h1>Admin Dashboard</h1>
        </header>
        <div className="main-content">
            <nav className="sidebar">
                <ul>
                    <li><Link href="/admin/dashboard">Dashboard</Link></li>
                    <li><Link href="/admin/users">Users</Link></li>
                    <li><Link href="/admin/settings">Settings</Link></li>
                </ul>
            </nav>
        </div>
        <div className="bg-red-400">
            {children}
        </div>
    </div>
  )
}
