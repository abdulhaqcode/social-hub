import { cn } from '@/lib/utils';
import { useState } from 'react';

const tabs = ['Posts', 'Replies', 'Media', 'Likes'];

interface ProfileTabsProps {
  onTabChange?: (tab: string) => void;
}

export default function ProfileTabs({ onTabChange }: ProfileTabsProps) {
  const [active, setActive] = useState('Posts');

  const handleTab = (tab: string) => {
    setActive(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="flex border-b border-border">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => handleTab(tab)}
          className={cn(
            'flex-1 py-4 text-sm font-medium hover:bg-accent/50 transition-colors relative',
            active === tab ? 'text-foreground' : 'text-muted-foreground'
          )}
        >
          {tab}
          {active === tab && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-primary rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
