import { BetaAnalyticsDataClient } from '@google-analytics/data';

const propertyId = '470506821'; // プロパティID

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);

  // リクエストのパラメータから dimensions と metrics を取得
  const dimensions = searchParams.get('dimensions')?.split(',') || ['pagePath']; // デフォルトは pagePath
  const metrics = searchParams.get('metrics')?.split(',') || ['screenPageViews']; // デフォルトは screenPageViews

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
      dimensions: dimensions.map((name) => ({ name })), // dimensions を動的に設定
      metrics: metrics.map((name) => ({ name })), // metrics を動的に設定
    });

    // 動的に取得した dimensions と metrics に基づいて rankingData をマッピング
    const rankingData = response.rows?.map((row) => {
      const data: Record<string, string> = {};

      // dimensions と metrics を動的に処理
      dimensions.forEach((dimension, index) => {
        data[dimension] = row.dimensionValues?.[index]?.value || '';
      });
      metrics.forEach((metric, index) => {
        data[metric] = row.metricValues?.[index]?.value || '0';
      });

      return data;
    });

    return new Response(JSON.stringify(rankingData), { status: 200 });
  } catch (error) {
    const err = error as Error;
    return new Response(JSON.stringify({ statusCode: 500, message: err.message }), { status: 500 });
  }
}
