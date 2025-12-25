import { 
  Phone, Calendar, MoreHorizontal
} from 'lucide-react';
import { CustomSelect } from './custom-select';

interface CallContentProps {
  title: string;
  description: string;
  time: string;
}

export const CallContent = ({ title, description, time }: CallContentProps) => (
  <div className="border border-gray-200 rounded-2xl overflow-hidden dark:border-gray-700">
    <div className="p-4 flex justify-between items-start border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center dark:bg-gray-700 dark:text-white">
          <Phone size={20} className="text-gray-600 dark:text-gray-400" />
        </div>
        <div>
          <h4 className="font-bold text-sm dark:text-white">{title}</h4>
          <p className="text-[11px] text-gray-400 font-medium dark:text-gray-500">Call title</p>
          <p className="text-xs text-gray-300 italic mt-1 font-medium dark:text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500">
        <Calendar size={14} /> {time} <MoreHorizontal size={16} className="cursor-pointer ml-1 dark:text-gray-400" />
      </div>
    </div>
    
    <div className="p-4 bg-[#F9FAFB] grid grid-cols-2 gap-6 dark:bg-gray-700">
      <CustomSelect 
        label="Reminder" 
        defaultValue="15 minute before" 
        options={["30 minute before", "1 hour before"]} 
      />
      <CustomSelect 
        label="Call Purpose" 
        defaultValue="Scheduled" 
        options={["Completed", "Missed", "Cancelled"]} 
      />
    </div>
  </div>
);