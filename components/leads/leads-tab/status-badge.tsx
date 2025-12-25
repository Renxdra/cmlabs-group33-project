interface StatusBadgeProps {
  status: string;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const styles: Record<string, string> = {
    Draft: 'bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300',
    Sent: 'bg-gray-300 text-gray-700 dark:bg-gray-500 dark:text-gray-200',
    Paid: 'bg-gray-400 text-white dark:bg-gray-700 dark:text-white',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${styles[status] || 'bg-gray-100 dark:bg-gray-600 dark:text-gray-300'}`}>
      {status}
    </span>
  );
};