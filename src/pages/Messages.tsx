import { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import ConversationList from '@/components/messages/ConversationList';
import ChatWindow from '@/components/messages/ChatWindow';
import MessageInput from '@/components/messages/MessageInput';
import { useConversations, useMessages, useSendMessage } from '@/hooks/useApi';
import { Settings, Mail } from 'lucide-react';

export default function MessagesPage() {
  const { data: conversations } = useConversations();
  const [activeConv, setActiveConv] = useState<string | null>(null);
  const { data: messages } = useMessages(activeConv || '');
  const sendMessage = useSendMessage();

  const activeParticipant = conversations?.find(c => c.id === activeConv)?.participant;

  return (
    <>
      {!activeConv ? (
        <>
          <TopBar
            title="Messages"
            actions={
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-accent transition-colors"><Settings className="h-5 w-5" /></button>
                <button className="p-2 rounded-full hover:bg-accent transition-colors"><Mail className="h-5 w-5" /></button>
              </div>
            }
          />
          <ConversationList conversations={conversations || []} onSelect={setActiveConv} />
        </>
      ) : (
        <div className="flex flex-col h-screen">
          <TopBar title={activeParticipant?.displayName || ''} subtitle={`@${activeParticipant?.username}`} showBack />
          <ChatWindow messages={messages || []} />
          <MessageInput onSend={content => sendMessage.mutate({ conversationId: activeConv, content })} />
        </div>
      )}
    </>
  );
}
