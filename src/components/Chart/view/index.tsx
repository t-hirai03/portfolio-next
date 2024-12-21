'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';

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
} satisfies ChartConfig;

// 現在の日付から6ヶ月前の月の初日を計算する関数
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export function View(): JSX.Element {
  // 現在の日付 (終了日 = 今月の最終日)
  const today = new Date();
  const endDate = new Date(today);
  endDate.setMonth(today.getMonth() + 1);
  endDate.setDate(0);
  const formattedEndDate = formatDate(endDate);

  // 6ヶ月前の月の初日 (開始日)
  today.setMonth(today.getMonth() - 6);
  today.setDate(1); // 月の初日
  const formattedStartDate = formatDate(today);

  // useGaDataフックを使用してデータを取得
  const data = useGaData(formattedStartDate, formattedEndDate);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>Last 6 Months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)} // 月名の最初の3文字
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey='desktop' fill='var(--color-desktop)' radius={8}>
              <LabelList position='top' offset={12} className='fill-foreground' fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
