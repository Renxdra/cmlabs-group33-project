interface Tab {
  name: string;
  count: number | null;
}

interface TabsNavigationProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

export const TabsNavigation = ({ tabs, activeTab, setActiveTab }: TabsNavigationProps) => (
  <div className="border-b px-6 pt-5 dark:border-gray-700">
    <div className="flex gap-6 text-xs font-bold overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button 
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`pb-4 whitespace-nowrap border-b-2 transition-all ${activeTab === tab.name ? 'border-black text-black dark:border-white dark:text-white' : 'border-transparent text-gray-400 hover:text-gray-600 dark:border-transparent dark:text-gray-400 dark:hover:text-gray-300'}`}
        >
          {tab.name} {tab.count && <span className={`ml-1 px-1.5 py-0.5 rounded ${activeTab === tab.name ? 'bg-gray-200 dark:bg-gray-700 dark:text-white' : 'bg-gray-100 dark:bg-gray-600 dark:text-gray-300'}`}>{tab.count}</span>}
        </button>
      ))}
    </div>
  </div>
);