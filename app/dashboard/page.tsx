'use client'

import Sidebar from '@/components/ui/sidebar'
import Header from '@/components/ui/header'
import StatsCards from '@/components/dashboard/stats-cards'
import MetricsOverview from '@/components/dashboard/metrics-overview'
import ChartsSection from '@/components/dashboard/charts-section'
import RecentDeals from '@/components/dashboard/recent-deals'
import PipelineOverview from '@/components/dashboard/pipeline-overview'
import UpcomingActivities from '@/components/dashboard/upcoming-activities'
import LeadSourceBreakdown from '@/components/dashboard/lead-source-breakdown'

export default function Dashboard() {
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
          <div className="p-6 space-y-6">
            {/* Dashboard Title */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground text-sm">Showing data from current month</p>
            </div>

            {/* Stats Cards */}
            <StatsCards />

            {/* Metrics Overview */}
            <MetricsOverview />

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ChartsSection />
              </div>
              <div>
                <UpcomingActivities />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <RecentDeals />
              </div>
              <div className="lg:col-span-1">
                <PipelineOverview />
              </div>
              <div className="lg:col-span-1">
                <LeadSourceBreakdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}