import type { Metadata } from 'next';

import ProfilePage from '@/components/pages/profile';

export function generateMetadata(): Metadata {
  return {
    title: 'プロフィール | ポートフォリオ',
  };
}

export default function Profile(): JSX.Element {
  return <ProfilePage />;
}
