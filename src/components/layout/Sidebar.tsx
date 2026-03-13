import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bell, Mail, Bookmark, User, Settings, Feather, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Explore', path: '/explore' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
  { icon: User, label: 'Profile', path: '/profile/johndoe' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <aside className="sticky top-0 h-screen flex flex-col justify-between py-2 px-2 w-[68px] xl:w-[275px]">
      {/* Logo */}
      <div>
        <Link to="/" className="flex items-center justify-center xl:justify-start p-3 rounded-full hover:bg-accent transition-colors">
          <span className="text-2xl font-bold">𝕏</span>
        </Link>

        {/* Nav */}
        <nav className="mt-1 space-y-1">
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
            return (
              <Link
                key={path}
                to={path}
                className={cn(
                  'flex items-center gap-4 px-3 py-3 rounded-full hover:bg-accent transition-colors group',
                  isActive && 'font-bold'
                )}
              >
                <Icon className="h-[26px] w-[26px]" strokeWidth={isActive ? 2.5 : 1.8} />
                <span className="hidden xl:inline text-xl">{label}</span>
              </Link>
            );
          })}
          <Link
            to="#"
            className="flex items-center gap-4 px-3 py-3 rounded-full hover:bg-accent transition-colors"
          >
            <MoreHorizontal className="h-[26px] w-[26px]" strokeWidth={1.8} />
            <span className="hidden xl:inline text-xl">More</span>
          </Link>
        </nav>

        {/* Compose button */}
        <div className="mt-4">
          <Button className="hidden xl:flex w-full rounded-full h-[52px] text-lg font-bold bg-primary hover:bg-primary/90">
            Post
          </Button>
          <Button size="icon" className="xl:hidden flex mx-auto rounded-full h-[52px] w-[52px] bg-primary hover:bg-primary/90">
            <Feather className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* User menu */}
      {user && (
        <button className="flex items-center gap-3 p-3 rounded-full hover:bg-accent transition-colors w-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.displayName[0]}</AvatarFallback>
          </Avatar>
          <div className="hidden xl:flex flex-col items-start flex-1 min-w-0">
            <span className="font-bold text-sm truncate">{user.displayName}</span>
            <span className="text-sm text-muted-foreground truncate">@{user.username}</span>
          </div>
          <MoreHorizontal className="hidden xl:block h-5 w-5 text-muted-foreground" />
        </button>
      )}
    </aside>
  );
}
