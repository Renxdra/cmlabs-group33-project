'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

const stats = [
  {
    title: 'Total Pipeline Value',
    value: 'Rp 10.000.000',
    change: '+5%',
    positive: true,
  },
  {
    title: 'Active Deals',
    value: '152',
    change: '+2%',
    positive: true,
  },
  {
    title: 'Average Deals',
    value: 'Rp 15.000.000',
    change: '+2%',
    positive: true,
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-card border border-[hsl(var(--border))] rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-2">{stat.title}</p>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
              <div className="flex items-center gap-1 mt-2">
                {stat.positive ? (
                  <TrendingUp size={16} className="text-green-500 dark:text-green-400" />
                ) : (
                  <TrendingDown size={16} className="text-red-500 dark:text-red-400" />
                )}
                <span className={`text-sm font-medium ${stat.positive ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}