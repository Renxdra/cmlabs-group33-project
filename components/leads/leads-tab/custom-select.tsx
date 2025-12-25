import { ChevronDown } from 'lucide-react';

interface CustomSelectProps {
  label: string;
  options: string[];
  defaultValue: string;
}

export const CustomSelect = ({ label, options, defaultValue }: CustomSelectProps) => (
  <div className="flex flex-col w-full">
    <span className="text-[10px] text-gray-500 mb-1 font-semibold uppercase dark:text-gray-400">{label}</span>
    <div className="relative">
      <select className="w-full bg-gray-200 border-none rounded-md p-2 text-xs font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer dark:bg-gray-700 dark:text-white dark:border-gray-600">
        <option>{defaultValue}</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="absolute right-2 top-2 h-3 w-3 text-gray-500 pointer-events-none dark:text-gray-400" />
    </div>
  </div>
);