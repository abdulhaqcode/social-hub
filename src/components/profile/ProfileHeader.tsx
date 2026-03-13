import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, LinkIcon } from 'lucide-react';
import { formatCount } from '@/lib/format';
import { format } from 'date-fns';
import type { User } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const { user: currentUser } = useAuth();
  const isOwnProfile = currentUser?.id === user.id;

  return (
    <div>
      {/* Banner */}
      <div className="h-[200px] bg-secondary relative">
        {user.banner && <img src={user.banner} alt="" className="w-full h-full object-cover" />}
      </div>

      {/* Avatar & Actions */}
      <div className="px-4 pb-3">
        <div className="flex justify-between items-end -mt-[68px]">
          <Avatar className="h-[134px] w-[134px] border-4 border-background">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-4xl">{user.displayName[0]}</AvatarFallback>
          </Avatar>
          {isOwnProfile ? (
            <Button variant="outline" className="rounded-full font-bold h-9 mt-[76px] border-border hover:bg-accent">
              Edit profile
            </Button>
          ) : (
            <Button className="rounded-full font-bold h-9 mt-[76px] bg-foreground text-background hover:bg-foreground/90">
              Follow
            </Button>
          )}
        </div>

        {/* Info */}
        <div className="mt-3">
          <div className="flex items-center gap-1">
            <h2 className="text-xl font-extrabold">{user.displayName}</h2>
            {user.isVerified && <span className="text-primary">✓</span>}
          </div>
          <p className="text-muted-foreground text-[15px]">@{user.username}</p>
          <p className="text-[15px] mt-3 leading-5">{user.bio}</p>

          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
            {user.location && (
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{user.location}</span>
            )}
            {user.website && (
              <a href={user.website} className="flex items-center gap-1 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                <LinkIcon className="h-4 w-4" />{user.website.replace(/https?:\/\//, '')}
              </a>
            )}
            <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" />Joined {format(new Date(user.joinedAt), 'MMMM yyyy')}</span>
          </div>

          <div className="flex gap-4 mt-3">
            <Link to="#" className="hover:underline text-sm">
              <span className="font-bold">{formatCount(user.followingCount)}</span>{' '}
              <span className="text-muted-foreground">Following</span>
            </Link>
            <Link to="#" className="hover:underline text-sm">
              <span className="font-bold">{formatCount(user.followersCount)}</span>{' '}
              <span className="text-muted-foreground">Followers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
