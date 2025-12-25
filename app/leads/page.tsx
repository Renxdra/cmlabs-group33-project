'use client'

import React from 'react'
import Sidebar from '@/components/ui/sidebar'
import Header from '@/components/ui/header'
import LeadsDashboard from '@/components/leads/leads-dashboard'

export default function LeadsPage() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 h-full">
            <LeadsDashboard />
          </div>
        </div>
      </div>
    </div>
  )
}