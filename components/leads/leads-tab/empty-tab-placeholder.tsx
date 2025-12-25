import { Info } from 'lucide-react';

interface EmptyTabPlaceholderProps {
  tabName: string;
}

export const EmptyTabPlaceholder = ({ tabName }: EmptyTabPlaceholderProps) => (
  <div className="flex flex-col items-center justify-center py-20 text-gray-400 dark:text-gray-500">
    <Info size={40} className="mb-2 opacity-20 dark:opacity-30" />
    <p className="text-sm italic">Belum ada konten untuk {tabName}</p>
  </div>
);