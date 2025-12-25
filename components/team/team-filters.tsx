'use client';

import React from 'react';

interface TeamFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  counts: { [key: string]: number };
}

export function TeamFilters({ activeFilter, setActiveFilter, counts }: TeamFiltersProps) {
  const filterTabs = [
    { name: "Active", count: counts.Active },
    { name: "Inactive", count: counts.Inactive },
    { name: "Onboarding", count: counts.Onboarding },
    { name: "On Leave", count: counts["On Leave"] },
  ];

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 text-sm border-b border-[hsl(var(--border))] pb-4">
      {filterTabs.map((tab) => {
        const isActive = activeFilter === tab.name;
        
        let dotClass = '';
        if (tab.name === 'Active') dotClass = 'bg-green-500';
        else if (tab.name === 'Inactive') dotClass = 'bg-gray-500';
        else if (tab.name === 'Onboarding') dotClass = 'bg-blue-500';
        else if (tab.name === 'On Leave') dotClass = 'bg-yellow-500';

        return (
          <button
            key={tab.name}
            onClick={() => setActiveFilter(tab.name)}
            className={`flex items-center gap-2 cursor-pointer transition-colors px-3 py-1 rounded-full ${
              isActive 
                ? "bg-foreground text-background font-semibold" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${dotClass} ${isActive ? 'scale-110' : 'opacity-70'}`}
            ></div>
            {tab.name} <span className={`font-bold ${isActive ? 'text-background/80' : 'text-muted-foreground'}`}>{tab.count}</span>
          </button>
        );
      })}
    </div>
  );
}