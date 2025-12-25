import { 
  UserCircle, CheckCircle2, ChevronDown, Trash2
} from 'lucide-react';

interface DealHeaderCardProps {
  title: string;
  ownerName: string;
  status: string;
}

export const DealHeaderCard = ({ title, ownerName, status }: DealHeaderCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <div className="flex items-center gap-2 mt-1 text-gray-500 dark:text-gray-400">
          <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center dark:bg-gray-600 dark:text-white"><UserCircle size={14}/></div>
          <span className="text-sm font-medium dark:text-gray-300">{ownerName}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-1.5 border border-gray-200 rounded-full flex items-center gap-2 text-xs font-bold bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">Following <CheckCircle2 size={14} className="text-gray-400 dark:text-gray-500"/></button>
        <button className="px-4 py-1.5 border border-gray-200 rounded-full flex items-center gap-2 text-xs font-bold dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">Qualified <ChevronDown size={14} className="dark:text-gray-400" /></button>
        <div className="flex border border-gray-200 rounded-lg overflow-hidden dark:border-gray-600">
            <button className="p-2 bg-white border-r border-gray-200 dark:bg-gray-700 dark:border-r-gray-600 dark:text-white"><CheckCircle2 size={18} className="text-gray-800 dark:text-gray-300"/></button>
            <button className="p-2 bg-white dark:bg-gray-700 dark:text-white"><Trash2 size={18} className="text-gray-800 dark:text-gray-300"/></button>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-4 gap-2">
      <div className="bg-[#2D2D2D] text-white py-2 rounded-md text-center text-xs font-bold flex items-center justify-center gap-2 dark:bg-gray-700 dark:text-gray-300">
        <CheckCircle2 size={12}/> {status}
      </div>
      {['Status', 'Status', 'Status'].map((s, i) => (
        <div key={i} className="bg-[#E5E7EB] py-2 rounded-md text-center text-xs font-bold text-gray-500 dark:bg-gray-700 dark:text-gray-400">{s}</div>
      ))}
    </div>
  </div>
);