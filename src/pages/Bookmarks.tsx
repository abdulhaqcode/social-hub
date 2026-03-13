import TopBar from '@/components/layout/TopBar';
import PostFeed from '@/components/post/PostFeed';

export default function BookmarksPage() {
  return (
    <>
      <TopBar title="Bookmarks" subtitle="@johndoe" />
      <PostFeed posts={[]} />
    </>
  );
}
