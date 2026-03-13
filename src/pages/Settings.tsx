import TopBar from '@/components/layout/TopBar';
import { ChevronRight } from 'lucide-react';

const sections = [
  { title: 'Your account', items: ['Account information', 'Change your password', 'Deactivate your account'] },
  { title: 'Privacy and safety', items: ['Audience and tagging', 'Content you see', 'Mute and block'] },
  { title: 'Notifications', items: ['Filters', 'Preferences'] },
  { title: 'Accessibility, display, and languages', items: ['Accessibility', 'Display', 'Languages'] },
];

export default function SettingsPage() {
  return (
    <>
      <TopBar title="Settings" showBack />
      {sections.map(section => (
        <div key={section.title}>
          <h3 className="px-4 py-3 text-xl font-bold">{section.title}</h3>
          {section.items.map(item => (
            <button key={item} className="flex items-center justify-between w-full px-4 py-3 hover:bg-accent/30 transition-colors">
              <span className="text-[15px]">{item}</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          ))}
        </div>
      ))}
    </>
  );
}
