'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function RecentDeals() {
  const { theme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
  }, [])
  
  const isDarkMode = hasMounted && theme === 'dark'
  
  const deals = [
    { id: 1, name: 'Transaction 1', value: 'Rp 10.000.000' },
    { id: 2, name: 'Transaction 2', value: 'Rp 30.000.000' },
    { id: 3, name: 'Transaction 3', value: 'Rp 10.000.000' },
    { id: 4, name: 'Transaction 4', value: 'Rp 8.000.000' },
    { id: 5, name: 'Transaction 5', value: 'Rp 15.000.000' },
  ]

  // Render nothing on server, only render on client after mounting
  if (!hasMounted) {
    return (
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Deals</CardTitle>
          <CardDescription className="text-muted-foreground">Your most recently updated deals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div>
                <p className="font-medium text-foreground">Loading...</p>
                <p className="text-sm text-muted-foreground">Loading...</p>
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
        <CardTitle className={isDarkMode ? 'text-white' : 'text-foreground'}>Recent Deals</CardTitle>
        <CardDescription className={isDarkMode ? 'text-gray-300' : 'text-muted-foreground'}>Your most recently updated deals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deals.map((deal) => (
            <div key={deal.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div>
                <p className={isDarkMode ? 'font-medium text-white' : 'font-medium text-foreground'}>{deal.name}</p>
                <p className={isDarkMode ? 'text-sm text-gray-300' : 'text-sm text-muted-foreground'}>{deal.value}</p>
              </div>
              <button className={isDarkMode ? 'text-sm text-gray-300 hover:text-white transition-colors' : 'text-sm text-muted-foreground hover:text-foreground transition-colors'}>
                View →
              </button>
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