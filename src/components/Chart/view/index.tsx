'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

import { useGaData } from './useGaData';

// 日付を計算するユーティリティ関数
const getFormattedDate = (monthOffset: number, isStartOfMonth: boolean): string => {
  const date = new Date();
  date.setMonth(date.getMonth() + monthOffset);
  if (isStartOfMonth) {
    date.setDate(1); // 月の初日
  } else {
    date.setMonth(date.getMonth() + 1);
    date.setDate(0); // 月の最終日
  }
  return date.toISOString().split('T')[0];
};

// 現在の日付と6ヶ月前の日付を取得
const formattedEndDate = getFormattedDate(1, false); // 今月の最終日
const formattedStartDate = getFormattedDate(-6, true); // 6ヶ月前の月の初日

// グラフ設定
const chartConfig = {
  desktop: { label: 'screenPageView', color: 'hsl(var(--chart-1))' },
};

export function View(): JSX.Element {
  const data = useGaData(formattedStartDate, formattedEndDate);

  return (
    <Card>
      <CardHeader>
        <CardTitle>月間閲覧数</CardTitle>
        <CardDescription>過去6ヶ月間のデータ</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
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
