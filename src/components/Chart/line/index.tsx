'use client';

import { useEffect, useState } from 'react';
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

// 型定義
type DataItem = {
  date: string;
  week: string;
  screenPageViews: number;
  dateObj: Date;
};

// APIから取得するデータの型
type ApiDataItem = {
  date: string;
  screenPageViews: string;
};

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

// **クエリパラメーターのフォーマット関数**
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function LineGraph(): JSX.Element {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // **期間指定用のパラメーターを追加**
      const today = new Date();
      const lastWeek = new Date(today);
      lastWeek.setDate(today.getDate() - 7);

      // クエリパラメーターを生成
      const startDate = formatDate(lastWeek);
      const endDate = formatDate(today);

      // APIエンドポイントにクエリパラメーターを追加
      const res = await fetch(`/api/ga?startDate=${startDate}&endDate=${endDate}&dimensions=date`);
      const data: ApiDataItem[] = await res.json();

      if (!Array.isArray(data)) {
        console.error('Data is not an array:', data);
        return;
      }

      // データ変換処理
      const chartData: DataItem[] = data.map((item) => {
        const dateStr = item.date;
        const date = new Date(
          `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`
        );
        const weekday = date.toLocaleString('en-US', { weekday: 'long' });

        return {
          date: dateStr,
          week: weekday,
          screenPageViews: parseInt(item.screenPageViews, 10),
          dateObj: date,
        };
      });

      // 日付順にソート
      const sortedData = chartData.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

      setData(sortedData);
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>Showing data for the selected period</CardDescription>
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
              tickMargin={8}
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
