'use client';

import React, { useState } from 'react';
import { 
  Plus, MoreHorizontal, FileText, UserCircle, Wand2,
  CheckSquare, Archive, Filter, ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';

// --- 1. TYPES & INTERFACES ---
type Priority = 'High Priority' | 'Medium Priority' | 'Low Priority';
type ClientType = 'New Client' | 'Returning';

interface Lead {
  id: string;
  title: string;
  company: string;
  value: number;
  priority: Priority;
  clientType: ClientType;
  invoiceStatus?: 'INVOICE' | 'DRAFT';
}

interface Column {
  id: string;
  title: string;
  leads: Lead[];
}

interface BoardData {
  [key: string]: Column;
}

// --- 2. MOCK DATA (UPDATED) ---
const initialData: BoardData = {
  'lead-in': {
    id: 'lead-in',
    title: 'Lead In',
    leads: [
      { id: '1', title: '[Sample] iTable', company: 'Company Name', value: 7000, priority: 'High Priority', clientType: 'New Client', invoiceStatus: 'INVOICE' },
    ],
  },
  'contact-made': {
    id: 'contact-made',
    title: 'Contact Made',
    leads: [],
  },
  'need-identified': {
    id: 'need-identified',
    title: 'Need Identified',
    leads: [
      { id: '3', title: '[Sample] iTable', company: 'Company Name', value: 7000, priority: 'High Priority', clientType: 'New Client', invoiceStatus: 'INVOICE' },
    ],
  },
  'proposal-made': {
    id: 'proposal-made',
    title: 'Proposal Made',
    leads: [
      { id: '5', title: '[Sample] iTable', company: 'Company Name', value: 7000, priority: 'High Priority', clientType: 'New Client', invoiceStatus: 'INVOICE' },
    ],
  },
  'negotiation': {
    id: 'negotiation',
    title: 'Negotiation',
    leads: [
      { id: '6', title: '[Sample] iTable', company: 'Company Name', value: 7000, priority: 'High Priority', clientType: 'New Client', invoiceStatus: 'INVOICE' },
    ],
  },
  'contract-send': {
    id: 'contract-send',
    title: 'Contract Send',
    leads: [
      { id: '7', title: '[Sample] iTable', company: 'Company Name', value: 7000, priority: 'High Priority', clientType: 'New Client', invoiceStatus: 'INVOICE' },
    ],
  },
  'won': {
    id: 'won',
    title: 'Won',
    leads: [], // Empty state as shown in image
  },
};

// --- 3. COMPONENTS ---

// Component: Bottom Drop Zone (Visual)
function DropZoneArea({ label }: { label: string }) {
    return (
        <div className="h-16 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800/50">
            <span className="text-gray-500 dark:text-gray-400 font-bold tracking-widest">{label}</span>
        </div>
    )
}

// --- 4. MAIN COMPONENT LOGIC ---
export default function LeadsDashboard() {
  const [boardData] = useState<BoardData>(initialData);

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Title & Actions */}
      <div className="flex justify-between items-end">
          <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Leads</h2>
              <p className="text-muted-foreground text-sm mt-1">Showing data from current month</p>
          </div>
          <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                  <Plus size={18} /> Add Lead
              </button>
              <button className="flex items-center gap-2 bg-muted text-foreground px-5 py-2.5 rounded-full font-medium text-sm hover:bg-accent transition-all">
                  <Wand2 size={18} /> AI Chat
              </button>
          </div>
      </div>

      {/* Toolbar Filter */}
      <div className="flex items-center justify-between">
          <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-sm border border-transparent cursor-pointer">
                  <CheckSquare size={18} />
                  <div className="h-4 w-[1px] bg-primary-foreground/60 mx-1"></div>
                  <div className="flex flex-col gap-[2px]">
                      <div className="w-3 h-[2px] bg-primary-foreground"></div>
                      <div className="w-3 h-[2px] bg-primary-foreground"></div>
                      <div className="w-3 h-[2px] bg-primary-foreground"></div>
                  </div>
              </div>
              <button className="flex items-center gap-2 bg-muted text-foreground px-4 py-2 rounded-lg shadow-sm font-medium text-sm hover:bg-accent transition-all">
                  <Archive size={16} /> Archive
              </button>
              <button className="flex items-center gap-2 bg-muted text-foreground px-4 py-2 rounded-lg shadow-sm font-medium text-sm hover:bg-accent transition-all">
                  <Filter size={16} /> Filters <ChevronDown size={14} />
              </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex items-center gap-2 flex-1 mx-8 max-w-md ml-auto">
               <button className="w-8 h-8 flex items-center justify-center rounded-full bg-muted shadow-sm hover:bg-accent"><ChevronLeft size={16}/></button>
               <div className="h-2 bg-muted rounded-full flex-1 overflow-hidden">
                  <div className="h-full w-1/3 bg-primary rounded-full"></div>
               </div>
               <button className="w-8 h-8 flex items-center justify-center rounded-full bg-muted shadow-sm hover:bg-accent"><ChevronRight size={16}/></button>
          </div>
      </div>

      {/* KANBAN BOARD AREA - WITHOUT DRAG AND DROP */}
      <div className="flex gap-4 h-full overflow-x-auto pb-4 custom-scrollbar">
        {Object.values(boardData).map((column) => (
          <div key={column.id} className="min-w-[280px] w-80 flex flex-col h-full bg-transparent shrink-0">
            {/* Column Header */}
            <div className="bg-card p-4 rounded-xl shadow-sm mb-3 flex justify-between items-center border-l-4 border-transparent group shrink-0">
              <div>
                <h3 className="font-bold text-foreground text-base">{column.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 font-medium">
                    IDR {column.leads.reduce((acc, lead) => acc + lead.value, 0).toLocaleString('id-ID')} - {column.leads.length} Leads
                </p>
              </div>
              <button className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus size={16} />
              </button>
            </div>

            {/* Column Content - Without Droppable since we don't want drag and drop */}
            <div className="flex-1 overflow-y-auto pr-2 pb-2 rounded-xl">
              {column.leads.length > 0 ? (
                column.leads.map((lead, index) => (
                  // Using LeadCard without Draggable since we don't want drag and drop
                  <div key={lead.id} className="bg-card p-4 rounded-xl shadow-sm mb-3 border border-transparent hover:border-primary">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{lead.title}</h4>
                        <p className="text-xs text-muted-foreground">{lead.company}</p>
                      </div>
                      <div className="flex gap-2 text-muted-foreground">
                          <MoreHorizontal size={16} className="cursor-pointer hover:text-foreground"/>
                          <FileText size={16} className="cursor-pointer hover:text-foreground"/>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                       <div className="flex items-center gap-1 font-bold text-sm text-foreground">
                          <span className="border border-foreground px-1 rounded text-[10px]">IDR</span>
                          {lead.value.toLocaleString('id-ID')}
                       </div>
                       {lead.invoiceStatus && (
                           <span className="text-[10px] font-bold text-muted-foreground uppercase">{lead.invoiceStatus}</span>
                       )}
                    </div>

                    <div className="flex gap-2 mb-3 flex-wrap">
                      <span className="bg-muted text-foreground text-[10px] px-2 py-1 rounded-full font-medium">
                          {lead.priority}
                      </span>
                      <span className="bg-muted text-foreground text-[10px] px-2 py-1 rounded-full font-medium">
                          {lead.clientType}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-border">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-[10px]">
                          <UserCircle size={14} />
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground">Responsible Team</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-muted-foreground text-sm font-medium flex flex-col items-center gap-2">
                   <span className="block w-2 h-2 bg-muted rounded-full"></span>
                   No Lead in the stage
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Zones */}
      <div className="grid grid-cols-3 gap-6 mt-6 shrink-0">
          <DropZoneArea label="DELETE" />
          <DropZoneArea label="WON" />
          <DropZoneArea label="LOST" />
      </div>

    </div>
  );
}