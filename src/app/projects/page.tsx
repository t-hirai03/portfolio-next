'use client';

import { ProjectsTable } from '@/components/projects';

export default function ProjectsPage(): JSX.Element {
  return (
    <div className='flex flex-1 flex-col gap-4 pt-0'>
      <h2 className='text-2xl font-bold mb-4'>制作実績</h2>
      <ProjectsTable />
    </div>
  );
}
