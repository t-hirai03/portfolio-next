import ProjectsPage from '@/components/pages/projects';

export function generateMetadata() {
  return {
    title: '制作実績 | ポートフォリオ',
  };
}

export default function Projects(): JSX.Element {
  return <ProjectsPage />;
}
