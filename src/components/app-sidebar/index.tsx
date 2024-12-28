'use client';

import { AudioWaveform, Command, GalleryVerticalEnd, SquareTerminal } from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

const data = {
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'プロフィール',
      url: '/',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'トップページ',
          url: '/',
        },
        {
          title: 'プロフィール',
          url: '/profile',
        },
        {
          title: '制作実績',
          url: '/projects',
        },
        {
          title: '分析',
          url: '/analytics',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>): JSX.Element {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <div className='flex items-center justify-center h-16'>
          <h1 className='text-lg font-bold text-center group-data-[collapsible=icon]:hidden'>
            Portfolio Hirai
          </h1>
          <span className='text-2xl font-bold hidden group-data-[collapsible=icon]:block'>PH</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
