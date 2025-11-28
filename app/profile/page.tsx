'use client'

import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import { ProfileContent } from '@/components/profile-content'

export default function Profile() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <ProfileContent />
        </main>
      </div>
    </div>
  )
}