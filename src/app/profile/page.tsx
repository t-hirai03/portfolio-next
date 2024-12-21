import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfilePage(): JSX.Element {
  return (
    <div className='container mx-auto p-4'>
      <Card className='max-w-3xl mx-auto'>
        <CardHeader>
          <div className='flex items-center space-x-4'>
            <Avatar className='w-20 h-20'>
              <AvatarImage src='/avatars/01.png' alt='プロフィール画像' />
              <AvatarFallback>平井</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className='text-2xl'>平井 隆裕</CardTitle>
              <p className='text-muted-foreground'>エンジニア</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <section>
              <h2 className='text-xl font-semibold mb-2'>自己紹介</h2>
              <p />
            </section>
            <section>
              <h2 className='text-xl font-semibold mb-2'>スキル</h2>
            </section>
            <section>
              <h2 className='text-xl font-semibold mb-2'>趣味</h2>
            </section>
            <div className='mt-6'>
              <Link href='/'>
                <Button variant='outline'>ダッシュボードに戻る</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
