import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bell, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { icon: Home, path: '/' },
  { icon: Search, path: '/explore' },
  { icon: Bell, path: '/notifications' },
  { icon: Mail, path: '/messages' },
];

export default function MobileBottomNav() {
  const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border lg:hidden z-50">
      <div className="flex items-center justify-around h-[53px]">
        {items.map(({ icon: Icon, path }) => {
          const active = location.pathname === path;
          return (
            <Link key={path} to={path} className="flex items-center justify-center flex-1 h-full">
              <Icon className={cn('h-6 w-6', active ? 'text-foreground' : 'text-muted-foreground')} strokeWidth={active ? 2.5 : 1.8} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
