'use client';

import { BarGraph } from '@/components/Chart/bar';
import { LineGraph } from '@/components/Chart/line';
import { View } from '@/components/Chart/view';
import { ProjectsTable } from '@/components/projects';

export default function Home(): JSX.Element {
  return (
    <div className='flex flex-1 flex-col gap-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <div className='rounded-xl bg-muted/50'>
          <BarGraph />
        </div>
        <div className='rounded-xl bg-muted/50'>
          <View />
        </div>
        <div className='rounded-xl bg-muted/50'>
          <LineGraph />
        </div>
      </div>
      <ProjectsTable />
    </div>
  );
}
