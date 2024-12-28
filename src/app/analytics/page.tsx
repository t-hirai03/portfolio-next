'use client';

import { BarGraph } from '@/components/Chart/bar';
import { LineGraph } from '@/components/Chart/line';
import { View } from '@/components/Chart/view';

export default function Analytics(): JSX.Element {
  return (
    <div className='flex flex-1 flex-col gap-4 pt-0'>
      <h1 className='text-3xl font-semibold text-primary'>分析</h1>
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
