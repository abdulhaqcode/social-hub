import { useParams } from 'react-router-dom';
import TopBar from '@/components/layout/TopBar';
import PostCard from '@/components/post/PostCard';
import PostComposer from '@/components/post/PostComposer';
import { usePost } from '@/hooks/useApi';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading } = usePost(id || '');

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <>
        <TopBar title="Post" showBack />
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-3xl font-bold">Post not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar title="Post" showBack />
      <PostCard post={post} />
      <PostComposer placeholder="Post your reply" />
      {/* Replies would go here */}
      <div className="flex items-center justify-center py-8 text-muted-foreground text-sm">
        No replies yet
      </div>
    </>
  );
}
