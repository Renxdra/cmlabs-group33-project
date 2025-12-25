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
import { TeamFilters } from '@/components/team/team-filters';
import { TeamMemberCard } from '@/components/team/team-member-card';

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