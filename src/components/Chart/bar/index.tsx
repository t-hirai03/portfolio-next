'use client';

import { Bar, BarChart, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import { useBrowserData } from './useBrowserData';

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
  const data = useBrowserData(); // カスタムフックでデータ取得

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
