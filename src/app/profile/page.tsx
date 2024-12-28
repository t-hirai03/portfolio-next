import ProfilePage from '@/components/pages/profile';

export function generateMetadata() {
  return {
    title: 'プロフィール | ポートフォリオ',
  };
}

export default function Profile() {
  return <ProfilePage />;
}
