import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useTrending, useSuggestedUsers } from '@/hooks/useApi';
import { formatCount } from '@/lib/format';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function RightSidebar() {
  const { data: trending } = useTrending();
  const { data: suggested } = useSuggestedUsers();

  return (
    <aside className="sticky top-0 h-screen overflow-y-auto py-3 px-6 w-[350px] hidden lg:block">
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-10 rounded-full bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary h-[42px]"
        />
      </div>

      {/* Trends */}
      <div className="bg-secondary rounded-2xl overflow-hidden mb-4">
        <h2 className="font-extrabold text-xl px-4 py-3">Trends for you</h2>
        {trending?.map(topic => (
          <Link
            key={topic.id}
            to={`/search?q=${encodeURIComponent(topic.name)}`}
            className="block px-4 py-3 hover:bg-accent/50 transition-colors"
          >
            <p className="text-xs text-muted-foreground">{topic.category} · Trending</p>
            <p className="font-bold text-[15px]">{topic.name}</p>
            <p className="text-xs text-muted-foreground">{formatCount(topic.postsCount)} posts</p>
          </Link>
        ))}
        <Link to="/explore" className="block px-4 py-3 text-primary text-[15px] hover:bg-accent/50 transition-colors">
          Show more
        </Link>
      </div>

      {/* Who to follow */}
      <div className="bg-secondary rounded-2xl overflow-hidden">
        <h2 className="font-extrabold text-xl px-4 py-3">Who to follow</h2>
        {suggested?.map(user => (
          <Link
            key={user.id}
            to={`/profile/${user.username}`}
            className="flex items-center gap-3 px-4 py-3 hover:bg-accent/50 transition-colors"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.displayName[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[15px] truncate">{user.displayName}</p>
              <p className="text-sm text-muted-foreground truncate">@{user.username}</p>
            </div>
            <Button variant="outline" className="rounded-full h-8 px-4 font-bold text-sm bg-foreground text-background hover:bg-foreground/90 hover:text-background border-0">
              Follow
            </Button>
          </Link>
        ))}
        <Link to="/explore" className="block px-4 py-3 text-primary text-[15px] hover:bg-accent/50 transition-colors">
          Show more
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-4 px-4 text-xs text-muted-foreground space-x-2">
        <span>Terms of Service</span><span>Privacy Policy</span><span>Cookie Policy</span>
        <p className="mt-1">© 2026 X Clone</p>
      </div>
    </aside>
  );
}
