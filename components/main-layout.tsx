'use client';

import type React from 'react';

import { useState } from 'react';
import { TopNavigation } from './top-navigation';
import { LeftSidebar } from './left-sidebar';
import { RightSidebar } from './right-sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      <TopNavigation onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex pt-16">
        {/* Left Sidebar - Desktop */}
        <div className="hidden lg:block border-r w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <LeftSidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className="w-64 h-full bg-background"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-16">
                <LeftSidebar />
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 xl:mr-80 px-4 py-6">{children}</main>

        {/* Right Sidebar - Desktop */}
        <div className="hidden xl:block w-80 fixed right-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
