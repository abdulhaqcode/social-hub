import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Repeat2, UserPlus, MessageCircle, AtSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatTimeAgo } from '@/lib/format';
import { cn } from '@/lib/utils';
import type { Notification } from '@/types';

const iconMap = {
  like: { icon: Heart, color: 'text-pink-500', fill: true },
  repost: { icon: Repeat2, color: 'text-success', fill: false },
  follow: { icon: UserPlus, color: 'text-primary', fill: false },
  reply: { icon: MessageCircle, color: 'text-primary', fill: false },
  mention: { icon: AtSign, color: 'text-primary', fill: false },
};

const textMap = {
  like: 'liked your post',
  repost: 'reposted your post',
  follow: 'followed you',
  reply: 'replied to your post',
  mention: 'mentioned you',
};

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({ notification }: NotificationItemProps) {
  const { icon: Icon, color, fill } = iconMap[notification.type];

  return (
    <div className={cn(
      'flex gap-3 px-4 py-3 border-b border-border hover:bg-accent/30 transition-colors',
      !notification.isRead && 'bg-primary/5'
    )}>
      <div className="w-10 flex justify-end pt-1">
        <Icon className={cn('h-5 w-5', color, fill && 'fill-current')} />
      </div>
      <div className="flex-1 min-w-0">
        <Link to={`/profile/${notification.actor.username}`} className="inline-block">
          <Avatar className="h-8 w-8 mb-1">
            <AvatarImage src={notification.actor.avatar} />
            <AvatarFallback>{notification.actor.displayName[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <p className="text-[15px]">
          <Link to={`/profile/${notification.actor.username}`} className="font-bold hover:underline">
            {notification.actor.displayName}
          </Link>{' '}
          <span className="text-muted-foreground">{textMap[notification.type]}</span>
          <span className="text-muted-foreground text-xs ml-2">{formatTimeAgo(notification.createdAt)}</span>
        </p>
        {notification.post && (
          <p className="text-muted-foreground text-[15px] mt-1 line-clamp-2">{notification.post.content}</p>
        )}
      </div>
    </div>
  );
}
