import { 
  FileText, ChevronDown, Calendar
} from 'lucide-react';

interface SummaryCardProps {
  dealValue: string;
  company: string;
  contactPerson: string;
  priorities: string[];
  date: string;
}

export const SummaryCard = ({ dealValue, company, contactPerson, priorities, date }: SummaryCardProps) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-between items-center mb-5">
      <h3 className="font-bold text-lg dark:text-white">Summary</h3>
      <div className="flex gap-2">
        <button className="p-1 dark:text-gray-400"><FileText size={16} className="text-gray-400 dark:text-gray-500"/></button>
        <button className="p-1 dark:text-gray-400"><ChevronDown size={16} className="text-gray-400 dark:text-gray-500"/></button>
      </div>
    </div>
    <div className="space-y-4 text-sm dark:text-gray-300">
      <div><p className="text-gray-400 text-[11px] font-bold uppercase mb-1 dark:text-gray-500">Deal Value</p><p className="font-bold dark:text-white">{dealValue}</p></div>
      <div><p className="text-gray-400 text-[11px] font-bold uppercase mb-1 dark:text-gray-500">Company</p><p className="font-medium text-gray-700 dark:text-gray-300">{company}</p></div>
      <div><p className="text-gray-400 text-[11px] font-bold uppercase mb-1 dark:text-gray-500">Contact Person</p><p className="text-gray-700 dark:text-gray-300">{contactPerson}</p></div>
      <div className="flex gap-2 pt-2">
        {priorities.map((priority, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 rounded text-[10px] font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-300">{priority}</span>
        ))}
      </div>
      <div className="flex items-center gap-2 text-gray-400 pt-2 font-medium dark:text-gray-500">
        <Calendar size={14} /> <span className="text-xs dark:text-gray-300">{date}</span>
      </div>
    </div>
  </div>
);