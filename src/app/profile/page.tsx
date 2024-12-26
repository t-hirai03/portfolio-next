import { FaEnvelope, FaGithub } from 'react-icons/fa';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardProfile() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8'>
          <h1 className='text-2xl sm:text-4xl font-bold mb-4 sm:mb-0'>プロフィール</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {/* プロフィール概要 */}
          <Card className='sm:col-span-2'>
            <CardHeader className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4'>
              <Avatar className='h-20 w-20'>
                <AvatarImage src='/placeholder.svg?height=80&width=80' alt='プロフィール画像' />
                <AvatarFallback>平井</AvatarFallback>
              </Avatar>
              <div className='text-center sm:text-left'>
                <CardTitle className='text-xl sm:text-2xl'>平井 隆裕</CardTitle>
                <p className='text-muted-foreground'>ひらい たかひろ</p>
                {/* 生年月日 */}
                <p className='text-muted-foreground'>1995年9月23日生まれ</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className='mb-4 text-sm sm:text-base'>
                5年間地元の福井県でSESとWEB制作を経験し、2024年から東京の企業でフロントエンドエンジニアをしています。
                <br />
                最近はNext.jsとTypeScriptを使用したウェブアプリケーション開発とAIに興味があります。
                <br />
                休日はよく食べに行きます。お酒も好きです。
              </p>
              <div className='flex justify-center sm:justify-start space-x-4'>
                <a
                  href='https://github.com/t-hirai03'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <FaGithub className='h-6 w-6' />
                </a>
                <a
                  href='mailto:hiraitakahiro0923@gmail.com'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <FaEnvelope className='h-6 w-6' />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* スキル */}
          <Card className='sm:col-span-2 lg:col-span-1'>
            <CardHeader>
              <CardTitle>愛犬</CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center'>
              <img
                src='/path/to/dog-image.jpg'
                alt='愛犬の画像'
                className='rounded-lg w-40 h-40 object-cover'
              />
            </CardContent>
          </Card>

          {/* 経歴 */}
          <Card className='sm:col-span-2'>
            <CardHeader>
              <CardTitle>経歴</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2 sm:space-y-4'>
              {[
                {
                  title: '事業会社のフロントエンドエンジニア',
                  company: '株式会社シーラ',
                  period: '2024年 - 現在',
                  description:
                    'Next.jsとTypeScriptを使用したウェブアプリケーション開発、Railsとの連携、APIの実装',
                },
                {
                  title: 'Web制作会社',
                  company: 'ジェイクール株式会社',
                  period: '2022年 - 2023年',
                  description: 'Webサイト制作、WordPressのカスタマイズ',
                },
                {
                  title: 'SES',
                  company: 'パワーシステム株式会社',
                  period: '2018年 - 2021年',
                  description: '福井県民衛生プロジェクトのウェブアプリケーション開発。',
                },
              ].map((job, index) => (
                <div key={index} className='border-l-2 border-primary pl-4 pb-4'>
                  <h3 className='font-semibold'>{job.title}</h3>
                  <p className='text-sm text-muted-foreground mt-1'>
                    {job.company} | {job.period}
                  </p>
                  <p className='mt-2'>{job.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* プロジェクト */}
          <Card className='sm:col-span-2 lg:col-span-1'>
            <CardHeader>
              <CardTitle>プロジェクト</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              {[
                { name: '利回りくん', tech: 'Next.js, Rails, TypeScript, SQL' },
                { name: '福井県民衛生プロジェクト', tech: 'Vue.js,Java' },
              ].map((project, index) => (
                <div key={index} className='border-l-2 border-secondary pl-4 py-2'>
                  <h3 className='font-semibold'>{project.name}</h3>
                  <p className='text-sm text-muted-foreground mt-2'>{project.tech}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
