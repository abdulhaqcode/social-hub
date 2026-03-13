import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { formatTimeAgo } from '@/lib/format';
import { useAuth } from '@/contexts/AuthContext';
import type { Message } from '@/types';

interface ChatWindowProps {
  messages: Message[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  const { user } = useAuth();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map(msg => {
        const isOwn = msg.senderId === user?.id;
        return (
          <div key={msg.id} className={cn('flex', isOwn ? 'justify-end' : 'justify-start')}>
            <div className={cn(
              'max-w-[70%] rounded-2xl px-4 py-2',
              isOwn ? 'bg-primary text-primary-foreground rounded-br-sm' : 'bg-secondary text-foreground rounded-bl-sm'
            )}>
              <p className="text-[15px]">{msg.content}</p>
              <p className={cn('text-xs mt-1', isOwn ? 'text-primary-foreground/60' : 'text-muted-foreground')}>{formatTimeAgo(msg.createdAt)}</p>
            </div>
          </div>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}
