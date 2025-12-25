import React, { useState } from 'react';
import { 
  Search, Bell, Moon, ChevronDown, Phone, Mail, FileText, 
  Calendar, MoreHorizontal, Plus, Filter, CheckCircle2,
  Video, Info, Trash2
} from 'lucide-react';
import Link from 'next/link';
import Sidebar from '@/components/ui/sidebar';
import Header from '@/components/ui/header';
import { NavItem } from './leads-tab/nav-item';
import { CustomSelect } from './leads-tab/custom-select';
import { StatusBadge } from './leads-tab/status-badge';
import { DealHeaderCard } from './leads-tab/deal-header-card';
import { SummaryCard } from './leads-tab/summary-card';
import { DetailCard } from './leads-tab/detail-card';
import { CallContent } from './leads-tab/call-content';
import { InvoiceContent } from './leads-tab/invoice-content';
import { TabsNavigation } from './leads-tab/tabs-navigation';
import { EmptyTabPlaceholder } from './leads-tab/empty-tab-placeholder';

// --- Komponen Utama ---

export default function CRM_Dashboard() {
  const [activeTab, setActiveTab] = useState('Call');

  const tabs = [
    { name: 'Activity Timeline', count: null },
    { name: 'Notes', count: 1 },
    { name: 'Meeting', count: 1 },
    { name: 'Call', count: 1 },
    { name: 'E-mail', count: 1 },
    { name: 'Invoice', count: 1 },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FB] font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      
      {/* Use the shared sidebar */}
      <Sidebar />
      
      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-64 flex flex-col">
        
        {/* Use the shared header */}
        <Header />
        
        {/* PAGE CONTENT */}
        <div className="p-8 space-y-6">
          
          {/* BREADCRUMB */}
          <Link href="/leads" className="flex items-center gap-2 text-gray-500 text-sm font-medium hover:text-black transition dark:text-gray-400 dark:hover:text-white">
            <ChevronDown size={16} className="rotate-90" /> Back to Leads
          </Link>

          {/* DEAL HEADER CARD */}
          <DealHeaderCard 
            title="[Sample] iTable"
            ownerName="Owner Name"
            status="Qualified"
          />

          <div className="grid grid-cols-12 gap-6 items-start">
            {/* LEFT COLUMN: Summary & Detail */}
            <div className="col-span-4 space-y-6">
              <SummaryCard 
                dealValue="IDR 30.000"
                company="Company Name"
                contactPerson="Lorem Ipsum Sit Dolor"
                priorities={["High Priority", "New Client"]}
                date="7/7/2025"
              />
              <DetailCard 
                title="Detail"
              />
            </div>

            {/* RIGHT COLUMN: TABS & DYNAMIC CONTENT */}
            <div className="col-span-8 bg-white rounded-xl border border-gray-100 shadow-sm min-h-[500px] dark:bg-gray-800 dark:border-gray-700">
              {/* TABS NAVIGATION */}
              <TabsNavigation 
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {/* DYNAMIC CONTENT BASED ON ACTIVE TAB */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <button className="text-xs flex items-center gap-2 text-gray-600 font-bold border border-gray-200 px-3 py-1.5 rounded-lg dark:border-gray-600 dark:text-gray-400 dark:bg-gray-700">
                    <Filter size={14}/> Filters <ChevronDown size={12}/>
                  </button>
                  <button className="text-xs flex items-center gap-2 text-gray-600 font-bold hover:text-black dark:text-gray-400 dark:hover:text-white">
                    <Plus size={16}/> Add {activeTab.toLowerCase()}
                  </button>
                </div>

                {/* TAB CONTENT: CALL */}
                {activeTab === 'Call' && (
                  <CallContent 
                    title="Call Schedule created"
                    description="She's interested in your"
                    time="Today, 12.00 PM"
                  />
                )}

                {/* TAB CONTENT: INVOICE */}
                {activeTab === 'Invoice' && (
                  <InvoiceContent 
                    invoices={[
                      { id: 'INV-20250801-001', status: 'Draft' },
                      { id: 'INV-20250801-001', status: 'Sent' },
                      { id: 'INV-20250801-001', status: 'Paid' },
                    ]}
                  />
                )}

                {/* PLACEHOLDER UNTUK TAB LAIN */}
                {activeTab !== 'Call' && activeTab !== 'Invoice' && (
                  <EmptyTabPlaceholder 
                    tabName={activeTab}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}