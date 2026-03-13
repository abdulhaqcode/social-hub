import { useSearchParams } from 'react-router-dom';
import TopBar from '@/components/layout/TopBar';
import PostFeed from '@/components/post/PostFeed';
import { useSearchPosts } from '@/hooks/useApi';

export default function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const { data: posts, isLoading } = useSearchPosts(query);

  return (
    <>
      <TopBar title={`Search: "${query}"`} showBack />
      <PostFeed posts={posts || []} loading={isLoading} />
    </>
  );
}
