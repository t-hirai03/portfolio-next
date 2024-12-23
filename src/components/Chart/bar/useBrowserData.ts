// useBrowserData.ts
import { useEffect, useState } from 'react';

type ApiDataItem = {
  browser: string;
  screenPageViews: string;
  fill: string;
};

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
};

export function useBrowserData(): ApiDataItem[] {
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

  return data;
}
