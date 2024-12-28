import { BarGraph } from '@/components/Chart/bar';
import { LineGraph } from '@/components/Chart/line';
import { View } from '@/components/Chart/view';
import { Title } from '@/components/Title';

export function generateMetadata() {
  return {
    title: 'アクセス解析 | ポートフォリオ',
  };
}

export default function AnalyticsPage(): JSX.Element {
  return (
    <div className='flex flex-1 flex-col gap-4 pt-0'>
      <Title text='アクセス解析' />
      <p>Google AnalyticsからAPIでデータを取得し、ここで表示しています。</p>
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
    </div>
  );
}
