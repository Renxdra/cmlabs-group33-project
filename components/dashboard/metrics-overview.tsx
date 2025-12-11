'use client'

const metrics = [
  { label: 'Total Won', value: '300', change: '+10%', positive: true },
  { label: 'Total Lost', value: '20', change: '-3%', positive: false },
  { label: 'Total Leads', value: '450', change: '+5%', positive: true },
  { label: 'Active Leads', value: '230', change: '+3%', positive: true },
]

export default function MetricsOverview() {
  return (
    <div className="bg-card border border-[hsl(var(--border))] rounded-xl p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">● {metric.label}</p>
              <p className="text-xl font-bold text-foreground">{metric.value}</p>
            </div>
            <span className={`text-xs font-medium ${metric.positive ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
              {metric.positive ? '↑' : '↓'} {Math.abs(parseInt(metric.change))}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}