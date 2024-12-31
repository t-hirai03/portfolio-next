import type { Metadata } from 'next';

import ProjectsPage from '@/components/pages/projects';

export function generateMetadata(): Metadata {
  return {
    title: '制作実績 | ポートフォリオ',
  };
}

export default function Projects(): JSX.Element {
  return <ProjectsPage />;
}
