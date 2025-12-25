import { MoreHorizontal } from 'lucide-react';
import { StatusBadge } from './status-badge';

interface InvoiceContentProps {
  invoices: Array<{ id: string; status: string }>;
}

export const InvoiceContent = ({ invoices }: InvoiceContentProps) => (
  <div className="border border-gray-200 rounded-2xl overflow-hidden dark:border-gray-700">
    <table className="w-full text-left">
      <thead className="bg-gray-50 border-b border-gray-200 text-[10px] uppercase font-bold text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
        <tr>
          <th className="px-5 py-3">Invoice No.</th>
          <th className="px-5 py-3">Date</th>
          <th className="px-5 py-3">Due Date</th>
          <th className="px-5 py-3">Status</th>
          <th className="px-5 py-3">Total</th>
          <th className="px-5 py-3"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
        {invoices.map((inv, i) => (
          <tr key={i} className="text-xs hover:bg-gray-50 transition-colors dark:hover:bg-gray-700">
            <td className="px-5 py-4 font-bold text-gray-700 dark:text-gray-300">{inv.id}</td>
            <td className="px-5 py-4 text-gray-500 font-medium dark:text-gray-400">August 1, 2025</td>
            <td className="px-5 py-4 text-gray-500 font-medium dark:text-gray-400">August 1, 2025</td>
            <td className="px-5 py-4"><StatusBadge status={inv.status} /></td>
            <td className="px-5 py-4 font-bold text-gray-800 dark:text-gray-200">IDR 0</td>
            <td className="px-5 py-4 text-right text-gray-400 dark:text-gray-500"><MoreHorizontal size={18} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);