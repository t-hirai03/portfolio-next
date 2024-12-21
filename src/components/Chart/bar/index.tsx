'use client';

import { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

// 型定義 (APIデータ)
type ApiDataItem = {
  browser: string;
  screenPageViews: string;
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

export function BarGraph(): JSX.Element {
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
          screenPageViews: item.screenPageViews,
          fill: chartConfig[item.browser as keyof typeof chartConfig]?.color || 'gray',
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
            <XAxis dataKey='screenPageViews' type='number' hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey='screenPageViews' layout='vertical' radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
