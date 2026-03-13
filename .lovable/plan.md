

# X/Twitter Clone — Full Frontend Architecture Setup

## Design
- **Dark theme** closely mimicking X's layout: dark background (#000/15 18 25), white text, blue accent (#1D9BF0)
- Left sidebar navigation, center feed, right sidebar (trends/search/who to follow)
- Responsive: mobile bottom nav, tablet/desktop sidebar

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home/Feed | Main timeline with posts |
| `/explore` | Explore | Trending topics, search |
| `/notifications` | Notifications | Likes, follows, mentions, reposts |
| `/messages` | Messages | DM inbox & conversation threads |
| `/bookmarks` | Bookmarks | Saved posts |
| `/profile/:username` | Profile | User profile with tabs (Posts, Replies, Media, Likes) |
| `/post/:id` | Post Detail | Single post with reply thread |
| `/settings` | Settings | Account, privacy, display settings |
| `/login` | Login | Sign in page |
| `/signup` | Signup | Registration page |
| `/search` | Search Results | Search users & posts |

## Component Architecture (Modular)

### Layout Module
- `MainLayout` — 3-column responsive layout
- `Sidebar` — Left nav with links + compose button
- `RightSidebar` — Trends, who to follow, search
- `MobileBottomNav` — Bottom nav for mobile
- `TopBar` — Page title header

### Auth Module
- `LoginForm`, `SignupForm`
- `AuthGuard` (protected route wrapper)
- Auth context/provider with mock user state

### Post/Tweet Module
- `PostCard` — Individual post with actions (like, repost, reply, bookmark, share)
- `PostComposer` — Create new post with character count
- `PostFeed` — Scrollable feed of posts
- `PostThread` — Threaded reply view
- `PostActions` — Like, repost, reply, bookmark, share bar

### Profile Module
- `ProfileHeader` — Banner, avatar, bio, follow button, stats
- `ProfileTabs` — Posts, Replies, Media, Likes tabs
- `EditProfileModal` — Edit profile dialog
- `FollowButton`

### Messaging Module
- `ConversationList` — DM inbox sidebar
- `ChatWindow` — Message thread view
- `MessageInput` — Compose message

### Notifications Module
- `NotificationItem` — Individual notification
- `NotificationList` — Grouped notifications
- `NotificationFilters` — All, Mentions, Verified tabs

### Shared/Common Module
- `UserAvatar`, `UserHoverCard`
- `TrendingItem`, `WhoToFollow`
- `SearchBar`
- `InfiniteScroll` wrapper
- `ComposeModal` (global floating compose)

## Data Layer
- **Mock data service** with typed interfaces (`User`, `Post`, `Message`, `Notification`)
- API service layer with functions like `getPosts()`, `getUser()`, `sendMessage()` — returns mock data, easily swappable for your real API
- React Query hooks for all data fetching (`useTimeline`, `useProfile`, `useMessages`, etc.)
- TypeScript interfaces for all data models

## Key Integrations Scaffolded
- **React Query** for data fetching/caching
- **React Router** for routing with nested layouts
- **Sonner** for toast notifications
- **Date-fns** for timestamps ("2h ago")
- **Lucide icons** throughout
- **Responsive design** with mobile-first approach

This sets up a production-quality frontend architecture with ~20+ components, 10+ routes, typed mock data, and a clean API layer ready to connect to your external backend.

