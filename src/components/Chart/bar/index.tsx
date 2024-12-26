'use client';

import { Bar, BarChart, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

import { useBrowserData } from './useBrowserData';

// グラフのデータ設定
const chartConfig = {
  Chrome: { label: 'Chrome', color: 'hsl(var(--chart-1))' },
  Safari: { label: 'Safari', color: 'hsl(var(--chart-2))' },
  Firefox: { label: 'Firefox', color: 'hsl(var(--chart-3))' },
  Edge: { label: 'Edge', color: 'hsl(var(--chart-4))' },
  Other: { label: 'Other', color: 'hsl(var(--chart-5))' },
};

export function BarGraph(): JSX.Element {
  const data = useBrowserData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>ブラウザごとの閲覧数</CardTitle>
        <CardDescription>各ブラウザの閲覧数データ（全期間）</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data} layout='vertical' margin={{ left: 0 }}>
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
            <Bar dataKey='screenPageViews' radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
