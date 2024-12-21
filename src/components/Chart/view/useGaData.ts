import { useEffect, useState } from 'react';

export type ApiDataItem = {
  yearMonth: string;
  screenPageViews: string;
};

export type ChartDataItem = {
  month: string;
  desktop: number;
};

const getMonthName = (yearMonth: string): string => {
  const year = parseInt(yearMonth.substring(0, 4), 10);
  const month = parseInt(yearMonth.substring(4, 6), 10) - 1;
  return new Date(year, month).toLocaleString('default', { month: 'long' });
};

export const useGaData = (startDate: string, endDate: string): ChartDataItem[] => {
  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/ga?startDate=${startDate}&endDate=${endDate}&dimensions=yearMonth`
        );
        const responseData: ApiDataItem[] = await res.json();

        if (!Array.isArray(responseData)) {
          console.error('Data is not an array:', responseData);
          return;
        }

        const monthlyData = responseData.reduce<{ [key: string]: number }>((acc, item) => {
          const month = item.yearMonth;
          if (!acc[month]) {
            acc[month] = 0;
          }
          acc[month] += parseInt(item.screenPageViews, 10);
          return acc;
        }, {});

        const chartData: ChartDataItem[] = Object.keys(monthlyData).map((month) => ({
          month: getMonthName(month),
          desktop: monthlyData[month],
        }));

        setData(chartData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  return data;
};
