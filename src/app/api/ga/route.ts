import { BetaAnalyticsDataClient } from '@google-analytics/data';

const propertyId = '470506821';

export async function GET(_req: Request) {
  try {
    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64!, 'base64').toString('ascii')
    );
    const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

    // 1週間前から今日までの範囲を動的に設定
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);

    const startDate = lastWeek.toISOString().split('T')[0]; // yyyy-mm-dd
    const endDate = today.toISOString().split('T')[0]; // yyyy-mm-dd

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate,
          endDate,
        },
      ],
      dimensions: [
        {
          name: 'date',
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
      ],
    });

    const rankingData = response.rows?.map((row) => ({
      date: row.dimensionValues?.[0]?.value || '',
      screenPageViews: row.metricValues?.[0]?.value || '0',
    }));

    return new Response(JSON.stringify(rankingData), { status: 200 });
  } catch (error) {
    const err = error as Error;
    return new Response(JSON.stringify({ statusCode: 500, message: err.message }), { status: 500 });
  }
}
