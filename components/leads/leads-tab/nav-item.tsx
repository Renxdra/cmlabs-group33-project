import { ReactNode } from 'react';

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export const NavItem = ({ icon, label, active = false }: NavItemProps) => (
  <div className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all ${active ? 'bg-black text-white dark:bg-gray-800 dark:text-white' : 'hover:bg-indigo-600 text-indigo-100 dark:hover:bg-gray-700 dark:text-gray-300'}`}>
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);