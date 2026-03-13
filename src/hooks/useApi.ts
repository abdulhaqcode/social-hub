import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postsApi, usersApi, messagesApi, notificationsApi, trendingApi, authApi } from '@/services/api';

// ─── Auth ──────────────────────────────────────────────────
export const useCurrentUser = () =>
  useQuery({ queryKey: ['currentUser'], queryFn: authApi.getCurrentUser });

// ─── Timeline ──────────────────────────────────────────────
export const useTimeline = () =>
  useQuery({ queryKey: ['timeline'], queryFn: postsApi.getTimeline });

export const usePost = (id: string) =>
  useQuery({ queryKey: ['post', id], queryFn: () => postsApi.getPost(id), enabled: !!id });

export const useUserPosts = (username: string) =>
  useQuery({ queryKey: ['userPosts', username], queryFn: () => postsApi.getUserPosts(username), enabled: !!username });

export const useCreatePost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (content: string) => postsApi.createPost(content),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['timeline'] }),
  });
};

export const useLikePost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => postsApi.likePost(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['timeline'] }),
  });
};

export const useSearchPosts = (query: string) =>
  useQuery({ queryKey: ['searchPosts', query], queryFn: () => postsApi.searchPosts(query), enabled: query.length > 0 });

// ─── Users ─────────────────────────────────────────────────
export const useUser = (username: string) =>
  useQuery({ queryKey: ['user', username], queryFn: () => usersApi.getUser(username), enabled: !!username });

export const useSuggestedUsers = () =>
  useQuery({ queryKey: ['suggestedUsers'], queryFn: usersApi.getSuggestedUsers });

export const useSearchUsers = (query: string) =>
  useQuery({ queryKey: ['searchUsers', query], queryFn: () => usersApi.searchUsers(query), enabled: query.length > 0 });

// ─── Messages ──────────────────────────────────────────────
export const useConversations = () =>
  useQuery({ queryKey: ['conversations'], queryFn: messagesApi.getConversations });

export const useMessages = (conversationId: string) =>
  useQuery({ queryKey: ['messages', conversationId], queryFn: () => messagesApi.getMessages(conversationId), enabled: !!conversationId });

export const useSendMessage = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ conversationId, content }: { conversationId: string; content: string }) =>
      messagesApi.sendMessage(conversationId, content),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['messages'] }),
  });
};

// ─── Notifications ─────────────────────────────────────────
export const useNotifications = () =>
  useQuery({ queryKey: ['notifications'], queryFn: notificationsApi.getNotifications });

// ─── Trending ──────────────────────────────────────────────
export const useTrending = () =>
  useQuery({ queryKey: ['trending'], queryFn: trendingApi.getTrending });
