import { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useTrending } from '@/hooks/useApi';
import { formatCount } from '@/lib/format';
import { Link } from 'react-router-dom';

export default function ExplorePage() {
  const { data: trending } = useTrending();
  const [query, setQuery] = useState('');

  return (
    <>
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border px-4 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search"
            className="pl-10 rounded-full bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary h-[42px]"
          />
        </div>
      </div>

      <div className="flex border-b border-border">
        {['For you', 'Trending', 'News', 'Sports', 'Entertainment'].map((tab, i) => (
          <button key={tab} className={`flex-1 py-3 text-sm font-medium hover:bg-accent/50 transition-colors relative ${i === 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
            {tab}
            {i === 0 && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-primary rounded-full" />}
          </button>
        ))}
      </div>

      {trending?.map(topic => (
        <Link key={topic.id} to={`/search?q=${encodeURIComponent(topic.name)}`} className="block px-4 py-3 border-b border-border hover:bg-accent/30 transition-colors">
          <p className="text-xs text-muted-foreground">{topic.category} · Trending</p>
          <p className="font-bold text-[15px] mt-0.5">{topic.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{formatCount(topic.postsCount)} posts</p>
        </Link>
      ))}
    </>
  );
}
