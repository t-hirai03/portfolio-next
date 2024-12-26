'use client';

import { BarGraph } from '@/components/Chart/bar';
import { LineGraph } from '@/components/Chart/line';
import { View } from '@/components/Chart/view';
// import { ProjectsTable } from '@/components/projects';

export default function Home(): JSX.Element {
  return (
    <div className='flex flex-1 flex-col gap-4 pt-0'>
      <h1 className='text-3xl font-semibold text-primary'>ポートフォリオ</h1>
      <p>
        ここには自分のポートフォリオを表示します。
        どんなプロジェクトに取り組んでいるか、どんなスキルを持っているかを
        他の人に見せることができます。
      </p>

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
      {/* <ProjectsTable /> */}
    </div>
  );
}
