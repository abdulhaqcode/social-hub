import type { User, Post, Conversation, Notification, TrendingTopic, Message } from '@/types';

export const currentUser: User = {
  id: 'u1',
  username: 'johndoe',
  displayName: 'John Doe',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
  banner: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=200&fit=crop',
  bio: 'Full-stack developer & open source enthusiast. Building cool stuff 🚀',
  location: 'San Francisco, CA',
  website: 'https://johndoe.dev',
  joinedAt: '2021-03-15T00:00:00Z',
  followersCount: 1243,
  followingCount: 567,
  isVerified: true,
};

const users: User[] = [
  currentUser,
  {
    id: 'u2', username: 'janedoe', displayName: 'Jane Doe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane',
    bio: 'Designer & creative thinker', joinedAt: '2022-01-10T00:00:00Z', followersCount: 8920, followingCount: 312, isVerified: true,
  },
  {
    id: 'u3', username: 'techguru', displayName: 'Tech Guru', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tech',
    bio: 'Your daily dose of tech news', joinedAt: '2020-06-01T00:00:00Z', followersCount: 45200, followingCount: 120, isVerified: true,
  },
  {
    id: 'u4', username: 'sarahdev', displayName: 'Sarah Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    bio: 'React enthusiast | TypeScript lover', joinedAt: '2022-08-20T00:00:00Z', followersCount: 3210, followingCount: 890, isVerified: false,
  },
  {
    id: 'u5', username: 'devops_mike', displayName: 'Mike OPS', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
    bio: 'DevOps engineer. Kubernetes & Docker.', joinedAt: '2021-11-05T00:00:00Z', followersCount: 12400, followingCount: 445, isVerified: true,
  },
];

export const mockUsers = users;

export const mockPosts: Post[] = [
  {
    id: 'p1', author: users[1], content: 'Just shipped a new design system for our product. 12 weeks of work condensed into a beautiful component library. The team did an amazing job! 🎨✨',
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    likesCount: 234, repostsCount: 45, repliesCount: 12, viewsCount: 8900, bookmarksCount: 67,
    isLiked: false, isReposted: false, isBookmarked: false,
  },
  {
    id: 'p2', author: users[2], content: 'Breaking: Next-gen AI models are now 10x faster at code generation. This changes everything for developer productivity. Thread 🧵👇',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    likesCount: 1893, repostsCount: 567, repliesCount: 234, viewsCount: 89000, bookmarksCount: 890,
    isLiked: true, isReposted: false, isBookmarked: true,
  },
  {
    id: 'p3', author: users[3], content: 'Hot take: TypeScript is not just "JavaScript with types." It fundamentally changes how you think about architecture. The type system is a design tool, not just a safety net.',
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    likesCount: 456, repostsCount: 89, repliesCount: 67, viewsCount: 12300, bookmarksCount: 123,
    isLiked: false, isReposted: true, isBookmarked: false,
  },
  {
    id: 'p4', author: users[4], content: 'Deployed 500 microservices to production today without a single incident. Our CI/CD pipeline is *chef\'s kiss* 🚀\n\nSecret? Infrastructure as code + proper testing.',
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    likesCount: 789, repostsCount: 123, repliesCount: 45, viewsCount: 23400, bookmarksCount: 234,
    isLiked: false, isReposted: false, isBookmarked: false,
  },
  {
    id: 'p5', author: users[0], content: 'Working on something exciting. Can\'t wait to share it with everyone. Stay tuned! 👀',
    createdAt: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
    likesCount: 67, repostsCount: 5, repliesCount: 23, viewsCount: 1200, bookmarksCount: 8,
    isLiked: false, isReposted: false, isBookmarked: false,
  },
  {
    id: 'p6', author: users[1], content: 'Design tip: White space is not empty space. It\'s a powerful design element that creates hierarchy, improves readability, and adds elegance to your interface.',
    createdAt: new Date(Date.now() - 1000 * 60 * 420).toISOString(),
    likesCount: 1234, repostsCount: 345, repliesCount: 56, viewsCount: 45600, bookmarksCount: 567,
    isLiked: true, isReposted: false, isBookmarked: true,
  },
];

export const mockConversations: Conversation[] = [
  {
    id: 'c1', participant: users[1],
    lastMessage: { id: 'm1', senderId: 'u2', content: 'Hey! Loved your latest post about the design system.', createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), isRead: false },
    unreadCount: 2,
  },
  {
    id: 'c2', participant: users[3],
    lastMessage: { id: 'm2', senderId: 'u1', content: 'Thanks for the TypeScript tips! Really helpful.', createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), isRead: true },
    unreadCount: 0,
  },
  {
    id: 'c3', participant: users[4],
    lastMessage: { id: 'm3', senderId: 'u5', content: 'Can we chat about the deployment pipeline?', createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(), isRead: false },
    unreadCount: 1,
  },
];

export const mockMessages: Message[] = [
  { id: 'm10', senderId: 'u2', content: 'Hey! How are you?', createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), isRead: true },
  { id: 'm11', senderId: 'u1', content: 'Doing great! Working on a new project.', createdAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(), isRead: true },
  { id: 'm12', senderId: 'u2', content: 'That sounds awesome! What kind of project?', createdAt: new Date(Date.now() - 1000 * 60 * 20).toISOString(), isRead: true },
  { id: 'm13', senderId: 'u1', content: 'A social media platform. Lots of real-time features.', createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(), isRead: true },
  { id: 'm14', senderId: 'u2', content: 'Hey! Loved your latest post about the design system.', createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), isRead: false },
];

export const mockNotifications: Notification[] = [
  { id: 'n1', type: 'like', actor: users[1], post: mockPosts[4], createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(), isRead: false },
  { id: 'n2', type: 'repost', actor: users[2], post: mockPosts[4], createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), isRead: false },
  { id: 'n3', type: 'follow', actor: users[3], createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), isRead: true },
  { id: 'n4', type: 'reply', actor: users[4], post: mockPosts[4], createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(), isRead: true },
  { id: 'n5', type: 'mention', actor: users[1], post: mockPosts[0], createdAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(), isRead: true },
  { id: 'n6', type: 'like', actor: users[4], post: mockPosts[4], createdAt: new Date(Date.now() - 1000 * 60 * 300).toISOString(), isRead: true },
];

export const mockTrending: TrendingTopic[] = [
  { id: 't1', category: 'Technology', name: 'React 19', postsCount: 12400 },
  { id: 't2', category: 'Programming', name: 'TypeScript', postsCount: 8900 },
  { id: 't3', category: 'Trending', name: '#BuildInPublic', postsCount: 45200 },
  { id: 't4', category: 'Tech', name: 'AI Revolution', postsCount: 123000 },
  { id: 't5', category: 'Business', name: 'Startup Culture', postsCount: 5600 },
];

export const suggestedUsers: User[] = [users[2], users[3], users[4]];
