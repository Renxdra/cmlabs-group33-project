"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Globe,
  Users,
  User,
  Info,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Mail,
  Briefcase,
  Calendar,
  MoreVertical,
} from "lucide-react";
import Link from 'next/link';
import Sidebar from '@/components/ui/sidebar';
import Header from '@/components/ui/header';

// --- 1. MOCK DATA ---
const teamMembers = [
  // --- Active Members ---
  {
    id: 1,
    name: "Angela Aulia",
    role: "UI/UX Designer",
    email: "angela@email.com",
    team: "developer team",
    joined: "9 June 2025",
    status: "Active",
  },
  {
    id: 2,
    name: "Ahmad Dliya",
    role: "UI/UX Designer",
    email: "ahmad@email.com",
    team: "developer team",
    joined: "12 June 2025",
    status: "Active",
  },
  {
    id: 3,
    name: "Achmad Fatoni",
    role: "UI/UX Designer",
    email: "achmad@email.com",
    team: "developer team",
    joined: "15 June 2025",
    status: "Active",
  },
  {
    id: 4,
    name: "Amelia Putri",
    role: "UI/UX Designer",
    email: "amelia@email.com",
    team: "developer team",
    joined: "20 June 2025",
    status: "Active",
  },
  {
    id: 5,
    name: "Dedinda Oktavia",
    role: "UI/UX Designer",
    email: "dedinda@email.com",
    team: "developer team",
    joined: "22 June 2025",
    status: "Active",
  },
  // --- Inactive Members ---
  {
    id: 6,
    name: "Ariq Mudriq",
    role: "Front-End Developer",
    email: "ariq@email.com",
    team: "developer team",
    joined: "1 Jan 2024",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Abdul Gany",
    role: "Front-End Developer",
    email: "abdul@email.com",
    team: "developer team",
    joined: "5 Feb 2024",
    status: "Inactive",
  },
  // --- Onboarding Members ---
  {
    id: 8,
    name: "Fatoni Ahmad",
    role: "Back-End Developer",
    email: "fatoni@email.com",
    team: "developer team",
    joined: "Today",
    status: "Onboarding",
  },
  {
    id: 9,
    name: "Siti Nurhaliza",
    role: "Intern",
    email: "siti@email.com",
    team: "design team",
    joined: "Today",
    status: "Onboarding",
  },
  // --- On Leave ---
  {
    id: 10,
    name: "Budi Santoso",
    role: "Project Manager",
    email: "budi@email.com",
    team: "management",
    joined: "10 Mar 2023",
    status: "On Leave",
  },
];

// Component: TeamFilters
interface TeamFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  counts: { [key: string]: number };
}

function TeamFilters({ activeFilter, setActiveFilter, counts }: TeamFiltersProps) {
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

// Component: TeamMemberCard
interface Member {
  id: number;
  name: string;
  role: string;
  email: string;
  team: string;
  joined: string;
  status: string;
}

interface TeamMemberCardProps {
  member: Member;
}

const getStatusBadge = (status: string) => {
    let colorClass = "";
    if (status === "Active") colorClass = "bg-green-500/20 text-green-500";
    else if (status === "Inactive") colorClass = "bg-gray-500/20 text-gray-500";
    else if (status === "Onboarding") colorClass = "bg-blue-500/20 text-blue-500";
    else if (status === "On Leave") colorClass = "bg-yellow-500/20 text-yellow-500";
    
    return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}>
            {status}
        </span>
    );
};

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-card p-6 rounded-xl shadow-lg border border-[hsl(var(--border))] transition-shadow hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        {/* Top row with status badge on left and menu on right */}
        <div>
          {getStatusBadge(member.status)}
        </div>
        <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Avatar and name */}
      <div className="flex flex-col items-center mb-4">
        <div className="mb-3">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-1">
            <div className="w-full h-full rounded-full flex items-center justify-center bg-background border-2 border-primary/30">
              <span className="text-xl font-bold text-foreground">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground text-center">{member.name}</h3>
        <p className="text-sm text-muted-foreground text-center">{member.role}</p>
      </div>

      {/* Contact info */}
      <div className="space-y-2 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-muted-foreground" />
          <span>{member.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-muted-foreground" />
          <span>{member.team}</span>
        </div>
      </div>
      
      {/* Join date and View Detail button at bottom */}
      <div className="pt-4 border-t border-[hsl(var(--border))]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar size={14} className="text-muted-foreground" />
            <span>Joined: {member.joined}</span>
          </div>
          <button className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium">
            View Detail
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TeamManagement() {
  // State untuk menyimpan filter yang sedang aktif
  const [activeFilter, setActiveFilter] = useState("Active");

  // Menghitung jumlah member per kategori secara dinamis
  const counts = {
    Active: teamMembers.filter(m => m.status === "Active").length,
    Inactive: teamMembers.filter(m => m.status === "Inactive").length,
    Onboarding: teamMembers.filter(m => m.status === "Onboarding").length,
    "On Leave": teamMembers.filter(m => m.status === "On Leave").length,
  };

  // Filter data member yang akan ditampilkan
  const filteredMembers = teamMembers.filter(member => member.status === activeFilter);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        {/* Header */}
        <Header />

        {/* Team Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Team Title */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Team</h1>
              <p className="text-muted-foreground text-sm">Manage your team members and their permissions</p>
            </div>

            {/* Content Title & Filters */}
            <div className="mb-6">
              <TeamFilters 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter} 
                counts={counts} 
              />
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))
              ) : (
                  <div className="col-span-full py-20 text-center text-muted-foreground bg-card rounded-xl shadow-md border border-[hsl(var(--border))]">
                      <p className="text-lg font-semibold">Tidak ada member dengan status "{activeFilter}"</p>
                      <p className="text-sm mt-1">Coba filter status yang lain.</p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}