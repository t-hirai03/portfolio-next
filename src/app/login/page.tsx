import type { Metadata } from 'next';

import LoginPage from '@/components/pages/login';

export function generateMetadata(): Metadata {
  return {
    title: 'ログイン | ポートフォリオ',
  };
}

export default function Login(): JSX.Element {
  return <LoginPage />;
}
