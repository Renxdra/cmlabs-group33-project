'use client'

import { Search, Bell, ChevronDown } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Header() {
  return (
    <header className="border-b border-[hsl(var(--border))] bg-card">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left Section - Logo and Search */}
        <div className="flex items-center gap-8 flex-1">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search deals, leads, contacts..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-[hsl(var(--border))] bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right Section - Icons and User Menu */}
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Bell size={20} className="text-foreground" />
          </button>
          <div className="mx-1 border-l border-[hsl(var(--border))] h-6"></div>
          <ThemeToggle />
          <div className="flex items-center gap-3 pl-2 border-l border-[hsl(var(--border))]">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
              U
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">username01</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
            <ChevronDown size={16} className="text-foreground" />
          </div>
        </div>
      </div>
    </header>
  )
}