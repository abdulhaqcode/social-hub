import { useState } from 'react';
import { Send, Image, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MessageInputProps {
  onSend: (content: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [content, setContent] = useState('');

  const handleSend = () => {
    if (!content.trim()) return;
    onSend(content);
    setContent('');
  };

  return (
    <div className="flex items-center gap-2 px-4 py-3 border-t border-border">
      <button className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors">
        <Image className="h-5 w-5" />
      </button>
      <button className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors">
        <Smile className="h-5 w-5" />
      </button>
      <input
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        placeholder="Start a new message"
        className="flex-1 bg-secondary rounded-full px-4 py-2 text-[15px] outline-none placeholder:text-muted-foreground"
      />
      <Button
        onClick={handleSend}
        disabled={!content.trim()}
        size="icon"
        className="rounded-full bg-primary hover:bg-primary/90 h-9 w-9"
      >
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
}
