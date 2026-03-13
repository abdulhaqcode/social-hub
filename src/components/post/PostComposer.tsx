import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Image, Smile, CalendarDays, MapPin, BarChart3 } from 'lucide-react';

interface PostComposerProps {
  placeholder?: string;
  onPost?: (content: string) => void;
}

export default function PostComposer({ placeholder = "What is happening?!", onPost }: PostComposerProps) {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const maxLength = 280;

  const handlePost = () => {
    if (!content.trim()) return;
    onPost?.(content);
    setContent('');
  };

  const remaining = maxLength - content.length;

  return (
    <div className="flex gap-3 px-4 py-3 border-b border-border">
      <Avatar className="h-10 w-10 mt-1">
        <AvatarImage src={user?.avatar} />
        <AvatarFallback>{user?.displayName?.[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-xl placeholder:text-muted-foreground resize-none outline-none min-h-[56px] py-3"
          rows={1}
          onInput={(e) => {
            const t = e.target as HTMLTextAreaElement;
            t.style.height = 'auto';
            t.style.height = t.scrollHeight + 'px';
          }}
        />

        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-1 -ml-2">
            {[Image, Smile, BarChart3, CalendarDays, MapPin].map((Icon, i) => (
              <button key={i} className="p-2 rounded-full hover:bg-primary/10 transition-colors text-primary">
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {content.length > 0 && (
              <span className={`text-sm ${remaining < 20 ? remaining < 0 ? 'text-destructive' : 'text-warning' : 'text-muted-foreground'}`}>
                {remaining}
              </span>
            )}
            <Button
              onClick={handlePost}
              disabled={!content.trim() || remaining < 0}
              className="rounded-full h-9 px-5 font-bold bg-primary hover:bg-primary/90"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
