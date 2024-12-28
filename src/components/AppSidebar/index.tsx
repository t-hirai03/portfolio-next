'use client';

import { BarChart, SquareTerminal } from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/Navigation/Main';
import { NavUser } from '@/components/Navigation/User';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

const data = {
  navMain: [
    {
      title: 'メイン',
      icon: SquareTerminal,
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
      ],
    },
    {
      title: '分析',
      icon: BarChart,
      items: [
        {
          title: 'アクセス解析',
          url: '/analytics',
          icon: BarChart,
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
