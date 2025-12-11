'use client'

import Sidebar from '@/components/ui/sidebar'
import Header from '@/components/ui/header'
import { ProfileContent } from '@/components/profile/profile-content'

export default function Profile() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <Header />
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Profile</h1>
              <p className="text-muted-foreground text-sm">Manage your profile settings and preferences</p>
            </div>
            <ProfileContent />
          </div>
        </div>
      </div>
    </div>
  )
}