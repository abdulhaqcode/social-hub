/**
 * API Service Layer
 * Replace mock implementations with real API calls to your external backend.
 */
import { mockPosts, mockUsers, mockConversations, mockMessages, mockNotifications, mockTrending, suggestedUsers, currentUser } from '@/data/mock';
import type { Post, User, Conversation, Message, Notification, TrendingTopic } from '@/types';

// Simulate network delay
const delay = (ms = 300) => new Promise(r => setTimeout(r, ms));

// ─── Auth ──────────────────────────────────────────────────
export const authApi = {
  login: async (_email: string, _password: string): Promise<User> => {
    await delay();
    return currentUser;
  },
  signup: async (_data: { email: string; password: string; username: string; displayName: string }): Promise<User> => {
    await delay();
    return currentUser;
  },
  logout: async (): Promise<void> => { await delay(); },
  getCurrentUser: async (): Promise<User> => { await delay(); return currentUser; },
};

// ─── Posts / Timeline ──────────────────────────────────────
export const postsApi = {
  getTimeline: async (): Promise<Post[]> => { await delay(); return mockPosts; },
  getPost: async (id: string): Promise<Post | undefined> => { await delay(); return mockPosts.find(p => p.id === id); },
  getUserPosts: async (username: string): Promise<Post[]> => { await delay(); return mockPosts.filter(p => p.author.username === username); },
  createPost: async (content: string): Promise<Post> => {
    await delay();
    const post: Post = {
      id: `p${Date.now()}`, author: currentUser, content, createdAt: new Date().toISOString(),
      likesCount: 0, repostsCount: 0, repliesCount: 0, viewsCount: 0, bookmarksCount: 0,
      isLiked: false, isReposted: false, isBookmarked: false,
    };
    return post;
  },
  likePost: async (id: string): Promise<void> => { await delay(); console.log('liked', id); },
  repostPost: async (id: string): Promise<void> => { await delay(); console.log('reposted', id); },
  bookmarkPost: async (id: string): Promise<void> => { await delay(); console.log('bookmarked', id); },
  deletePost: async (id: string): Promise<void> => { await delay(); console.log('deleted', id); },
  searchPosts: async (query: string): Promise<Post[]> => {
    await delay();
    return mockPosts.filter(p => p.content.toLowerCase().includes(query.toLowerCase()));
  },
};

// ─── Users ─────────────────────────────────────────────────
export const usersApi = {
  getUser: async (username: string): Promise<User | undefined> => { await delay(); return mockUsers.find(u => u.username === username); },
  followUser: async (id: string): Promise<void> => { await delay(); console.log('followed', id); },
  unfollowUser: async (id: string): Promise<void> => { await delay(); console.log('unfollowed', id); },
  searchUsers: async (query: string): Promise<User[]> => {
    await delay();
    return mockUsers.filter(u => u.displayName.toLowerCase().includes(query.toLowerCase()) || u.username.toLowerCase().includes(query.toLowerCase()));
  },
  getSuggestedUsers: async (): Promise<User[]> => { await delay(); return suggestedUsers; },
  updateProfile: async (_data: Partial<User>): Promise<User> => { await delay(); return currentUser; },
};

// ─── Messages ──────────────────────────────────────────────
export const messagesApi = {
  getConversations: async (): Promise<Conversation[]> => { await delay(); return mockConversations; },
  getMessages: async (_conversationId: string): Promise<Message[]> => { await delay(); return mockMessages; },
  sendMessage: async (_conversationId: string, content: string): Promise<Message> => {
    await delay();
    return { id: `m${Date.now()}`, senderId: currentUser.id, content, createdAt: new Date().toISOString(), isRead: false };
  },
};

// ─── Notifications ─────────────────────────────────────────
export const notificationsApi = {
  getNotifications: async (): Promise<Notification[]> => { await delay(); return mockNotifications; },
  markAsRead: async (id: string): Promise<void> => { await delay(); console.log('marked read', id); },
  markAllAsRead: async (): Promise<void> => { await delay(); },
};

// ─── Trending ──────────────────────────────────────────────
export const trendingApi = {
  getTrending: async (): Promise<TrendingTopic[]> => { await delay(); return mockTrending; },
};
