import Image from 'next/image';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

import { Title } from '@/components/Title';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfilePage(): JSX.Element {
  return (
    <div className='bg-background text-foreground'>
      <div className='max-w-7xl mx-auto'>
        <Title text='プロフィール' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          <Card className='sm:col-span-2'>
            <CardHeader className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4'>
              <Avatar className='h-20 w-20'>
                <AvatarImage
                  src='/assets/images/hirai.jpg?height=80&width=80'
                  alt='プロフィール画像'
                />
                <AvatarFallback>平井</AvatarFallback>
              </Avatar>
              <div className='text-center sm:text-left'>
                <CardTitle className='text-xl sm:text-2xl'>平井 隆裕</CardTitle>
                <p className='text-muted-foreground'>ひらい たかひろ</p>
                <p className='text-muted-foreground'>1995年9月23日生まれ</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className='mb-4 text-sm sm:text-base'>
                5年間地元の福井県でSESとWEB制作を経験し、2024年から東京の企業でフロントエンドエンジニアとして働いています。
                <br />
                最近はNext.jsとTypeScriptを使用したウェブアプリケーション開発とAIに興味があります。
                <br />
                休日はよく食べに行きます。焼酎よく飲みます。
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
              <Image
                src='/assets/images/dog.jpg'
                alt='あずき'
                width={160}
                height={300}
                className='rounded-lg'
              />
            </CardContent>
            <CardFooter>
              <p className='text-muted-foreground text-center mt-2'>あずき</p>
            </CardFooter>
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
