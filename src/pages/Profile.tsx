import { useParams } from 'react-router-dom';
import TopBar from '@/components/layout/TopBar';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileTabs from '@/components/profile/ProfileTabs';
import PostFeed from '@/components/post/PostFeed';
import { useUser, useUserPosts } from '@/hooks/useApi';

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const { data: user, isLoading: userLoading } = useUser(username || '');
  const { data: posts, isLoading: postsLoading } = useUserPosts(username || '');

  if (userLoading) {
    return (
      <div className="flex justify-center py-16">
        <div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <TopBar title="Profile" showBack />
        <div className="flex flex-col items-center justify-center py-16 px-8">
          <p className="text-3xl font-bold">This account doesn't exist</p>
          <p className="text-muted-foreground mt-1">Try searching for another.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar title={user.displayName} subtitle={`${posts?.length || 0} posts`} showBack />
      <ProfileHeader user={user} />
      <ProfileTabs />
      <PostFeed posts={posts || []} loading={postsLoading} />
    </>
  );
}
