import { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, Bookmark, MoreHorizontal, BarChart3 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { formatTimeAgo, formatCount } from '@/lib/format';
import { cn } from '@/lib/utils';
import type { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [reposted, setReposted] = useState(post.isReposted);
  const [repostsCount, setRepostsCount] = useState(post.repostsCount);
  const [bookmarked, setBookmarked] = useState(post.isBookmarked);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLiked(!liked);
    setLikesCount(c => liked ? c - 1 : c + 1);
  };

  const toggleRepost = (e: React.MouseEvent) => {
    e.preventDefault();
    setReposted(!reposted);
    setRepostsCount(c => reposted ? c - 1 : c + 1);
  };

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setBookmarked(!bookmarked);
  };

  return (
    <Link
      to={`/post/${post.id}`}
      className="flex gap-3 px-4 py-3 border-b border-border hover:bg-accent/30 transition-colors cursor-pointer animate-fade-in"
    >
      <Link to={`/profile/${post.author.username}`} onClick={e => e.stopPropagation()}>
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.author.avatar} />
          <AvatarFallback>{post.author.displayName[0]}</AvatarFallback>
        </Avatar>
      </Link>

      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center gap-1 text-[15px]">
          <Link to={`/profile/${post.author.username}`} onClick={e => e.stopPropagation()} className="font-bold hover:underline truncate">
            {post.author.displayName}
          </Link>
          {post.author.isVerified && <span className="text-primary text-sm">✓</span>}
          <span className="text-muted-foreground truncate">@{post.author.username}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground hover:underline">{formatTimeAgo(post.createdAt)}</span>
          <button className="ml-auto p-1.5 -mr-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" onClick={e => e.preventDefault()}>
            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <p className="text-[15px] leading-5 whitespace-pre-wrap break-words mt-0.5">{post.content}</p>

        {/* Actions */}
        <div className="flex items-center justify-between mt-3 max-w-[425px] -ml-2">
          <button className="flex items-center gap-1 group" onClick={e => e.preventDefault()}>
            <span className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
              <MessageCircle className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </span>
            <span className="text-xs text-muted-foreground group-hover:text-primary">{formatCount(post.repliesCount)}</span>
          </button>

          <button className={cn('flex items-center gap-1 group')} onClick={toggleRepost}>
            <span className="p-2 rounded-full group-hover:bg-success/10 transition-colors">
              <Repeat2 className={cn('h-4 w-4', reposted ? 'text-success' : 'text-muted-foreground group-hover:text-success')} />
            </span>
            <span className={cn('text-xs', reposted ? 'text-success' : 'text-muted-foreground group-hover:text-success')}>{formatCount(repostsCount)}</span>
          </button>

          <button className={cn('flex items-center gap-1 group')} onClick={toggleLike}>
            <span className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
              <Heart className={cn('h-4 w-4', liked ? 'text-pink-500 fill-pink-500 animate-heart-pop' : 'text-muted-foreground group-hover:text-pink-500')} />
            </span>
            <span className={cn('text-xs', liked ? 'text-pink-500' : 'text-muted-foreground group-hover:text-pink-500')}>{formatCount(likesCount)}</span>
          </button>

          <button className="flex items-center gap-1 group" onClick={e => e.preventDefault()}>
            <span className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
              <BarChart3 className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </span>
            <span className="text-xs text-muted-foreground group-hover:text-primary">{formatCount(post.viewsCount)}</span>
          </button>

          <div className="flex items-center gap-0">
            <button className="p-2 rounded-full hover:bg-primary/10 transition-colors" onClick={toggleBookmark}>
              <Bookmark className={cn('h-4 w-4', bookmarked ? 'text-primary fill-primary' : 'text-muted-foreground hover:text-primary')} />
            </button>
            <button className="p-2 rounded-full hover:bg-primary/10 transition-colors" onClick={e => e.preventDefault()}>
              <Share className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
