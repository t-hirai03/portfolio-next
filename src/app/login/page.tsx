import LoginPage from '@/components/pages/login';

export function generateMetadata() {
  return {
    title: 'ログイン | ポートフォリオ',
  };
}

export default function Login(): JSX.Element {
  return <LoginPage />;
}
