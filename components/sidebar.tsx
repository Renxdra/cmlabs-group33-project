'use client'

import { Home, Zap, Users, User, HelpCircle, Settings } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Zap, label: 'Leads', href: '#' },
    { icon: Users, label: 'Team', href: '#' },
    { icon: User, label: 'Profile', href: '/profile' },
  ]

  return (
    <div className="w-64 bg-card border-r border-[hsl(var(--border))] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[hsl(var(--border))]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-muted rounded flex items-center justify-center text-sm font-bold text-foreground">
            Logo
          </div>
          <div>
            <h1 className="font-bold text-foreground">Company Name</h1>
            <p className="text-xs text-muted-foreground">Tagline / Company</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <item.icon size={20} className="text-muted-foreground" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-6 space-y-2 border-t border-[hsl(var(--border))]">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors w-full">
          <HelpCircle size={20} className="text-muted-foreground" />
          <span className="text-sm font-medium">Get Help</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors w-full">
          <Settings size={20} className="text-muted-foreground" />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar