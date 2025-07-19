'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Bell,
  Briefcase,
  ChevronDown,
  Grid3X3,
  Home,
  MessageCircle,
  Moon,
  Search,
  Sun,
  Users,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

interface TopNavigationProps {
  onMenuClick: () => void;
}

export function TopNavigation({ onMenuClick }: TopNavigationProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const { theme, setTheme } = useTheme();

  console.log('On Mouse Click:', onMenuClick);

  const navItems = [
    { icon: Home, label: 'Home', href: '/', active: true },
    { icon: Users, label: 'My Network', href: '/network', active: false },
    { icon: Briefcase, label: 'Jobs', href: '/jobs', active: false },
    {
      icon: MessageCircle,
      label: 'Messaging',
      href: '/messages',
      active: false,
    },
    {
      icon: Bell,
      label: 'Notifications',
      href: '/notifications',
      active: false,
      badge: 3,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Left Section - Logo and Search */}
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">UC</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 h-9 shadow-none border rounded-full dark:bg-muted text-sm placeholder:text-gray-600 focus:bg-white focus:!ring-0"
              />
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center dark:text-white space-y-1 px-3 py-2 rounded-sm transition-colors group ${
                    item.active ? 'text-gray-900' : 'hover:text-gray-900'
                  }`}
                >
                  <div className="relative">
                    <span className="w-full">
                      <Icon className="h-6 w-6" />
                      {item.active && (
                        <div className="absolute -bottom-6 w-full bg-primary left-1/2 transform -translate-x-1/2 h-0.5"></div>
                      )}
                    </span>
                    {item.badge && (
                      <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  {/* <span className="text-xs font-normal">{item.label}</span> */}
                </a>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center justify-center space-x-6">
            {/* Theme Toggle */}
            <div className="flex pl-3 md:pl-0 space-x-1">
              <button
                className=""
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-6 w-6 dark:hidden" />
                <Moon className="h-6 w-6 hidden dark:block" />
              </button>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex hover:!bg-transparent flex-col items-center space-y-1 px-3 py-2 h-auto text-gray-600"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://media.licdn.com/dms/image/v2/D5603AQHCxzu2HIx-4g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718216985781?e=1755734400&v=beta&t=i9A3-15J5EgCmuc5A9wjTM1_gCR1BnKtbLAq4Q22EWI"
                        alt="Profile"
                      />
                      <AvatarFallback className="text-xs">Me</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings & Privacy</DropdownMenuItem>
                  <DropdownMenuItem>Help</DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* For Business Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="xl:flex hidden hover:!bg-transparent flex-col items-center space-y-1 px-3 h-auto text-gray-500 dark:text-gray-300 hover:cursor-not-allowed"
                >
                  <Grid3X3 className="h-6 w-6" />
                  <div className="flex items-center">
                    <span className="text-xs">For Universitries</span>
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem>Advertise</DropdownMenuItem>
                <DropdownMenuItem>Sales Solutions</DropdownMenuItem>
                <DropdownMenuItem>University Manager</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Premium CTA */}
            <div className="hidden xl:block">
              <span className="text-xs text-amber-600 font-medium">
                Get 50% Off Sales Nav
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
