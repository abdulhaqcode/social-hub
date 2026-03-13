import { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import PostComposer from '@/components/post/PostComposer';
import PostFeed from '@/components/post/PostFeed';
import { useTimeline, useCreatePost } from '@/hooks/useApi';

export default function HomePage() {
  const { data: posts, isLoading } = useTimeline();
  const createPost = useCreatePost();
  const [tab, setTab] = useState<'for-you' | 'following'>('for-you');

  return (
    <>
      <TopBar title="Home" actions={
        <div className="flex items-center">
        </div>
      } />
      <div className="flex border-b border-border">
        <button
          onClick={() => setTab('for-you')}
          className={`flex-1 py-4 text-sm font-medium hover:bg-accent/50 transition-colors relative ${tab === 'for-you' ? 'text-foreground' : 'text-muted-foreground'}`}
        >
          For you
          {tab === 'for-you' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-primary rounded-full" />}
        </button>
        <button
          onClick={() => setTab('following')}
          className={`flex-1 py-4 text-sm font-medium hover:bg-accent/50 transition-colors relative ${tab === 'following' ? 'text-foreground' : 'text-muted-foreground'}`}
        >
          Following
          {tab === 'following' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-primary rounded-full" />}
        </button>
      </div>
      <PostComposer onPost={(content) => createPost.mutate(content)} />
      <PostFeed posts={posts || []} loading={isLoading} />
    </>
  );
}
