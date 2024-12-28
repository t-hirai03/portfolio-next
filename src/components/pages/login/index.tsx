'use client';

import { signIn } from 'next-auth/react';

import { Icons } from '@/components/LoginIcon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage(): JSX.Element {
  return (
    <div className='container flex flex-col items-center justify-center custom-min-height'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl text-center'>ログイン</CardTitle>
          <CardDescription className='text-center'>
            GitHubまたはGoogleアカウントでログインしてください。
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <Button
            variant='outline'
            className='w-full'
            onClick={() => signIn('github', {}, { prompt: 'login' })}
          >
            <Icons.GitHub className='mr-2 h-4 w-4' />
            GitHubでログイン
          </Button>
          <Button
            variant='outline'
            className='w-full'
            onClick={() => signIn('google', {}, { prompt: 'login' })}
          >
            <Icons.Google className='mr-2 h-4 w-4' />
            Googleでログイン
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
