'use client';

import Image from 'next/image';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

import { Title } from '@/components/Title';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import useProfile from '@/hooks/UseProfile';

export default function ProfilePage(): JSX.Element {
  const { profile } = useProfile();

  return (
    <div className='bg-background text-foreground'>
      <div className='max-w-7xl mx-auto'>
        <Title text='プロフィール' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          <Card className='sm:col-span-2'>
            <CardHeader className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4'>
              <Avatar className='h-20 w-20'>
                <AvatarImage src={profile?.icon.url} alt={profile?.name} />
                <AvatarFallback>平井</AvatarFallback>
              </Avatar>
              <div className='text-center sm:text-left'>
                <CardTitle className='text-xl sm:text-2xl'>{profile?.name}</CardTitle>
                <p className='text-muted-foreground'>{profile?.furigana}</p>
                <p className='text-muted-foreground'>{profile?.date_of_birth}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className='mb-4 text-sm sm:text-base'>
                {profile?.self_introduction?.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className='flex justify-center sm:justify-start space-x-4'>
                <a href={profile?.github} className='text-muted-foreground hover:text-foreground'>
                  <FaGithub className='h-6 w-6' />
                </a>
                <a href={profile?.email} className='text-muted-foreground hover:text-foreground'>
                  <FaEnvelope className='h-6 w-6' />
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className='sm:col-span-2 lg:col-span-1'>
            <CardHeader>
              <CardTitle>{profile?.free_title}</CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center'>
              {profile?.free_image?.url && (
                <Image
                  src={profile?.free_image?.url}
                  alt=''
                  width={160}
                  height={300}
                  className='rounded-lg'
                />
              )}
            </CardContent>
            <CardFooter>
              <p className='text-muted-foreground text-center mt-2'>{profile?.free_text}</p>
            </CardFooter>
          </Card>
          <Card className='sm:col-span-2'>
            <CardHeader>
              <CardTitle>経歴</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2 sm:space-y-4'>
              {profile?.career?.map((job) => (
                <div key={job.title} className='border-l-2 border-primary pl-4 pb-4'>
                  <h3 className='font-semibold'>{job.title}</h3>
                  <p className='text-sm text-muted-foreground mt-1'>
                    {job.Industry} | {job.period_of_employment}
                  </p>
                  <p className='mt-2'>{job.business_content}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className='sm:col-span-2 lg:col-span-1'>
            <CardHeader>
              <CardTitle>プロジェクト</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              {profile?.projects?.map((project) => (
                <div key={project.title} className='border-l-2 border-secondary pl-4 py-2'>
                  <h3 className='font-semibold'>{project.title}</h3>
                  <p className='text-sm text-muted-foreground mt-2'>{project.technology}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
