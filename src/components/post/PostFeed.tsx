import PostCard from './PostCard';
import type { Post } from '@/types';

interface PostFeedProps {
  posts: Post[];
  loading?: boolean;
}

export default function PostFeed({ posts, loading }: PostFeedProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!posts?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
        <p className="text-3xl font-bold mb-2">Nothing to see here — yet</p>
        <p className="text-muted-foreground">When there are posts, they'll show up here.</p>
      </div>
    );
  }

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
