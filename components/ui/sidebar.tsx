'use client'

import { LayoutDashboard, Globe, Users, User, HelpCircle, Settings } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Globe, label: 'Leads', href: '/leads' },
    { icon: Users, label: 'Team', href: '/team' },
    { icon: User, label: 'Profile', href: '/profile' },
  ]

  return (
    <aside className="w-64 bg-[#5453ab] text-white flex flex-col h-screen fixed left-0 top-0 z-50">
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center font-bold text-xs">
          Logo
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">Company Name</h1>
          <p className="text-xs text-white/60">Tagline / Company</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 transition-colors"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer Nav */}
      <div className="p-4 space-y-2 mb-4">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 transition-colors w-full">
          <HelpCircle size={20} />
          <span>Get Help</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 transition-colors w-full">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar