'use client';

import { Profile, ProfileResponse } from '@/types/profile';
import { useEffect, useState } from 'react';

const useProfile = () => {
  // プロフィールデータの状態管理
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // 実際のAPIエンドポイントに合わせて変更
        const response = await fetch('https://hirainextjs.microcms.io/api/v1/profile', {
          headers: {
            'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '', // 環境変数からAPIキーを取得
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data: ProfileResponse = await response.json();
        setProfile(data.contents[0]); // contents内のプロフィールを取得
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, loading, error };
};

export default useProfile;
