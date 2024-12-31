module.exports = {
  siteUrl: 'https://portfolio-next-ts-orpin.vercel.app', // サイトURL
  generateRobotsTxt: true, // robots.txt の生成
  sitemapSize: 7000, // サイトマップの最大サイズ
  exclude: ['/login'], // 除外するURLの指定
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // 全体許可
        disallow: ['/login'], // /login のみ除外
      },
    ],
  },
};
