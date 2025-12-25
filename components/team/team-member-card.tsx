'use client';

import React from 'react';
import { Mail, Briefcase, Calendar, MoreVertical } from 'lucide-react';

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

export function TeamMemberCard({ member }: TeamMemberCardProps) {
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