import { Outlet } from 'react-router-dom';
import { Wifi, Globe, User, Building2 } from 'lucide-react';
import Navigation from './Navigation';

const navItems = [
  { icon: Globe, label: 'Home', path: '/' },
  { icon: Wifi, label: 'Bundles', path: '/bundles' },
  { icon: Building2, label: 'Business', path: '/business' },
  { icon: User, label: 'Account', path: '/account' },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation items={navItems} />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}