import { ChevronDown } from 'lucide-react';

interface DetailCardProps {
  title: string;
}

export const DetailCard = ({ title }: DetailCardProps) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
     <div className="flex justify-between items-center mb-2">
       <h3 className="font-bold dark:text-white">{title}</h3>
       <ChevronDown size={16} className="text-gray-400 dark:text-gray-500" />
     </div>
     <p className="text-xs text-gray-400 leading-relaxed mb-4 dark:text-gray-500">Your details section is empty. Add custom fields or drag and drop existing ones to populate it.</p>
     <button className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-xs text-gray-500 font-medium flex items-center justify-center gap-2 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800">
       Drag and drop fields <ChevronDown size={14}/>
     </button>
  </div>
);