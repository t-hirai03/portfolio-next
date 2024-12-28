import { ProjectsTable } from '@/components/ProjectsTable';
import { Title } from '@/components/Title';

export function generateMetadata() {
  return {
    title: '制作実績 | ポートフォリオ',
  };
}

export default function ProjectsPage(): JSX.Element {
  return (
    <div className='flex flex-1 flex-col gap-4 pt-0'>
      <Title text='制作実績' />
      <ProjectsTable />
    </div>
  );
}
