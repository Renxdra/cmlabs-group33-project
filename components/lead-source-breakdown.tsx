'use client'

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const data = [
  { name: 'Website', value: 30 },
  { name: 'Campaign', value: 25 },
  { name: 'Referral', value: 20 },
  { name: 'Event', value: 15 },
  { name: 'Offline', value: 7 },
  { name: 'Social Media', value: 3 },
]

// Theme-aware colors
const LIGHT_COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#94a3b8']
const DARK_COLORS = ['#60a5fa', '#a78bfa', '#f472b6', '#fbbf24', '#34d399', '#64748b']

export default function LeadSourceBreakdown() {
  const { theme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
  }, [])
  
  const isDarkMode = hasMounted && theme === 'dark'
  
  // Determine which colors to use based on theme
  const colors = isDarkMode ? DARK_COLORS : LIGHT_COLORS

  // Render nothing on server, only render on client after mounting
  if (!hasMounted) {
    return (
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Lead Source Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center">
            <p className="text-muted-foreground">Loading chart...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className={isDarkMode ? 'text-white' : 'text-foreground'}>Lead Source Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Legend 
              formatter={(value) => (
                <span className={isDarkMode ? 'text-white text-sm' : 'text-foreground text-sm'}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}