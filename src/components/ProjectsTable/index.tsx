'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useProjects } from '@/hooks/UseProjects';

export const ProjectsTable = (): JSX.Element => {
  // カスタムフックでAPIからデータ取得
  const { projects } = useProjects();
  return (
    <div className='min-h-[100vh] flex-1 rounded-xl border p-4 md:min-h-0'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[300px]'>サイト名</TableHead>
            <TableHead>使用技術</TableHead>
            <TableHead>URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className='font-medium'>{project.title}</TableCell>
              <TableCell>{project.technology}</TableCell>
              <TableCell>
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  {project.url}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
