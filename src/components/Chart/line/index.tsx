'use client';

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import { useGaData } from './useGaData';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function LineGraph(): JSX.Element {
  const data = useGaData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>ページ閲覧数</CardTitle>
        <CardDescription>計測できた直近7日分のデータを計測</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='week'
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
            <Line
              dataKey='screenPageViews'
              type='natural'
              stroke='var(--color-desktop)'
              strokeWidth={2}
              dot={{
                fill: 'var(--color-desktop)',
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList position='top' offset={12} className='fill-foreground' fontSize={12} />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
