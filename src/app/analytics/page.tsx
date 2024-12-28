import AnalyticsPage from '@/components/pages/analytics';

export function generateMetadata() {
  return {
    title: 'アクセス解析 | ポートフォリオ',
  };
}

export default function Analytics(): JSX.Element {
  return <AnalyticsPage />;
}
