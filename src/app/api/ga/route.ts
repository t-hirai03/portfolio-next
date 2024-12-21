import { BetaAnalyticsDataClient } from '@google-analytics/data';

const propertyId = '470506821';

function getDefaultDateRange() {
  const today = new Date().toISOString().split('T')[0];
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const defaultStartDate = oneYearAgo.toISOString().split('T')[0];
  return { startDate: defaultStartDate, endDate: today };
}

// 修正後のparseParams関数
function parseParams(param: string | null, defaultValue: string[]) {
  return param ? param.split(',').map((item) => item.trim()) : defaultValue;
}

export async function GET(req: Request) {
  try {
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

    // デフォルト日付取得
    const { startDate, endDate } = getDefaultDateRange();
    const startDateFinal = startDateParam || startDate;
    const endDateFinal = endDateParam || endDate;

    // dimensionsとmetricsのデフォルト設定
    const dimensions = parseParams(dimensionsParam, ['browser']);
    const metrics = parseParams(metricsParam, ['screenPageViews']);

    // APIリクエスト
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: startDateFinal, endDate: endDateFinal }],
      dimensions: dimensions.map((dim) => ({ name: dim })),
      metrics: metrics.map((met) => ({ name: met })),
    });

    // データ加工
    const responseData = response.rows?.map((row) => {
      const dimensionsData = dimensions.map((dim, index) => ({
        [dim]: row.dimensionValues?.[index]?.value || 'unknown',
      }));
      const metricsData = metrics.map((met, index) => ({
        [met]: row.metricValues?.[index]?.value || '0',
      }));
      return { ...Object.assign({}, ...dimensionsData), ...Object.assign({}, ...metricsData) };
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
