import { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import NotificationItem from '@/components/notifications/NotificationItem';
import { useNotifications } from '@/hooks/useApi';
import { cn } from '@/lib/utils';

const filterTabs = ['All', 'Mentions'];

export default function NotificationsPage() {
  const { data: notifications, isLoading } = useNotifications();
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'Mentions'
    ? notifications?.filter(n => n.type === 'mention' || n.type === 'reply')
    : notifications;

  return (
    <>
      <TopBar title="Notifications" />
      <div className="flex border-b border-border">
        {filterTabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'flex-1 py-4 text-sm font-medium hover:bg-accent/50 transition-colors relative',
              activeTab === tab ? 'text-foreground' : 'text-muted-foreground'
            )}
          >
            {tab}
            {activeTab === tab && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-primary rounded-full" />}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        filtered?.map(n => <NotificationItem key={n.id} notification={n} />)
      )}
    </>
  );
}
