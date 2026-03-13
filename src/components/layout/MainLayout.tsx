import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import MobileBottomNav from './MobileBottomNav';

export default function MainLayout() {
  return (
    <div className="flex justify-center min-h-screen">
      {/* Left sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="flex-1 max-w-[600px] border-x border-border min-h-screen pb-14 lg:pb-0">
        <Outlet />
      </main>

      {/* Right sidebar - hidden on tablet and mobile */}
      <RightSidebar />

      {/* Mobile bottom nav */}
      <MobileBottomNav />
    </div>
  );
}
