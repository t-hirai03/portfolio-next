import { BetaAnalyticsDataClient } from '@google-analytics/data';

const propertyId = '470506821';

export async function GET(req: Request) {
  try {
    // 環境変数の取得とバリデーション
    const encodedCredentials = process.env.GOOGLE_CREDENTIALS_BASE64;
    if (!encodedCredentials) {
      throw new Error('GOOGLE_CREDENTIALS_BASE64 is not defined.');
    }

    const credentials = JSON.parse(Buffer.from(encodedCredentials, 'base64').toString('ascii'));

    const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

    // クエリパラメーター取得
    const url = new URL(req.url);
    const startDateParam = url.searchParams.get('startDate');
    const endDateParam = url.searchParams.get('endDate');
    const dimensionsParam = url.searchParams.get('dimensions');
    const metricsParam = url.searchParams.get('metrics');

    // 日付のデフォルト設定
    const today = new Date().toISOString().split('T')[0];
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const defaultStartDate = oneYearAgo.toISOString().split('T')[0];

    const startDate = startDateParam || defaultStartDate; // デフォルトは1年前
    const endDate = endDateParam || today; // デフォルトは今日

    // dimensionsとmetricsのデフォルト設定
    const dimensions = dimensionsParam
      ? dimensionsParam.split(',').map((d) => ({ name: d.trim() }))
      : [{ name: 'browser' }]; // デフォルトはブラウザ

    const metrics = metricsParam
      ? metricsParam.split(',').map((m) => ({ name: m.trim() }))
      : [{ name: 'screenPageViews' }]; // デフォルトは訪問者数

    // APIリクエスト
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate,
          endDate,
        },
      ],
      dimensions,
      metrics,
    });

    // データ加工
    const responseData = response.rows?.map((row) => {
      const dimensionsData = dimensions.map((dim, index) => ({
        [dim.name]: row.dimensionValues?.[index]?.value || 'unknown',
      }));

      const metricsData = metrics.map((met, index) => ({
        [met.name]: row.metricValues?.[index]?.value || '0',
      }));

      return Object.assign({}, ...dimensionsData, ...metricsData);
    });

    // 正常レスポンス
    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    const err = error as Error;
    // エラーレスポンス
    return new Response(
      JSON.stringify({
        statusCode: 500,
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      }),
      { status: 500 }
    );
  }
}
