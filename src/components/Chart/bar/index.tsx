'use client';

import { TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

// 型定義 (APIデータ)
type ApiDataItem = {
  browser: string;
  screenPageViews: string; // `visitors` を `screenPageViews` に変更
  fill: string;
};

// チャート設定
const chartConfig = {
  Chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  Safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  Firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
  Edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
  Other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function BarGraph() {
  const [data, setData] = useState<ApiDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // APIリクエストを実行
        const res = await fetch(`/api/ga?dimensions=browser`);
        const responseData: ApiDataItem[] = await res.json();

        if (!Array.isArray(responseData)) {
          console.error('Data is not an array:', responseData);
          return;
        }

        // データ変換処理
        const chartData = responseData.map((item) => ({
          browser: item.browser,
          screenPageViews: item.screenPageViews, // `visitors` を `screenPageViews` に変更
          fill: chartConfig[item.browser as keyof typeof chartConfig]?.color || 'gray', // 色設定
        }));

        setData(chartData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Browser Usage</CardTitle>
        <CardDescription>Browser data for all time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout='vertical'
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey='browser'
              type='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
            />
            <XAxis dataKey='screenPageViews' type='number' hide />{' '}
            {/* `visitors` を `screenPageViews` に変更 */}
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey='screenPageViews' // `visitors` を `screenPageViews` に変更
              layout='vertical'
              radius={5}
              fill={(entry) => entry.fill}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Browser usage trends <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Data collected for the entire period
        </div>
      </CardFooter>
    </Card>
  );
}
