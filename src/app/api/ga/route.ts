import { BetaAnalyticsDataClient } from '@google-analytics/data';

const propertyId = '470506821';

export async function GET(req: Request) {
  try {
    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64!, 'base64').toString('ascii')
    );
    const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2024-12-18', // 取得したい期間を設定
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'pagePath', // ページのパスを取得
        },
      ],
      metrics: [
        {
          name: 'screenPageViews', // PV数を取得
        },
      ],
    });

    const rankingData = response.rows?.map((row) => ({
      pagePath: row.dimensionValues?.[0]?.value || '',
      uniquePageviews: row.metricValues?.[0]?.value || '0',
    }));

    return new Response(JSON.stringify(rankingData), { status: 200 });
  } catch (error) {
    const err = error as Error;
    return new Response(JSON.stringify({ statusCode: 500, message: err.message }), { status: 500 });
  }
}
