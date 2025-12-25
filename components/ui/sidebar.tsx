"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  User, 
  Globe,
  HelpCircle,
  Settings
} from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Leads', icon: Globe, href: '/leads' },
    { name: 'Team', icon: Users, href: '/team' },
    { name: 'Profile', icon: User, href: '/profile' },
  ];

  const bottomMenuItems = [
    { name: 'Get Help', icon: HelpCircle, href: '/help' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#635BFF] text-white p-6 flex flex-col gap-8 shadow-xl">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-4">
        <div className="relative">
          <Image
            src="/logo/Screenshot_51-removebg-preview.png"
            alt="Logo"
            width={228}
            height={49}
            className="rounded-md"
          />
        </div>
        
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive 
                  ? 'bg-white/15 shadow-inner' 
                  : 'hover:bg-white/10'
                }`}
            >
              <item.icon 
                size={20} 
                className={`${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`} 
              />
              <span className={`text-sm font-medium ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Menu */}
      <nav className="flex flex-col gap-2 mt-auto">
        {bottomMenuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive 
                  ? 'bg-white/15 shadow-inner' 
                  : 'hover:bg-white/10'
                }`}
            >
              <item.icon 
                size={20} 
                className={`${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`} 
              />
              <span className={`text-sm font-medium ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;