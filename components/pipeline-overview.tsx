'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function PipelineOverview() {
  const { theme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
  }, [])
  
  const isDarkMode = hasMounted && theme === 'dark'
  
  const stages = [
    { name: 'Qualified', deals: 2, percentage: 13 },
    { name: 'Demo Scheduled', deals: 2, percentage: 13 },
    { name: 'Negotiations Started', deals: 2, percentage: 13 },
    { name: 'Contract Sent', deals: 2, percentage: 13 },
    { name: 'Closing', deals: 2, percentage: 13 },
  ]

  // Render nothing on server, only render on client after mounting
  if (!hasMounted) {
    return (
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Pipeline Overview</CardTitle>
          <CardDescription className="text-muted-foreground">Distribution deals across stages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Loading...</span>
                <span className="text-sm text-muted-foreground">Loading...</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className={isDarkMode ? 'text-white' : 'text-foreground'}>Pipeline Overview</CardTitle>
        <CardDescription className={isDarkMode ? 'text-gray-300' : 'text-muted-foreground'}>Distribution deals across stages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={isDarkMode ? 'text-sm font-medium text-white' : 'text-sm font-medium text-foreground'}>{stage.name}</span>
                <span className={isDarkMode ? 'text-sm text-gray-300' : 'text-sm text-muted-foreground'}>{stage.deals} deals ({stage.percentage}%)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${stage.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition-colors">
          View All
        </button>
      </CardContent>
    </Card>
  )
}