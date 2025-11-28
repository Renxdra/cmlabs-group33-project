'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Users, Calendar } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export default function UpcomingActivities() {
  const [activeTab, setActiveTab] = useState('Meeting')
  const { theme } = useTheme()
  
  // Use a ref to track if component has mounted to avoid hydration issues
  const [hasMounted, setHasMounted] = useState(false)
  
  // Only apply theme-based styling after component has mounted
  const isDarkMode = hasMounted && theme === 'dark'
  
  const activities = [
    {
      id: 1,
      title: 'Weekly Team Sync',
      time: 'Today at 8:00 - 9:00 PM',
      location: 'Jamilah Office',
      type: 'meeting',
    },
    {
      id: 2,
      title: 'Client Presentation',
      time: '09:30 - 12:00 PM',
      location: 'You have meeting with Angela A. tomorrow',
      type: 'presentation',
    },
    {
      id: 3,
      title: 'Marketing Strategy Session',
      time: '08:00 - 10:00 AM',
      location: 'You have meeting with Amelia Saturday, 15/5/2025',
      type: 'strategy',
    },
  ]

  const tabs = ['Meeting', 'Call', 'E-mail', 'Invoice']

  // Function to get appropriate message based on active tab
  const getNoActivityMessage = () => {
    switch (activeTab) {
      case 'Call':
        return 'No calls available today'
      case 'E-mail':
        return 'No emails available today'
      case 'Invoice':
        return 'No invoices available today'
      default:
        return 'No activities available today'
    }
  }

  // Render nothing on server, only render on client after mounting
  if (!hasMounted) {
    // Set hasMounted to true on first render
    Promise.resolve().then(() => setHasMounted(true))
    
    return (
      <Card className="h-full bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Upcoming Activities</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex gap-2 mb-4 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                className="px-3 py-2 text-sm font-medium border-b-2 border-transparent text-muted-foreground"
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-3">Today Activities</p>
            <div className="space-y-3">
              <div className="text-center py-4 text-muted-foreground">
                Loading...
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-full bg-card">
      <CardHeader>
        <CardTitle className={isDarkMode ? 'text-white' : 'text-foreground'}>Upcoming Activities</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                tab === activeTab
                  ? isDarkMode 
                    ? 'border-white text-white' 
                    : 'border-foreground text-foreground'
                  : isDarkMode
                    ? 'border-transparent text-gray-300 hover:text-white'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Today Activities */}
        <div className="mb-4">
          <p className={isDarkMode ? 'text-xs font-medium text-gray-300 mb-3' : 'text-xs font-medium text-muted-foreground mb-3'}>Today Activities</p>
          <div className="space-y-3">
            {activeTab === 'Meeting' ? (
              activities.length > 0 ? (
                activities.slice(0, 1).map((activity) => (
                  <div key={activity.id} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Users size={16} className={isDarkMode ? 'mt-1 text-gray-300 flex-shrink-0' : 'mt-1 text-muted-foreground flex-shrink-0'} />
                      <div className="flex-1">
                        <p className={isDarkMode ? 'font-medium text-sm text-white' : 'font-medium text-sm text-foreground'}>{activity.title}</p>
                        <p className={isDarkMode ? 'text-xs text-gray-300' : 'text-xs text-muted-foreground'}>{activity.time}</p>
                        <div className="flex items-center gap-1 mt-1 text-xs">
                          <MapPin size={12} className={isDarkMode ? 'text-gray-300' : 'text-muted-foreground'} />
                          <span className={isDarkMode ? 'text-gray-300' : 'text-muted-foreground'}>{activity.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={isDarkMode ? 'text-center py-4 text-gray-300' : 'text-center py-4 text-muted-foreground'}>
                  {getNoActivityMessage()}
                </div>
              )
            ) : (
              <div className={isDarkMode ? 'text-center py-4 text-gray-300' : 'text-center py-4 text-muted-foreground'}>
                {getNoActivityMessage()}
              </div>
            )}
          </div>
          <button className={isDarkMode ? 'text-xs text-gray-300 hover:text-white mt-2' : 'text-xs text-muted-foreground hover:text-foreground mt-2'}>View location</button>
        </div>

        {/* Upcoming Activities */}
        <div className="flex-1">
          <p className={isDarkMode ? 'text-xs font-medium text-gray-300 mb-3' : 'text-xs font-medium text-muted-foreground mb-3'}>Upcoming</p>
          <div className="space-y-3">
            {activeTab === 'Meeting' ? (
              activities.length > 1 ? (
                activities.slice(1).map((activity) => (
                  <div key={activity.id} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Calendar size={16} className={isDarkMode ? 'mt-1 text-gray-300 flex-shrink-0' : 'mt-1 text-muted-foreground flex-shrink-0'} />
                      <div className="flex-1">
                        <p className={isDarkMode ? 'font-medium text-sm text-white' : 'font-medium text-sm text-foreground'}>{activity.title}</p>
                        <p className={isDarkMode ? 'text-xs text-gray-300' : 'text-xs text-muted-foreground'}>{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={isDarkMode ? 'text-center py-4 text-gray-300' : 'text-center py-4 text-muted-foreground'}>
                  {getNoActivityMessage()}
                </div>
              )
            ) : (
              <div className={isDarkMode ? 'text-center py-4 text-gray-300' : 'text-center py-4 text-muted-foreground'}>
                {getNoActivityMessage()}
              </div>
            )}
          </div>
        </div>

        {/* View All Button - Keeping blue color as requested */}
        <button className="w-full mt-6 bg-blue-600 text-white rounded-lg py-2 font-medium text-sm hover:bg-blue-700 transition-colors">
          View All
        </button>
      </CardContent>
    </Card>
  )
}