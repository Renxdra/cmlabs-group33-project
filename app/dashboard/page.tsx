'use client'

import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import StatsCards from '@/components/stats-cards'
import MetricsOverview from '@/components/metrics-overview'
import ChartsSection from '@/components/charts-section'
import RecentDeals from '@/components/recent-deals'
import PipelineOverview from '@/components/pipeline-overview'
import UpcomingActivities from '@/components/upcoming-activities'
import LeadSourceBreakdown from '@/components/lead-source-breakdown'

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
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