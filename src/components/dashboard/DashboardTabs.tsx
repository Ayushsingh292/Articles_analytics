import { useState } from 'react';
import { LayoutGrid } from 'lucide-react';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'articles', label: 'Articles' },
  { id: 'export', label: 'Export Data' },
];

interface DashboardTabsProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export function DashboardTabs({ activeTab = 'overview', onTabChange }: DashboardTabsProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="bg-card border-b border-border px-6">
      <nav className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center gap-2 py-4 text-sm font-medium transition-colors border-b-2 -mb-px ${
              currentTab === tab.id
                ? 'text-primary border-primary'
                : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
            }`}
          >
            {tab.icon && <tab.icon className="w-4 h-4" />}
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
