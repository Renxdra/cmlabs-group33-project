'use client'

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const leadsData = [
  { month: 'Jan', leads: 40 },
  { month: 'Feb', leads: 35 },
  { month: 'March', leads: 50 },
  { month: 'Apr', leads: 45 },
  { month: 'May', leads: 60 },
  { month: 'June', leads: 55 },
  { month: 'July', leads: 70 },
  { month: 'August', leads: 65 },
  { month: 'Sept', leads: 75 },
  { month: 'Oct', leads: 80 },
  { month: 'Nov', leads: 85 },
  { month: 'Dec', leads: 90 },
]

const revenueData = [
  { month: 'Jan', estimation: 40, realization: 35 },
  { month: 'Feb', estimation: 45, realization: 40 },
  { month: 'March', estimation: 50, realization: 48 },
  { month: 'Apr', estimation: 55, realization: 52 },
  { month: 'May', estimation: 60, realization: 58 },
  { month: 'June', estimation: 65, realization: 62 },
  { month: 'July', estimation: 70, realization: 68 },
  { month: 'August', estimation: 75, realization: 73 },
  { month: 'Sept', estimation: 80, realization: 78 },
  { month: 'Oct', estimation: 85, realization: 83 },
  { month: 'Nov', estimation: 90, realization: 88 },
  { month: 'Dec', estimation: 95, realization: 93 },
]

export default function ChartsSection() {
  const { theme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
    // Update dark mode state when theme changes
    setIsDarkMode(theme === 'dark')
  }, [theme])
  
  // Colors based on theme
  const gridColor = isDarkMode ? '#334155' : '#e5e5e5'
  const textColor = isDarkMode ? '#ffffff' : '#64748b'
  const cardBackgroundColor = isDarkMode ? '#0f172a' : '#ffffff'
  const barColor = isDarkMode ? '#60a5fa' : '#3b82f6'
  const estimationColor = isDarkMode ? '#60a5fa' : '#3b82f6'
  const realizationColor = isDarkMode ? '#a78bfa' : '#8b5cf6'

  // Render nothing on server, only render on client after mounting
  if (!hasMounted) {
    return (
      <div className="space-y-6">
        {/* Total Leads Chart */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Total Leads by Months</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Loading chart...</p>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Estimation Chart */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Estimation Revenue by Months</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Loading chart...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Total Leads Chart */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className={isDarkMode ? 'text-white' : 'text-foreground'}>Total Leads by Months</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className="rounded-lg p-4"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={leadsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: textColor }} 
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: textColor }} 
                />
                <Tooltip 
                  contentStyle={isDarkMode ? { 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    color: '#ffffff'
                  } : {}} 
                />
                <Bar dataKey="leads" fill={barColor} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Estimation Chart */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className={isDarkMode ? 'text-white' : 'text-foreground'}>Estimation Revenue by Months</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className="rounded-lg p-4"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: textColor }} 
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: textColor }} 
                />
                <Tooltip 
                  contentStyle={isDarkMode ? { 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    color: '#ffffff'
                  } : {}} 
                />
                <Legend 
                  formatter={(value) => (
                    <span className={isDarkMode ? 'text-white' : 'text-foreground'}>
                      {value}
                    </span>
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="estimation"
                  stroke={estimationColor}
                  strokeWidth={3}
                  dot={{ stroke: estimationColor, strokeWidth: 2, r: 4, fill: cardBackgroundColor }}
                  activeDot={{ r: 6, fill: cardBackgroundColor }}
                />
                <Line
                  type="monotone"
                  dataKey="realization"
                  stroke={realizationColor}
                  strokeWidth={3}
                  dot={{ stroke: realizationColor, strokeWidth: 2, r: 4, fill: cardBackgroundColor }}
                  activeDot={{ r: 6, fill: cardBackgroundColor }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}