'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props): JSX.Element => {
  return (
    <SessionProvider>
      <AuthSessionTracking>{children}</AuthSessionTracking>
    </SessionProvider>
  );
};

const AuthSessionTracking = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'loginUserInfo',
        userName: session.user.name,
        userEmail: session.user.email,
        userIcon: session.user.image,
      });
    }
  }, [session]);

  return <>{children}</>;
};
