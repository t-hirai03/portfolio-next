import { useEffect, useState } from 'react';

type ApiDataItem = {
  date: string;
  screenPageViews: string;
};

type DataItem = {
  date: string;
  week: string;
  screenPageViews: number;
  dateObj: Date;
};

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function useGaData() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastWeek = new Date(today);
      lastWeek.setDate(today.getDate() - 7);

      const startDate = formatDate(lastWeek);
      const endDate = formatDate(today);

      const res = await fetch(`/api/ga?startDate=${startDate}&endDate=${endDate}&dimensions=date`);
      const apiData: ApiDataItem[] = await res.json();

      if (!Array.isArray(apiData)) {
        console.error('Data is not an array:', apiData);
        return;
      }

      const chartData: DataItem[] = apiData.map((item) => {
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

      const sortedData = chartData.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

      setData(sortedData);
    };

    fetchData();
  }, []);

  return data;
}
