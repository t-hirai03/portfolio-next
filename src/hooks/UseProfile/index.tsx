'use client';

import { useEffect, useState } from 'react';

import { Profile, ProfileResponse } from '@/types/profile';

const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL}/profile`, {
          headers: {
            'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data: ProfileResponse = await response.json();
        setProfile(data.contents[0]);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('An unknown error occurred');
        }
      }
    };

    fetchProfile();
  }, []);

  return { profile };
};

export default useProfile;
