export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  banner?: string;
  bio: string;
  location?: string;
  website?: string;
  joinedAt: string;
  followersCount: number;
  followingCount: number;
  isVerified: boolean;
  isFollowing?: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  images?: string[];
  createdAt: string;
  likesCount: number;
  repostsCount: number;
  repliesCount: number;
  viewsCount: number;
  bookmarksCount: number;
  isLiked: boolean;
  isReposted: boolean;
  isBookmarked: boolean;
  replyTo?: string;
  thread?: Post[];
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  createdAt: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participant: User;
  lastMessage: Message;
  unreadCount: number;
}

export interface Notification {
  id: string;
  type: 'like' | 'repost' | 'follow' | 'reply' | 'mention';
  actor: User;
  post?: Post;
  createdAt: string;
  isRead: boolean;
}

export interface TrendingTopic {
  id: string;
  category: string;
  name: string;
  postsCount: number;
}
