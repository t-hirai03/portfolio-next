import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { ThemeToggle } from '@/components/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function DashboardProfile() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8'>
          <h1 className='text-2xl sm:text-4xl font-bold mb-4 sm:mb-0'>マイプロフィール</h1>
          <ThemeToggle />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {/* プロフィール概要 */}
          <Card className='sm:col-span-2'>
            <CardHeader className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4'>
              <Avatar className='h-20 w-20'>
                <AvatarImage src='/placeholder.svg?height=80&width=80' alt='プロフィール画像' />
                <AvatarFallback>山田</AvatarFallback>
              </Avatar>
              <div className='text-center sm:text-left'>
                <CardTitle className='text-xl sm:text-2xl'>山田 太郎</CardTitle>
                <p className='text-sm text-muted-foreground'>フルスタックウェブ開発者</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className='mb-4 text-sm sm:text-base'>
                5年間のウェブ開発経験を持つフルスタック開発者です。ユーザー体験を重視した
                革新的なウェブアプリケーションの開発に情熱を注いでいます。
              </p>
              <div className='flex justify-center sm:justify-start space-x-4'>
                <a
                  href='https://github.com/yourusername'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <FaGithub className='h-6 w-6' />
                </a>
                <a
                  href='mailto:your.email@gmail.com'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <FaEnvelope className='h-6 w-6' />
                </a>
                <a
                  href='https://linkedin.com/in/yourusername'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <FaLinkedin className='h-6 w-6' />
                </a>
                <a
                  href='https://twitter.com/yourusername'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <FaTwitter className='h-6 w-6' />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* スキル */}
          <Card className='sm:col-span-2 lg:col-span-1'>
            <CardHeader>
              <CardTitle>スキル</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              {[
                { name: 'JavaScript', level: 90 },
                { name: 'React', level: 85 },
                { name: 'Node.js', level: 80 },
                { name: 'Python', level: 75 },
                { name: 'SQL', level: 70 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className='flex justify-between mb-1'>
                    <span className='text-sm font-medium'>{skill.name}</span>
                    <span className='text-sm font-medium'>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className='h-2' />
                </div>
              ))}
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
                  title: 'シニアウェブ開発者',
                  company: 'テックイノベーション株式会社',
                  period: '2021年 - 現在',
                  description: 'フルスタック開発、チームリード、アーキテクチャ設計',
                },
                {
                  title: 'ウェブ開発者',
                  company: 'クリエイティブウェブ株式会社',
                  period: '2018年 - 2021年',
                  description: 'フロントエンド開発、RESTful API設計と実装',
                },
                {
                  title: 'インターン',
                  company: 'スタートアップテック',
                  period: '2017年',
                  description: 'ウェブアプリケーション開発の基礎を学ぶ',
                },
              ].map((job, index) => (
                <div key={index} className='border-l-2 border-primary pl-4 pb-4'>
                  <h3 className='font-semibold'>{job.title}</h3>
                  <p className='text-sm text-muted-foreground'>
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
                { name: 'ECサイトリニューアル', tech: 'React, Node.js, MongoDB' },
                { name: 'タスク管理アプリ', tech: 'Vue.js, Firebase' },
                { name: 'ブログプラットフォーム', tech: 'Next.js, GraphQL' },
              ].map((project, index) => (
                <div key={index} className='border-l-2 border-secondary pl-4 pb-4'>
                  <h3 className='font-semibold'>{project.name}</h3>
                  <p className='text-sm text-muted-foreground'>{project.tech}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
