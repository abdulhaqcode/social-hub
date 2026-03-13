import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatTimeAgo } from '@/lib/format';
import { cn } from '@/lib/utils';
import type { Conversation } from '@/types';

interface ConversationListProps {
  conversations: Conversation[];
  activeId?: string;
  onSelect: (id: string) => void;
}

export default function ConversationList({ conversations, activeId, onSelect }: ConversationListProps) {
  return (
    <div>
      {conversations.map(conv => (
        <button
          key={conv.id}
          onClick={() => onSelect(conv.id)}
          className={cn(
            'flex items-center gap-3 w-full px-4 py-3 hover:bg-accent/50 transition-colors text-left',
            activeId === conv.id && 'bg-accent/50'
          )}
        >
          <Avatar className="h-12 w-12">
            <AvatarImage src={conv.participant.avatar} />
            <AvatarFallback>{conv.participant.displayName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[15px] truncate">{conv.participant.displayName}</span>
              <span className="text-muted-foreground text-sm truncate">@{conv.participant.username}</span>
              <span className="text-muted-foreground text-sm">· {formatTimeAgo(conv.lastMessage.createdAt)}</span>
            </div>
            <p className={cn(
              'text-sm truncate',
              conv.unreadCount > 0 ? 'text-foreground font-medium' : 'text-muted-foreground'
            )}>
              {conv.lastMessage.content}
            </p>
          </div>
          {conv.unreadCount > 0 && (
            <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs text-primary-foreground font-bold">{conv.unreadCount}</span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
